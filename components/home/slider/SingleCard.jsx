import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
  price,
  bedrooms,
  bathrooms,
  type
}) => {
  return (
    <>

      <div className="rounded-lg p-5 md:p-7 lg:p-8 xl:p-10 flex flex-col gap-4 md:gap-6 xl:gap-8 min-h-full justify-between">
        <Link href={titleHref ? titleHref : "/#"} className="w-full h-[300px] relative">
          <Image
            src={image}
            alt=""
            fill
            objectFit="cover"
            className=" rounded-xl"
          />
        </Link>


        <div id="property-main-info" className="text-left">

          <Link
            href={titleHref ? titleHref : "/#"}
            className="mb-1 block text-xl font-semibold hover:text-[#cacaca]  sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {CardTitle}
          </Link>

          <p className="text-base leading-normal text-[#999]">
            {CardDescription}
          </p>
        </div>

        <Tags rooms={bedrooms} baths={bathrooms} type={type} />

        <div id="price" className="flex justify-between">
          {price && (
            <p className="text-[#999]">Price <span className="block text-[#ededed] font-semibold text-xl 2xl:text-2xl">${Number(price).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span></p>

          )}
          {Button && (
            <Link
              href={btnHref ? btnHref : "#"}

              className="text-regular font-normal text-center bg-[#703BF7] rounded-lg w-auto px-5 py-3.5 2xl:px-6 2xl:py-4">

              {Button}


            </Link>

          )}
        </div>


      </div>

    </>
  );
};
export default SingleCard;

const Tags = ({ rooms, baths, type }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="flex px-3 py-1.5 xl:px-4 xl:py-2 text-xs md:text-sm xl:text-base rounded-full bg-[#1A1A1A] border border-[#262626]"><IoBed className="inline mr-1.5 text-xl" />{rooms}-Bedroom</span>
      <span className="flex px-3 py-1.5 xl:px-4 xl:py-2 text-xs md:text-sm xl:text-base rounded-full bg-[#1A1A1A] border border-[#262626]"><FaBath className="inline mr-1.5  text-xl" />{baths}-Bathroom</span>
      <span className="flex px-3 py-1.5 xl:px-4 xl:py-2 text-xs md:text-sm xl:text-base rounded-full bg-[#1A1A1A] border border-[#262626]"><HiMiniBuildingOffice className="inline mr-1.5  text-xl" />{type}</span>
    </div>
  )
}
