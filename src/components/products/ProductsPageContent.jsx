"use client";

import React, { useState } from "react";

import Image from "next/image";
import ProductsSwiper from "../swiper/ProductsSwiper";
import SliderEye from "../eyes/SliderEye";
import useStore from "@/lib/stores/store";

export default function ProductsPageContent({ products }) {
  const activeProduct = useStore((state) => state.activeProduct);
  const setActiveProduct = useStore((state) => state.setActiveProduct);

  const icon =
    process.env.NEXT_WP_PUBLIC_ENDPOINT +
    "/wp-content/uploads/2024/04/star-button.png";

  //   const product = page.products.nodes[activeProduct].productDetails.content;

  // console.log("Current Product", activeProduct);
  return (
    <>
      <section>
        <ProductsSwiper
          products={products}
          currentProduct={activeProduct}
          handleSwipe={setActiveProduct}
        />
        <div className="pt-10">
          <SliderEye products={products} icon={icon} />
        </div>
        <div className="max-w-[1200px] m-auto bg-white shadow-xl rounded-xl">
          {products.map((product, index) => (
            <div
              key={index}
              className={`${
                index === activeProduct
                  ? "opacity-100 max-h-full transition-opacity transition-max-height duration-500 ease-in"
                  : "opacity-0 max-h-0 overflow-hidden"
              }`}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: product.productDetails.content.description,
                }}
                className="post-content space-y-2"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
