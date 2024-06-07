
const Description = ({ description, beds, baths, area }) => {
    return (
        <section className="flex h-full flex-col w-full md:w-1/2 rounded-lg border border-[#262626] px-12 divide-y divide-[#262626]">
            <div className="py-8">
                <h3 className="py-2 text-xl font-semibold  ">Description</h3>
                <p className="text-[#999]">{description}</p>
            </div>
            <div className="flex w-full gap-5 divide-x divide-[#262626] py-5">
                <div className="w-full">
                    <p className="text-[#999]">Bedrooms <span className="block text-white font-semibold text-xl 2xl:text-2xl">{beds}</span></p>

                </div>

                <div className="w-full pl-5">
                    <p className="text-[#999]">Bathrooms <span className="block text-white font-semibold text-xl 2xl:text-2xl">{baths}</span></p>

                </div>
                <div className="w-full pl-5">
                    <p className="text-[#999]">Area <span className="block text-white font-semibold text-xl 2xl:text-2xl">{area} m<sup>2</sup></span></p>

                </div>
            </div>
        </section>

    )
}
export default Description;