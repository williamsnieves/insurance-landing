import Image from "next/image";
import ImageIntroMobile from "public/image-intro-mobile.jpg";
import ImageIntroDesktop from "public/image-intro-desktop.jpg";

export default function Banner() {
  return (
    <section>
      <Image
        className="w-full md:hidden"
        src={ImageIntroMobile}
        width={375}
        height={471}
        alt="Family walking together"
      />

      <section
        className="
            bg-[#2d2641] 
            px-6 
            py-16 
            text-white 
            bg-no-repeat 
            bg-[url(/bg-pattern-intro-left-mobile.svg),_url(/bg-pattern-intro-right-mobile.svg)] 
            bg-[position:left_top,_right_bottom_-182px]
            md:bg-[url(/bg-pattern-intro-left-desktop.svg),_url(/bg-pattern-intro-right-desktop.svg)]
            md:bg-[position:left_top_210px,_right_bottom_-86px]
            md:flex
            md:grow"
      >
        <section className="md:flex md:flex-row md:gap-24 lg:max-w-[1500px] lg:w-full lg:mx-auto lg:my-0">
          <div className="flex flex-col h-[300px] md:h-[400px] lg:h-[360px] md:basis-1/2 lg:basis-[70%]">
            <hr className="hidden md:block md:w-[150px] md:pb-12" />
            <h1 className="text-4xl font-bold text-center pb-4 md:text-left md:text-[50px] md:leading-[52px] md:font-serif">
              Humanizing <br />
              your insurance.
            </h1>
            <p className="text-center pb-6 md:text-left md:text-md md:font-extralight">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <div className="w-[133px] mx-auto my-0 md:m-0">
              <button className="border border-white px-6 py-2 hover:bg-[#fafafa] hover:text-[#2d2641]">
                View Plans
              </button>
            </div>
          </div>

          <div className="md:basis-1/2 xl:basis-[30%] md:mr-16 md:relative md:w-full">
            <Image
              className="w-full hidden md:block md:absolute md:max-w-[540px]"
              src={ImageIntroDesktop}
              width={375}
              height={471}
              alt="Family walking together"
            />
          </div>
        </section>
      </section>
    </section>
  );
}
