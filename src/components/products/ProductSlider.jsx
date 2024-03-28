"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import useStore from "@/lib/stores/store";

export default function ProductSlider({ products }) {
  const currentProduct = useStore((state) => state.currentProduct);
  const setCurrentProduct = useStore((state) => state.setCurrentProduct);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newProductIndex = (currentProduct + 1) % products.length;
      setCurrentProduct(newProductIndex);
    }, 6000); // Adjust the interval time as needed (3000 milliseconds = 3 seconds)

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentProduct, setCurrentProduct, products.length]);

  const handleProductSlide = (index) => {
    setCurrentProduct(index);
  };

  return (
    <section>
      <ul className="flex gap-8 justify-center items-center z-50">
        {products.map((product, index) => (
          <li key={index}>
            <button
              onClick={() => handleProductSlide(index)}
              className="relative w-56 h-72"
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
    </section>
  );
}
