
import Layout from '../../components/Layout';
import Description from './Description';
import SwiperImages from './SwiperImages';
import KeyFeatures from './KeyFeatures';
import ComprehensiveDetails from './ComprehensiveDetails';
import { sanityFetch } from "../../sanity/lib/fetch";
import { PROPERTY_QUERY, PROPERTIES_QUERY } from "../../sanity/lib/queries";
import Container from '../../components/Container';
import { QueryParams, SanityDocument } from "next-sanity"
import { GetStaticPaths, GetStaticProps } from 'next';
import SectionHeader from '../../components/SectionHeader';
import ContactForm from '../../components/ContactForm';
import { ImLocation } from "react-icons/im";
import FAQSlider from '../../components/home/faq/FAQ';

export const getStaticPaths: GetStaticPaths = async () => {
    const properties = await sanityFetch<SanityDocument[]>({
        query: PROPERTIES_QUERY,
    });

    const paths = properties.map((post) => ({
        params: { slug: post.slug.current },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;

    const singleProperty = await sanityFetch<SanityDocument[]>({
        query: PROPERTY_QUERY,
        params: { slug },
    });

    if (!singleProperty) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            singleProperty,
        },
        revalidate: 60, // optional: enable ISR with a revalidation time
    };
};


export default function Property({ singleProperty }: { singleProperty: SanityDocument }) {
    if (!singleProperty) {
        return <section>No data</section>;
    }
   
    return (
        < Layout >
            <section className="w-full relative">

                <Container className="px-4 lg:px-0 flex align-center w-full h-auto flex-col">
                    <div className="flex justify-between w-full py-8 mt-20">
                        <h1 className="capitalize text-xl xl:text-2xl 2xl:text-3xl font-semibold leading-normal xl:leading-relaxed 2xl:leading-relaxed break-keep">
                            {singleProperty.name}
                        </h1>
                        <div className="flex items-center gap-2">
                            <ImLocation style={{ color: "#999" }} />
                            <p className="text-xl text-[#999]">{singleProperty.location}</p>
                        </div>

                        <div className="flex flex-wrap flex-col gap-5 ">
                            {singleProperty.price &&
                                <p className="text-[#999]">Price <span className="block font-semibold text-xl 2xl:text-2xl">${Number(singleProperty.price).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span></p>

                            }
                        </div>
                    </div>
                    <div className="flex w-full h-full flex-col-reverse p-5 lg:p-10 bg-[#1A1A1A] border border-[#262626] rounded-lg ">
                        <SwiperImages photo={singleProperty.photos} />
                    </div>
                    <div className="flex flex-col md:flex-row justify-between my-8 gap-4">
                        <Description description={singleProperty.description} beds={singleProperty.bedrooms} baths={singleProperty.bathrooms} area={singleProperty.m2} />
                        <KeyFeatures />
                    </div>

                    <div className="flex flex-col md:flex-row">
                        <div className="w-full lg:w-1/3">
                            <SectionHeader title="Inquire About Seaside Serenity Villa" description="Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have." buttonTitle={undefined} />
                        </div>
                        <div className="w-full lg:w-2/3 p-5 lg:p-10 2xl:p-12 border border-[#262626] rounded-xl md:my-16">
                            <ContactForm properties={undefined} />
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

