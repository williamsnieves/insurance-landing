import Image from "next/image";
import Logo from "public/logo.svg";
import IconHamburger from "public/icon-hamburger.svg";
import ImageIntroMobile from "public/image-intro-mobile.jpg";
import ImageIntroDesktop from "public/image-intro-desktop.jpg";
import SnappyProcess from "public/icon-snappy-process.svg";
import AffordablePrices from "public/icon-affordable-prices.svg";
import PeopleFirst from "public/icon-people-first.svg";
import IconFacebook from "public/icon-facebook.svg";
import IconTwitter from "public/icon-twitter.svg";
import IconPinterest from "public/icon-pinterest.svg";
import IconInstagram from "public/icon-instagram.svg";

export default function Home() {
  return (
    <section>
      <header className="flex justify-between items-center p-6 lg:max-w-[1500px] lg:w-full lg:mx-auto lg:my-0">
        <Image
          src={Logo}
          width={112}
          height={18}
          alt="logo"
          className="h-fit"
        />
        <Image
          src={IconHamburger}
          width={32}
          height={32}
          alt="hamburger"
          className="md:hidden"
        />

        <ul className="hidden md:flex md:gap-5 md:pr-4 md:items-center md:text-[#9f9ca0]">
          <li className="hover:text-[#2d2641]">
            <a href="#">How we work</a>
          </li>
          <li className="hover:text-[#2d2641]">
            <a href="#">Blog</a>
          </li>
          <li className="hover:text-[#2d2641]">
            <a href="#">Account</a>
          </li>
          <li className="border-2 border-[#2d2641] text-[#2d2641] p-2 hover:bg-[#2d2641] hover:text-[#fafafa] hover:cursor-pointer">
            <a href="#">View plans</a>
          </li>
        </ul>
      </header>
      <main>
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
                  Get your life insurance coverage easier and faster. We blend
                  our expertise and technology to help you find the plan that’s
                  right for you. Ensure you and your loved ones are protected.
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
        <section className="bg-no-repeat bg-[url(/bg-pattern-intro-right-mobile.svg)] bg-[position:right_-6px_top_-138px] md:bg-[url(/bg-pattern-intro-left-desktop.svg)] md:bg-[position:left_top_-275px]">
          <section className="px-6 pt-32 md:pt-52 lg:max-w-[1500px] lg:w-full lg:mx-auto lg:my-0">
            <hr className="w-[150px] mx-auto mb-14 border-[#2d2641] md:mx-0" />
            <h2 className="text-center text-4xl font-bold pb-16 md:text-left">
              We’re different
            </h2>
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="flex flex-col items-center text-center gap-8 md:items-start md:text-start">
                <Image
                  src={SnappyProcess}
                  width={86}
                  height={86}
                  alt="Snappy"
                />
                <h3 className="font-bold text-2xl">Snappy Process</h3>
                <p>
                  Our application process can be completed in minutes, not
                  hours. Don’t get stuck filling in tedious forms.
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
                  We don’t want you worrying about high monthly costs. Our
                  prices may be low, but we still offer the best coverage
                  possible.
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
      </main>
      <footer className="bg-[#fafafa] px-6 pb-12 flex flex-col bg-no-repeat bg-[url(/bg-pattern-footer-mobile.svg)] md:bg-[url(/bg-pattern-footer-desktop.svg)]">
        <section className="lg:max-w-[1500px] lg:w-full lg:mx-auto lg:my-0">
          <div className="flex flex-col items-center pt-24 pb-8 gap-6 md:flex-row md:justify-between">
            <Image
              src={Logo}
              width={112}
              height={18}
              alt="logo"
              className="h-fit"
            />
            <div className="flex gap-4">
              <Image
                src={IconFacebook}
                width={24}
                height={24}
                alt="facebook"
                className="h-fit"
              />
              <Image
                src={IconTwitter}
                width={24}
                height={24}
                alt="facebook"
                className="h-fit"
              />
              <Image
                src={IconPinterest}
                width={24}
                height={24}
                alt="facebook"
                className="h-fit"
              />
              <Image
                src={IconInstagram}
                width={24}
                height={24}
                alt="facebook"
                className="h-fit"
              />
            </div>
          </div>
          <hr />
          <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:gap-20 lg:gap-48">
            <div className="text-center">
              <h3 className="text-[#c3c2c6] text-lg font-semibold mb-6">
                Our company
              </h3>
              <ul>
                <li>How we work</li>
                <li>Why insure?</li>
                <li>View plans</li>
                <li>Reviews</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-[#c3c2c6] text-lg font-semibold mb-6">
                Help me
              </h3>
              <ul>
                <li>FAQ</li>
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Cookies</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-[#c3c2c6] text-lg font-semibold mb-6">
                Contact
              </h3>
              <ul>
                <li>Sales</li>
                <li>Support</li>
                <li>Live chat</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-[#c3c2c6] text-lg font-semibold mb-6">
                Others
              </h3>
              <ul>
                <li>Careers</li>
                <li>Press</li>
                <li>Licenses</li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </section>
  );
}
