"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import useStore from "@/lib/stores/store";

export default function HeroImage({ products, image, icon }) {
  const currentProduct = useStore((state) => state.currentProduct);

  const defaultEye = "hero-eye-big-container-animated";
  const openedEye = "opened";
  const closedEye = "closed";

  const [eyeState, setEyeState] = useState(openedEye);

  useEffect(() => {
    // Close the eye
    setEyeState(closedEye);

    // Delay opening the eye
    setTimeout(() => {
      setEyeState(openedEye);
    }, 500); // Adjust the delay time as needed
  }, [currentProduct]);

  return (
    <div className={`${defaultEye} ${eyeState}`}>
      {image ? (
        <div className="absolute z-20 bottom-[420px] right-[50px] rotate-[-45deg]">
          <div className="relative w-[200px] h-[200px]">
            <Image
              alt="icon"
              src={image}
              fill={true}
              style={{ objectFit: "contain" }}
              className="z-[-1]"
            />
          </div>
        </div>
      ) : (
        <>{icon}</>
      )}
      {products.map((product, index) => (
        <Image
          key={index}
          alt="eye"
          //   src={product === null ? image : product.image}
          src={product.featuredImage.node.sourceUrl}
          fill={true}
          style={{ objectFit: "cover" }}
          className={
            currentProduct === index
              ? "rounded-[20px] duration-500 opacity-100"
              : "rounded-[20px] duration-500 opacity-0"
          }
        />
      ))}
    </div>
  );
}
