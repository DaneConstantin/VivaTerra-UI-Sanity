import Image from "next/image";
import BrowseProperties from "./BrowseProperties";
import Link from "next/link";
import Container from "../Container";

const BlockNumber = ({ number, title }) => {
  return (
    <div className="flex-item py-4 px-6 bg-[#1A1A1A] rounded-xl border border-[#262626]">
      <h3 className="text-3xl leading-loose font-bold  ">{number}+</h3>
      <p className="font-medium text-[#999]">{title}</p>
    </div>
  )
}

const HeroPhoto = () => {
  return (
    <div className="relative w-[80%] mx-auto lg:w-[90%] my-8 lg:mt-0 lg:mr-0">
      <Image
        src="/heroimg.png"
        width={1500}
        height={0}
        alt="Hero Illustration"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  )
}
export default function Hero() {
  return (

    <section className="w-full relative">
      <Container className="px-4 lg:px-0 flex align-center w-full h-auto flex-col-reverse lg:flex-row">
        <div className="flex items-center xl:items-start justify-center w-full xl:w-1/2 flex-col py-8 xl:py-20 z-10 mx-auto">
          <h1 className="capitalize mb-4 text-2xl md:text-3xl 2xl:text-5xl font-semibold leading-normal 2xl:leading-normal text-center  ">
            Discover Your Dream Property with VivaTerra
          </h1>
          <p className="mb-8 text-lg text-[#999] text-center">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          <div className="flex flex-col py-5 gap-5 md:flex-row justify-center lg:justify-start items-center tracking-wide">
            <Link
              href="/about"
              target="_blank"
              rel="noopener">
              <span className="block text-regular font-normal py-[19px] px-6 border border-solid border-gray-700 rounded-lg bg-transparent"> Learn More</span>
            </Link>
            <BrowseProperties title="Browse Properties" />
          </div>
          <div className="flex flex-wrap md:flex-row w-full gap-5 ">
            <div className="flex-auto">
              <BlockNumber number={200} title={"Happy Customers"} />
            </div>
            <div className="flex-auto">
              <BlockNumber number={"10k"} title={"Properties For Clients"} />
            </div>
            <div className="flex-auto">
              <BlockNumber number={16} title={"Years of Experience"} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-full xl:w-1/2 items-center">

          <HeroPhoto />

        </div>
      </Container>

    </section>
  );
}


