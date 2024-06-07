
const LoadingSkeletonFAQ = () => {
    const numQuestions = 3; // Set the desired number of questions

    const skeletonQuestions = Array.from({ length: numQuestions }, (_, index) => (
        <li key={index} className="list-none rounded-xl border border-[#262626] min-w-[358px] max-w-[512px] ">
            <div className="rounded-lg p-5 md:p-7 lg:p-8 xl:p-10 flex flex-col gap-4 min-h-full justify-between">

                <div className="text-left">
                    <div className="w-full h-5 bg-gray-300 animate-pulse mb-1"></div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="w-3/3 h-4 bg-gray-500 animate-pulse"></div>
                    <div className="w-3/4 h-4 bg-gray-500 animate-pulse"></div>
                    <div className="w-2/4 h-4 bg-gray-500 animate-pulse"></div>
                    <div className="w-20 h-10 my-5 border border-solid border-[#262626] animate-pulse rounded-lg bg-[#262626] hover:bg-[#1E1E1E] hover:border-[#1A1A1A]">
                    </div>

                </div>
            </div>
        </li >
    ));

    return (
        <section className="container px-8 md:px-0">
            <div className="grid gap-6 2xl:gap-8 md:grid-cols-2 xl:grid-cols-3 justify-center">
                {skeletonQuestions}
            </div>
        </section>
    );
};
export default LoadingSkeletonFAQ;