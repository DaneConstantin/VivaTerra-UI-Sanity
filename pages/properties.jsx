

// pages/properties.js
import { fetcher } from "../lib/api";
import Layout from '../components/Layout';
import useSWR from "swr";
import Cards from "@/components/home/slider/Cards";

export default function PropertiesList({ properties }) {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/properties?&populate=*`, fetcher, {
        fallbackData: properties
    });

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <Layout>
            <main className="flex flex-col items-center justify-between py-24">
                <h1 className="capitalize mb-8 text-2xl xl:text-4xl 2xl:text-5xl font-semibold leading-normal xl:leading-relaxed 2xl:leading-relaxed text-center 2xl:text-left">
                    All Properties for sale
                </h1>
                <Cards propertiesListed={data} />
            </main>
        </Layout>
    );
}

export async function getStaticProps() {
    try {
        const getProperties = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/properties?&populate=*`
        );

        return {
            props: {
                properties: getProperties,
            },
        };
    } catch (error) {
        console.error('Error in getStaticProps:', error);
        return {
            props: {
                properties: null,
            },
            revalidate: 10,  // Revalidate after 10 seconds to try again
        };
    }
}
