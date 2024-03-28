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
      <div className="grid grid-cols-2 gap-[2vw] divide-x-4 divide-opacity-20 divide-text divide-dotted max-w-7xl m-auto pt-10 pb-32">
        <div className="pl-[2vw] space-y-20">
          <NewsletterForm className="text-primary font-semibold" />
          <address
            dangerouslySetInnerHTML={{ __html: content.details }}
            className="not-italic space-y-4 text-primary"
          ></address>
        </div>
        <div className="px-[2vw] z-50">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
