import Container from '@/components/Container';
import Layout from '../../components/Layout';
import { fetcher } from '../../lib/api';
import Description from './Description';
import SwiperImages from './SwiperImages';
import FAQSlider from '@/components/home/faq/FAQ';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import KeyFeatures from './KeyFeatures';
import ComprehensiveDetails from './ComprehensiveDetails';


const Property = ({ property }) => {
    const price = property.attributes.price;

    return (
        <Layout>
            <section className="w-full relative">

                <Container className="px-4 lg:px-0 flex align-center w-full h-auto flex-col">
                    <div className="flex justify-between w-full py-8 mt-20">
                        <h1 className="capitalize text-xl xl:text-2xl 2xl:text-3xl font-semibold leading-normal xl:leading-relaxed 2xl:leading-relaxed break-keep">
                            {property.attributes.name}
                        </h1>

                        <div className="flex flex-wrap flex-col gap-5 ">
                            {price && (
                                <p className="text-[#999]">Price <span className="block font-semibold text-xl 2xl:text-2xl">${Number(price).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span></p>

                            )}
                        </div>
                    </div>
                    <div className="flex w-full h-full flex-col-reverse p-5 lg:p-10 bg-[#1A1A1A] border border-[#262626] rounded-lg ">
                        <SwiperImages photo={property.attributes.photos} />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between my-8 gap-4">
                        <Description description={property.attributes.description} beds={property.attributes.bedrooms} baths={property.attributes.bathrooms} area={property.attributes.m2} />
                        <KeyFeatures />
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="w-full lg:w-1/3">
                            <SectionHeader title="Inquire About Seaside Serenity Villa" description="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have." />
                        </div>
                        <div className="w-full lg:w-2/3 p-5 lg:p-10 2xl:p-12 border border-[#262626] rounded-xl md:my-16">
                            <ContactForm />
                        </div>

                    </div>

                    <ComprehensiveDetails />

                    <SectionHeader title="Frequently Asked Questions" description="Find answers to common questions about VivaTerra&apos;s services, property listings, and the real estate process. We&apos;re here to provide clarity and assist you every step of the way." buttonTitle="View All FAQ&apos;s" />
                    <FAQSlider />

                </Container>
            </section>


        </Layout >


    );
}
export default Property;

export async function getServerSideProps({ params }) {
    const { slug } = params;
    const getProperty = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/slugify/slugs/property/${slug}?populate=*`
    );
    return {
        props: {
            property: getProperty.data,
        },
    };

}

