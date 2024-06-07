import { FaBolt } from "react-icons/fa6";

const KeyFeatures = () => {
    return (
        <div className="flex flex-col w-full md:w-1/2 rounded-lg border border-[#262626] p-12">
            <h3 className="py-8 text-xl font-semibold">Key Features and Amenities</h3>
            <div className="flex flex-col gap-8">
                {/* to be customized with data from Strapi */}
                <div className="flex p-4 items-center gap-2.5 border-l-2 border-purple-600 bg-gradient-to-r from-[#1A1A1A] to-transparent">
                    <FaBolt className="text-xl" />
                    <p className="text-[#999]">Expansive oceanfront terrace for outdoor entertaining</p>
                </div>
                <div className="flex p-4 items-center gap-2.5 border-l-2 border-purple-600 bg-gradient-to-r from-[#1A1A1A] to-transparent">
                    <FaBolt className="text-xl" />
                    <p className="text-[#999]">Gourmet kitchen with top-of-the-line appliances</p>
                </div>
                <div className="flex p-4 items-center gap-2.5 border-l-2 border-purple-600 bg-gradient-to-r from-[#1A1A1A] to-transparent">
                    <FaBolt className="text-xl" />
                    <p className="text-[#999]">Private beach access for morning strolls and sunset views</p>
                </div>
                <div className="flex p-4 items-center gap-2.5 border-l-2 border-purple-600 bg-gradient-to-r from-[#1A1A1A] to-transparent">
                    <FaBolt className="text-xl" />
                    <p className="text-[#999]">Master suite with a spa-inspired bathroom and ocean-facing balcony</p>
                </div>
                <div className="flex p-4 items-center gap-2.5 border-l-2 border-purple-600 bg-gradient-to-r from-[#1A1A1A] to-transparent">
                    <FaBolt className="text-xl" />
                    <p className="text-[#999]">Private garage and ample storage space</p>
                </div>
            </div>
        </div>
    )
}
export default KeyFeatures;