// pages/properties.js
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Cards from '../components/home/slider/Cards';
import { sanityFetch } from "../sanity/lib/fetch";
import { PROPERTIES_QUERY } from "../sanity/lib/queries";
import { SanityDocument } from 'next-sanity';
import LoadingSkeleton from '../components/home/slider/LoadingSkeleton';

export default function PropertiesList() {
    const [data, setData] = useState<SanityDocument[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const featured = await sanityFetch<SanityDocument[]>({ query: PROPERTIES_QUERY });
                setData(featured);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return (
            <Layout>
                <main className="flex flex-col items-center justify-between py-24">
                    <h1 className="capitalize mb-8 text-2xl xl:text-4xl 2xl:text-5xl font-semibold leading-normal xl:leading-relaxed 2xl:leading-relaxed text-center 2xl:text-left">
                        All Properties for sale
                    </h1>
                    <LoadingSkeleton />
                </main>
            </Layout>
        );
    }

    if (error) {
        return <section>Error loading properties: {error.message}</section>;
    }

    if (!data || data.length === 0) {
        return <section>No data</section>;
    }

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
