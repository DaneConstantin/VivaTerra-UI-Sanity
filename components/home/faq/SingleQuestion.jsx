
import Link from "next/link";

const SingleQuestion = ({
  question, answer
}) => {
  return (
    <>

      <div className="h-full rounded-lg p-5 md:p-7 lg:p-8 xl:p-10 flex flex-col justify-between gap-7">

        <div id="property-main-info" className="text-left">

          <Link
            href="/faq"
            className="mb-1 block text-xl font-semibold hover:text-[#cacaca]  sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
            {question}
          </Link>

          <p className="text-base leading-normal text-[#999]">
            {answer}
          </p>
        </div>



        <div id="price" className="flex align-end">


          <Link
            href="/faq"
            target="_blank"
            rel="noopener">
            <span className="block text-sm py-3 px-4 lg:py-4 lg:px-5 border border-solid border-[#262626] rounded-lg bg-[#1A1A1A] hover:bg-[#1E1E1E] hover:border-[#1A1A1A]">Read More</span>
          </Link>


        </div>


      </div>

    </>
  );
};
export default SingleQuestion;
