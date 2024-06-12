import { SanityDocument } from 'next-sanity';
import SingleCard from './SingleCard';
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'defaultProjectId';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'defaultDataset';
const urlFor = (source: any) =>
  imageUrlBuilder({ projectId, dataset }).image(source)

export default function Cards({ propertiesListed }: { propertiesListed: SanityDocument[] }) {

  return (

    <section className="container px-8 md:px-0">

      <div className="grid gap-6 2xl:gap-8 md:grid-cols-2 xl:grid-cols-3 justify-center">
        {propertiesListed &&
          propertiesListed.map((property, index) => {



            // Check if there is a photo uploaded 
            const imageUrl = urlFor(property.photos[0]).quality(90).url();


            const localImageUrl = `https://res.cloudinary.com/dfks8op0a/image/upload/v1708338024/VivaTerra/forSalePlaceholder_lacvd1.png`;
            const image = imageUrl !== null ? imageUrl : localImageUrl;

            return (
              <li key={index} className="list-none rounded-xl border border-[#262626] min-w-[358px] max-w-[512px] ">

                <SingleCard
                  image={image}
                  CardTitle={property.name}
                  titleHref={`property/` + property.slug.current}
                  btnHref={`property/` + property.slug.current}
                  CardDescription={property.description}
                  Button="View Property Details"
                  price={property.price}
                  bedrooms={property.bedrooms}
                  bathrooms={property.bathrooms}
                  type={property.PropertyType}
                />
              </li>
            );
          })}

      </div>
    </section>


  );
};
