
const LoadingSkeleton = () => {

    const numItems = 3;

    const skeletonItems = Array.from({ length: numItems }, (_, index) => (
        <li key={index} className="list-none rounded-xl border border-[#262626] min-w-[358px] max-w-[512px] ">
            <div className="rounded-lg p-5 md:p-7 lg:p-8 xl:p-10 flex flex-col gap-4 md:gap-6 xl:gap-8 min-h-full justify-between">
                <div className="relative w-full h-48 xl:h-52 aspect-w-10 aspect-h-23 bg-gray-300 animate-pulse rounded-xl">
                    <div className="absolute inset-0 bg-gray-500 opacity-50 rounded-xl animate-pulse "></div>
                </div>

                <div id="property-main-info" className="text-left">
                    <div className="w-32 h-5 bg-gray-300 animate-pulse mb-1"></div>

                    <div className="w-48 h-4 bg-gray-300 animate-pulse"></div>

                </div>

                <div id="tags" className="flex justify-between">
                    <div className="w-16 h-6 bg-gray-300 animate-pulse"></div>
                </div>

                <div id="price" className="flex justify-between items-end">
                    <div> <p className="text-[#999] block">
                        Price </p>
                        <div className="w-16 h-7 bg-gray-300 animate-pulse"></div>
                    </div>


                    <div className="w-24 h-9 bg-[#703BF7] animate-pulse rounded-lg"></div>
                </div>
            </div>

        </li>
    ));

    return (
        <section className="container px-8 md:px-0">
            <div className="grid gap-6 2xl:gap-8 md:grid-cols-2 xl:grid-cols-3 justify-center">
                {skeletonItems}
            </div>
        </section>
    )
}
export default LoadingSkeleton;