import Hero from "../sections/hero/Hero";
import Image from "next/image";
import ProductsPageContent from "../products/ProductsPageContent";
import React from "react";

export default function Products({ page }) {
  const products = page.pageBy.productsPage.content.products.nodes;
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
      <article>
        <div className="relative w-full pt-4 pb-32">
          <ProductsPageContent products={products} />
          <Image
            art="background"
            fill={true}
            src={
              process.env.NEXT_WP_PUBLIC_ENDPOINT +
              "/wp-content/uploads/2024/03/3Asset-6.png"
            }
            style={{ objectFit: "cover", zIndex: "-1" }}
          />
        </div>
      </article>
    </section>
  );
}
