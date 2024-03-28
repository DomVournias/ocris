import HeroEye from "../../eyes/HeroEye";
import HeroImage from "@/components/eyes/HeroImage";
import HeroLink from "@/components/eyes/HeroLink";
import Image from "next/image";
import React from "react";

export default function Hero({
  eyeImage,
  image,
  icon,
  link,
  title,
  heading1,
  heading2,
  products,
  multiple,
}) {
  return (
    <section className="">
      <div className="relative flex max-w-7xl justify-center items-center m-auto z-10 ">
        {icon && (
          <div className="absolute bottom-[80px] right-[20px] z-50 ">
            <div className="relative w-[150px] h-[150px] rounded-full bg-white z-50 shadow-xl">
              <Image
                alt="icon"
                src={icon}
                fill={true}
                style={{ objectFit: "contain" }}
                className="p-10 z-50"
              />
            </div>
          </div>
        )}
        <div className="absolute z-0 top-[0px] left-[100px] sm:top-[20px] sm:left-[120px] md:top-[30px] md:left-[120px]  lg:top-[50px] lg:left-[220px] xl:top-[20px] xl:left-[180px] animate-[spin_20s_infinite_linear]">
          <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px]  lg:w-[150px] lg:h-[150px] xl:w-[250px] xl:h-[250px]">
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
        <div className="absolute z-0 bottom-[0px] left-[-20px] lg:bottom-[40px] lg:left-[-50px]  animate-[spin_20s_infinite_linear]">
          <div className="relative w-[150px] h-[150px] md:w-[250px] md:h-[250px]  lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]">
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
        <div className="relative w-[170px] h-[170px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded-br-[70%] rounded-tl-[70%] rounded-tr-[20px] rounded-bl-[20px] flex justify-center items-center mr-[-100px] md:mr-[-200px] lg:mr-[-300px]  rotate-45 bg-accent z-20 shadow-xl">
          <div className="flex flex-col gap-2 md:gap-10  justify-center w-1/2 h-full rotate-[-45deg]">
            <div className="flex flex-col md:gap-5 text-xl md:text-3xl lg:text-4xl xl:text-6xl font-medium">
              <span className="lg:ml-[-50px] xl:ml-[-80px] text-accentText ">
                {heading1}
              </span>
              <span className="lg:ml-[20px] xl:ml-[40px] text-white">
                {heading2}
              </span>
            </div>
            {link ? (
              <HeroLink />
            ) : (
              <h2 className="text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-center text-primary font-semibold">
                {title}
              </h2>
            )}
          </div>
        </div>

        {multiple ? (
          <HeroImage multiple={multiple} products={products} />
        ) : (
          <div className="relative w-[270px] h-[270px] sm:w-[370px] sm:h-[370px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px]  rounded-br-[70%] rounded-tl-[70%] rounded-tr-[0] rounded-bl-[0] duration-300 overflow-hidden rotate-45 z-10 shadow-2xl ">
            <Image
              alt="eye"
              src={eyeImage}
              fill={true}
              style={{ objectFit: "cover" }}
              className="rounded-[20px] duration-500"
            />
          </div>
        )}
      </div>
    </section>
  );
}
