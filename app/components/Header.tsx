import Image from "next/image";
import Logo from "public/logo.svg";
import IconHamburger from "public/icon-hamburger.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 lg:max-w-[1500px] lg:w-full lg:mx-auto lg:my-0">
      <Image src={Logo} width={112} height={18} alt="logo" className="h-fit" />
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
  );
}
