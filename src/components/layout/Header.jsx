import { AiOutlineGlobal } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import MobileMenuBtn from "./MobileMenuBtn";
import React from "react";
import SearchForm from "../forms/SearchForm";
import Socials from "./socials/Socials";

export default function Header({ header, socials, menu }) {
  // console.log("Header", socials);
  return (
    <header>
      <div className="hidden md:flex justify-between gap-[5vw] max-w-[1920px] m-auto pt-8 pb-10 px-[2vw] md:px-[3vw] 2xl:px-[7vw] z-50">
        <Link href="/" className="h-[125px] w-[200px] flex relative top-[40px]">
          <Image
            alt="logo"
            src={header.logo.node.sourceUrl}
            style={{ objectFit: "contain" }}
            fill={true}
          />
        </Link>
        <div className="w-4/5 h-[100px] z-50">
          <div className="flex justify-end text-primaryText font-medium text-sm">
            <div className="flex justify-center items-center gap-3">
              <span>
                M <a href="tel:+306947931526">+30 6947 931526</a>
              </span>
              <span>|</span>
              <span>
                T <a href="tel:+302310866898">+30 2310 866898</a>
              </span>
            </div>
            {/* <button className="flex items-center justify-center gap-2 text-sm  leading-4">
              <AiOutlineGlobal className="flex text-lg" />
              <p className="block mb-[-2px]">ΕΛΛΗΝΙΚΑ</p>
            </button> */}
          </div>

          <div className="border-b-2 border-primary h-[90px] ">
            <nav className="h-full flex justify-end ">
              <ul className="w-full justify-between h-full hidden md:flex">
                {menu.map((item, index) => (
                  <li
                    key={index}
                    className="inline-flex text-primaryText font-medium"
                  >
                    <Link href={item.path} className="h-full flex items-center">
                      {item.label}
                    </Link>
                  </li>
                ))}

                <SearchForm />
              </ul>
            </nav>
            <div className="relative">
              <div className="absolute px-4 right-[0px] top-[0px] bg-primary h-[55px] flex">
                <Socials socials={socials} className="bg-white text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:hidden">
        <div className="flex w-full justify-between m-auto pt-2 pb-2 px-[3vw] z-50">
          <div className="">
            <Link href="/" className="h-[80px] w-[120px] flex relative ">
              <Image
                alt="logo"
                src={header.logo.node.sourceUrl}
                style={{ objectFit: "contain" }}
                fill={true}
              />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <MobileMenuBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
