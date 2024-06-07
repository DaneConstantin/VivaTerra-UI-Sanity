import { fetcher } from "../../../lib/api";
import Cards from './Cards';
import useSWR from "swr";
import { useState, useEffect } from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import LoadingSkeleton from "./LoadingSkeleton";

export default function PropertiesSlider({ properties }) {

    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const { data } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/properties?pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}&populate=*`, fetcher, {
        fallbackData: properties
    })

    useEffect(() => {
        const pageWidth = window.innerWidth;
        if (pageWidth <= 768) {
            setPageSize(1);
        } else if (pageWidth <= 1024) {
            setPageSize(2);
        }
        else {
            setPageSize(3);
        }
    }, []);

    return (

        <section className="px-8 md:px-0 flex flex-col items-center justify-between pt-6 pb-20">
            {data ? (
                <Cards propertiesListed={data} />
            ) : (
                <LoadingSkeleton />
            )
            }

            {/* pagination */}
            <div className="mt-8 border-t border-[#262626] w-full pt-4 flex justify-between">
                <span>
                    {`${pageIndex}`}<span className="text-[#999]">{` of ${data && data.meta.pagination.pageCount
                        }`}</span>
                </span>
                <div className="flex no-wrap gap-2.5">
                    <button
                        className={`w-11 h-11 rounded-full border border-[#262626] text-white p-2 ${pageIndex === 1 ? 'bg-[#1A1A1A]' : 'bg-[#262626]'
                            }`}
                        disabled={pageIndex === 1}
                        onClick={() => setPageIndex(pageIndex - 1)}
                    >
                        <IoMdArrowBack className={`text-2xl ${pageIndex === 1
                            ? 'text-[#4D4D4D]'
                            : 'text-white'
                            }  hover:text-[#703BF7]`} />

                    </button>
                    <button
                        className={`w-11 h-11 rounded-full border border-[#262626]  text-white p-2 ${pageIndex === (data && data.meta.pagination.pageCount)
                            ? 'bg-[#1A1A1A]'
                            : 'bg-[#262626]'
                            }`}
                        disabled={pageIndex === (data && data.meta.pagination.pageCount)}
                        onClick={() => setPageIndex(pageIndex + 1)}
                    >
                        <IoMdArrowForward className={`text-2xl ${pageIndex === (data && data.meta.pagination.pageCount)
                            ? 'text-[#4D4D4D]'
                            : 'text-white'
                            }  hover:text-[#703BF7]`} />
                    </button>
                </div>
            </div>

        </section >

    );
}

export async function getStaticProps() {
    const getProperties = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/properties?pagination[page]=1&pagination[pageSize]=${pageSize}&populate=*`
    );
    
    return {
        props: {
            properties: getProperties,
        },
    };

}