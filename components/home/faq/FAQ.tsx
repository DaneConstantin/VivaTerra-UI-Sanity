import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import QuestionCards from "./QuestionCards";
import LoadingSkeletonFAQ from "./LoadingSkeletonFAQ";
import { useEffect, useState } from 'react';
import { sanityFetch } from "../../../sanity/lib/fetch";
import { FAQ_QUERY } from "../../../sanity/lib/queries";
import { SanityDocument } from 'next-sanity';


export default function FAQSlider() {
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const [data, setData] = useState<SanityDocument[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        async function fetchData() {
            try {
                const featured = await sanityFetch<SanityDocument[]>({ query: FAQ_QUERY });
                setData(featured);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <LoadingSkeletonFAQ />;
    }

    if (error) {
        return <section>Error loading properties</section>;
    }

    if (!data || data.length === 0) {
        return <section>No data</section>;
    }
   

    const totalPages = Math.ceil(data.length / pageSize);
    const paginatedData = data.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);

    return (

        <section className="px-8 md:px-0 flex flex-col items-center justify-between pb-20">
            {paginatedData ? (
                <QuestionCards questions={paginatedData} />
            ) : (
                <LoadingSkeletonFAQ />
            )
            }




            {/* pagination */}
            <div className="mt-8 border-t border-[#262626] w-full pt-4 flex justify-between">
                <span>
                    {`${pageIndex}`}<span className="text-[#999]">{` of ${totalPages}`}</span>
                </span>
                <div className="flex no-wrap gap-2.5">
                    <button
                        className={`w-11 h-11 rounded-full border border-[#262626] text-white p-2 ${pageIndex === 1 ? 'bg-[#1A1A1A]' : 'bg-[#262626]'} `}
                        disabled={pageIndex === 1}
                        onClick={() => setPageIndex(pageIndex - 1)}
                    >
                        <IoMdArrowBack className={`text-2xl ${pageIndex === 1 ? 'text-[#4D4D4D]' : 'text-white'} hover:text-[#703BF7]`} />
                    </button>
                    <button
                        className={`w-11 h-11 rounded-full border border-[#262626] text-white p-2 ${pageIndex === totalPages ? 'bg-[#1A1A1A]' : 'bg-[#262626]'} `}
                        disabled={pageIndex === totalPages}
                        onClick={() => setPageIndex(pageIndex + 1)}
                    >
                        <IoMdArrowForward className={`text-2xl ${pageIndex === totalPages ? 'text-[#4D4D4D]' : 'text-white'} hover:text-[#703BF7]`} />
                    </button>
                </div>
            </div>
        </section>

    );
}