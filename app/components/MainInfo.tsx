import Image from "next/image";
import SnappyProcess from "public/icon-snappy-process.svg";
import AffordablePrices from "public/icon-affordable-prices.svg";
import PeopleFirst from "public/icon-people-first.svg";
export default function MainInfo() {
  return (
    <section className="bg-no-repeat bg-[url(/bg-pattern-intro-right-mobile.svg)] bg-[position:right_-6px_top_-138px] md:bg-[url(/bg-pattern-intro-left-desktop.svg)] md:bg-[position:left_top_-275px]">
      <section className="px-6 pt-32 md:pt-52 lg:max-w-[1500px] lg:w-full lg:mx-auto lg:my-0">
        <hr className="w-[150px] mx-auto mb-14 border-[#2d2641] md:mx-0" />
        <h2 className="text-center text-4xl font-bold pb-16 md:text-left">
          We’re different
        </h2>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex flex-col items-center text-center gap-8 md:items-start md:text-start">
            <Image src={SnappyProcess} width={86} height={86} alt="Snappy" />
            <h3 className="font-bold text-2xl">Snappy Process</h3>
            <p>
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-8 md:items-start md:text-start">
            <Image
              src={AffordablePrices}
              width={86}
              height={86}
              alt="Affordable"
            />
            <h3 className="font-bold text-2xl">Affordable Prices</h3>
            <p>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-8 md:items-start md:text-start">
            <Image
              src={PeopleFirst}
              width={86}
              height={86}
              alt="People first"
            />
            <h3 className="font-bold text-2xl">People First</h3>
            <p>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>

        <div className="bg-[#2d2641] px-6 py-16 text-white flex flex-col gap-8 my-24 items-center bg-no-repeat bg-[url(/bg-pattern-how-we-work-mobile.svg)] bg-[position:right_top] md:flex-row md:justify-around md:bg-[url(/bg-pattern-how-we-work-desktop.svg)] md:bg-[position:right_top_0px]">
          <h1 className="text-center font-bold text-4xl leading-8 md:text-6xl md:max-w-[580px] md:text-start">
            Find out more about how we work
          </h1>

          <button className="border border-white py-2 w-40 hover:bg-[#fafafa] hover:text-[#2d2641]">
            How we work
          </button>
        </div>
      </section>
    </section>
  );
}
