import ContactForm from "../forms/ContactForm";
import Hero from "../sections/hero/Hero";
import NewsletterForm from "../forms/NewsletterForm";
import React from "react";

export default function Contact({ page }) {
  const content = page.pageBy.contact.content;
  const hero = page.pageBy.hero.heroContent;
  // console.log("Contact", content);
  return (
    <section>
      <div className="relative flex max-w-7xl justify-center items-center m-auto z-10 ">
        <Hero
          eyeImage={hero.eyeImage.node.sourceUrl}
          link={false}
          icon={null}
          title={hero.title}
          heading1={hero.heading1}
          heading2={hero.heading2}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[50px] sm:gap-[2vw] sm:divide-x-4 divide-opacity-20 divide-text divide-dotted max-w-7xl m-auto py-[10vh] px-[10vw]">
        <div className="pl-[2vw] sm:space-y-20">
          <div className="hidden sm:flex">
            <NewsletterForm className=" text-primary font-semibold" />
          </div>
          <address
            dangerouslySetInnerHTML={{ __html: content.details }}
            className="not-italic space-y-4 text-primary"
          ></address>
        </div>
        <div className="px-[2vw] z-50">
          <ContactForm />
        </div>
        <div className=" sm:hidden">
          <NewsletterForm className=" text-primary font-semibold" />
        </div>
      </div>
    </section>
  );
}
