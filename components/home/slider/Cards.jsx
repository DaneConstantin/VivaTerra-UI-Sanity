import SingleCard from './SingleCard';

const Cards = ({ propertiesListed }) => {

  return (

    <section className="container px-8 md:px-0">

      <div className="grid gap-6 2xl:gap-8 md:grid-cols-2 xl:grid-cols-3 justify-center">
        {propertiesListed &&
          propertiesListed.data.map((property) => {

            const serverPhotos = property.attributes.photos?.data;

            // Check if there is a photo uploaded 
            const serverImageUrl = Array.isArray(serverPhotos) && serverPhotos.length > 0
              ? serverPhotos[0]?.attributes?.url
              : null;
            
            const localImageUrl = `https://res.cloudinary.com/dfks8op0a/image/upload/v1708338024/VivaTerra/forSalePlaceholder_lacvd1.png`;
            const image = serverImageUrl !== null ? serverImageUrl : localImageUrl;
            return (
              <li key={property.id} className="list-none rounded-xl border border-[#262626] min-w-[358px] max-w-[512px] ">

                <SingleCard
                  image={image}
                  CardTitle={property.attributes.name}
                  titleHref={`property/` + property.attributes.slug}
                  btnHref={`property/` + property.attributes.slug}
                  CardDescription={property.attributes.description}
                  Button="View Property Details"
                  price={property.attributes.price}
                  bedrooms={property.attributes.bedrooms}
                  bathrooms={property.attributes.bathrooms}
                  type={property.attributes.PropertyType}
                />
              </li>
            );
          })}

      </div>
    </section>


  );
};

export default Cards;