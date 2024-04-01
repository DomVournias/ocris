import CardButton from "../buttons/CardButton";
import ContentEye from "../eyes/ContentEye";
import Hero from "../sections/hero/Hero";
import Image from "next/image";
import React from "react";

export default function Company({ page }) {
  const content = page.pageBy.company.content;
  const hero = page.pageBy.hero.heroContent;

  return (
    <section>
      <div className="container">
        <Hero
          eyeImage={hero.eyeImage.node.sourceUrl}
          link={false}
          icon={hero.icon.node.sourceUrl}
          title={hero.title}
          heading1={hero.heading1}
          heading2={hero.heading2}
        />
      </div>
      <article className="relative w-full pt-4 pb-32">
        <div className="max-w-[1200px] m-auto bg-white shadow-xl rounded-xl">
          <div
            dangerouslySetInnerHTML={{ __html: content.paragraph1 }}
            className="post-content"
          />
          <div className="relative flex max-w-7xl justify-center items-center m-auto z-10">
            <ContentEye icon={"person"}>
              <div
                dangerouslySetInnerHTML={{ __html: content.eye.content }}
                className="content-eye-content "
              ></div>
            </ContentEye>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: content.paragraph2 }}
            className="post-content"
          />
        </div>
        <Image
          art="background"
          fill={true}
          src={
            process.env.NEXT_WP_PUBLIC_ENDPOINT +
            "/wp-content/uploads/2024/03/3Asset-6.png"
          }
          style={{ objectFit: "cover", zIndex: "-1" }}
        />
      </article>
    </section>
  );
}
