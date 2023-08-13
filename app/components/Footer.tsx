import Image from "next/image";
import Logo from "public/logo.svg";
import IconFacebook from "public/icon-facebook.svg";
import IconTwitter from "public/icon-twitter.svg";
import IconPinterest from "public/icon-pinterest.svg";
import IconInstagram from "public/icon-instagram.svg";

export default function Footer() {
  return (
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
  );
}
