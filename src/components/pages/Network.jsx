import Hero from "../sections/hero/Hero";
import Image from "next/image";
import ProductEye from "../eyes/ProductEye";
import React from "react";
import SliderEye from "../eyes/SliderEye";

export default function Network({ page }) {
  const content = page.pageBy.networks.content;
  const hero = page.pageBy.hero.heroContent;

  const icon =
    process.env.NEXT_WP_PUBLIC_ENDPOINT +
    "/wp-content/uploads/2024/04/star-button.png";

  // console.log(content);
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
          <div>
            <ProductEye
              image={content.image.node.sourceUrl}
              title={content.title}
              paragraph={content.paragraph}
              icon={icon}
            />
          </div>
          <ul className="grid grid-cols-2 gap-10 post-content space-y-2 py-[10vh] px-[10vw]">
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
