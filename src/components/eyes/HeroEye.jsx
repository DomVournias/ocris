import CardButton from "../buttons/CardButton";
import HeroImage from "./HeroImage";
import HeroLink from "./HeroLink";
import Image from "next/image";
import React from "react";

export default function HeroEye({
  eyeImage,
  image,
  icon,
  link,
  title,
  heading1,
  heading2,
  multiple,
  products,
}) {
  return (
    <>
      <div className="absolute z-0 top-[20px] left-[180px] animate-[spin_20s_infinite_linear]">
        <div className="relative w-[250px] h-[250px]">
          <Image
            alt="background 1"
            src={
              process.env.NEXT_WP_PUBLIC_ENDPOINT +
              "/wp-content/uploads/2024/03/2Asset-14.png"
            }
            fill={true}
            style={{ objectFit: "cover" }}
            className="z-[-1]"
          />
        </div>
      </div>
      <div className="absolute z-0 bottom-[40px] left-[-50px] animate-[spin_20s_infinite_linear]">
        <div className="relative w-[350px] h-[350px]">
          <Image
            alt="background 2"
            src={
              process.env.NEXT_WP_PUBLIC_ENDPOINT +
              "/wp-content/uploads/2024/03/2Asset-14.png"
            }
            fill={true}
            style={{ objectFit: "cover" }}
            className="z-[-1]"
          />
        </div>
      </div>
      <div className="relative flex justify-center items-center mr-[-300px] w-[500px] h-[500px] rounded-br-[70%] rounded-tl-[70%] rounded-tr-[20px] rounded-bl-[20px] rotate-45 bg-accent z-20 shadow-xl">
        <div className="flex flex-col gap-10  justify-center w-1/2 h-full rotate-[-45deg]">
          <div className="flex flex-col gap-5 text-6xl font-medium">
            <span className="ml-[-80px] text-accentText">{heading1}</span>
            <span className="ml-[40px] text-white">{heading2}</span>
          </div>
          {link ? <HeroLink /> : <h2>{title}</h2>}
        </div>
      </div>
      <HeroImage multiple={multiple} products={products} />
    </>
  );
}
