import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "../forms/NewsletterForm";
import React from "react";
import Socials from "./socials/Socials";

export default function Footer({ footer, menu, socials }) {
  // console.log(socials);
  return (
    <footer className="bg-pale flex flex-col items-center">
      <section className="w-full py-10 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-x-4 max-w-[1440px] m-auto ">
        <div className="w-2/3 lg:w-full flex flex-col px-6 py-8 space-y-8">
          <Link href="/" className="h-[125px] w-[200px] flex relative">
            <Image
              alt="logo"
              src={footer.logo.node.sourceUrl}
              style={{ objectFit: "contain" }}
              fill={true}
              // width={200}
              // height={300}
            />
          </Link>
          <NewsletterForm className="text-primary " />
        </div>
        <div className="w-full flex flex-col px-6 py-8 justify-center">
          <nav className="menu">
            <ul>
              {menu.map((item, index) => (
                <li key={index} className="text-primaryText font-medium mb-4">
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="w-full flex flex-col px-6 py-8 justify-center gap-4">
          <address
            className="not-italic space-y-4 text-primary"
            dangerouslySetInnerHTML={{ __html: footer.contact }}
          ></address>
          <div className="flex flex-col text-primary">
            <span>
              M <a href={`tel:+${footer.mobile}`}>+{footer.mobile}</a>
            </span>
            <span>
              T <a href={`tel:+${footer.phone}`}>+{footer.phone}</a>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col px-6 py-8  ">
          <Socials socials={socials} className=" bg-primary text-white" />
        </div>
      </section>
      <section className="px-6 py-3">
        <span>Design & Development by</span>
        <a
          href="https://healthmarketing.gr"
          target="_blank"
          alt="Health Marketing Website"
          rel="noopener"
          className="text-primary font-bold ml-1"
        >
          Health Marketing - Υπηρεσίες Iατρικού Marketing
        </a>
      </section>
    </footer>
  );
}
