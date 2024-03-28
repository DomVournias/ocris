import Hero from "../sections/hero/Hero";
import Image from "next/image";
import React from "react";

export default function Network({ page }) {
  const content = page.pageBy.networks.content;
  const hero = page.pageBy.hero.heroContent;
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
      <article className="relative w-full pt-4 pb-32">
        <div className="max-w-[1200px] m-auto bg-white shadow-xl rounded-xl">
          <ul className="grid grid-cols-2 gap-10 post-content space-y-2 pt-[50px] pb-[110px] px-[110px]">
            {content.networks.map((item, index) => (
              <li key={index} className="flex justify-center items-center">
                <address
                  dangerouslySetInnerHTML={{ __html: item.network }}
                  className="space-y-2"
                ></address>
              </li>
            ))}
          </ul>
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
