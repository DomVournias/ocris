"use client";

import React, { useState } from "react";

import Image from "next/image";
import SliderEye from "../eyes/SliderEye";
import useStore from "@/lib/stores/store";

export default function ProductsPageContent({ products }) {
  const activeProduct = useStore((state) => state.activeProduct);
  const setActiveProduct = useStore((state) => state.setActiveProduct);

  //   const product = page.products.nodes[activeProduct].productDetails.content;

  // console.log("Current Product", activeProduct);
  return (
    <>
      <section>
        <ul className="flex gap-8 justify-center items-center z-50">
          {products.map((product, index) => (
            <li key={index}>
              <button
                onClick={() => setActiveProduct(index)}
                className="relative w-56 h-64"
              >
                <Image
                  alt={"product" + "-" + product.id}
                  src={product.productDetails.content.image.node.sourceUrl}
                  fill={true}
                  style={{ objectFit: "contain" }}
                  className="z-50"
                />
              </button>
            </li>
          ))}
        </ul>
        <div>
          <SliderEye products={products} activeProduct={activeProduct} />
        </div>
        <div className="max-w-[1200px] py-[110px] px-[110px] m-auto bg-white shadow-xl rounded-xl">
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
