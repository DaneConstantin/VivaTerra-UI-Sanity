import Container from "@/components/Container"
import SectionHeader from "@/components/SectionHeader"

const MiniSection = ({ title, value, annotation }) => {
    return (
        <div className="space-y-4 px-6">
            <h4 className="text-[#999]">{title}</h4>
            <p className="text-xl font-semibold">{value}<span className="px-3 py-2 ml-4 bg-[#1A1A1A] text-[#999] border border-[#262626] rounded-full font-medium text-sm inline-block">{annotation}</span></p>
        </div>
    )
}

const ComprehensiveDetails = () => {
    return (
        <Container>
            <SectionHeader title="Comprehensive Pricing Details" description="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision" />

            <section id="note" className="flex bg-[#1A1A1A] gap-4 divide-x-2 divide-[#262626] p-5 border border-[#262626] rounded-lg">
                <h3 className="text-xl font-semibold">Note</h3>
                <p className="text-[#999] pl-4">The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
            </section>

            <section id="detailedInfo" className="flex flex-col lg:flex-row gap-10 py-10 w-full">
                <div class="flex-shrink-0 w-full lg:w-1/5">
                    <div class="flex flex-wrap flex-col gap-5">
                        <p class="text-[#999] text-xl">Listing Price <span class="block text-white font-semibold text-3xl 2xl:text-4xl">$650,000</span></p>
                    </div>
                </div>
                <div class="w-full flex-grow lg:w-4/5 space-y-10">
                    <div className="border border-[#262626] rounded-xl py-5 px-10">
                        <div className="flex justify-between items-center py-8">
                            <h3 className="text-xl font-semibold ">Additional Fees</h3>
                            <span class="block text-regular py-[19px] px-6 border border-solid border-[#262626] rounded-lg bg-[#1A1A1A] h-full"> Learn More</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 border-y-2 border-[#262626] py-8 divide-x divide-[#262626]">
                            <MiniSection title="Property Transfer Tax" value="$25,000" annotation="Based on the sale price and local regulations" />
                            <MiniSection title="Legal Fees" value="$3,000" annotation="Approximate cost for legal services, including title transfer" />

                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-[#262626] py-8 divide-x divide-[#262626]">
                            <MiniSection title="Home Inspection" value="$500" annotation="Recommended for due diligence" />
                            <MiniSection title="Property Insurance" value="$1,200" annotation="Annual cost for comprehensive property insurance" />

                        </div>
                        <div className="grid grid-cols-1 py-8">
                            <MiniSection title="Mortgage Fees" value="Varies" annotation="If applicable, consult with your lender for specific details" />

                        </div>
                    </div>

                    <div className="border border-[#262626] rounded-xl py-5 px-10">
                        <div className="flex justify-between items-center py-8">
                            <h3 className="text-xl font-semibold ">Monthly Costs</h3>
                            <span class="block text-regular py-[19px] px-6 border border-solid border-[#262626] rounded-lg bg-[#1A1A1A] h-full"> Learn More</span>
                        </div>
                        <div className="grid grid-cols-1 border-t-2 border-[#262626] py-8 divide-x divide-[#262626]">
                            <MiniSection title="Property Taxes" value="$1,250" annotation="Approximate monthly property tax based on the sale price and local rates" />
                        </div>
                        <div className="grid grid-cols-1 border-t-2 border-[#262626] py-8 divide-x divide-[#262626]">
                            <MiniSection title="Homeowners&apos; Association Fee" value="$300" annotation="Monthly fee for common area maintenance and security" />
                        </div>
                    </div>


                </div>




            </section>
        </Container>
    )
}
export default ComprehensiveDetails;