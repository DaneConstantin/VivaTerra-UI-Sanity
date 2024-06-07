import { fetcher } from "../../../lib/api";

import useSWR from "swr";
import { useState, useEffect } from "react";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import QuestionCards from "./QuestionCards";
import LoadingSkeletonFAQ from "./LoadingSkeletonFAQ";

export default function FAQSlider({ questions }) {
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const { data } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/faqs?pagination[page]=${pageIndex}&pagination[pageSize]=${pageSize}&populate=*`, fetcher, {
        fallbackData: questions
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

        <section className="px-8 md:px-0 flex flex-col items-center justify-between pb-20">
            {data ? (
                <QuestionCards questions={data} />
            ) : (
                <LoadingSkeletonFAQ />
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

        </section>

    );
}
export async function getStaticProps() {
    const getQuestions = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/properties?pagination[page]=1&pagination[pageSize]=${pageSize}&populate=*`
    );
    
    return {
        props: {
            questions: getQuestions,
        },
    };

}