import Image from "next/image";
import React from "react";

export default function ProductEye({ image, title, paragraph, icon }) {
  return (
    <div className="container">
      <div className="absolute m-auto w-fit left-[-25%] right-0 z-[60]">
        <div className="relative w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
          <Image
            alt={"product"}
            src={image}
            fill={true}
            style={{ objectFit: "contain" }}
            className="opacity-100"
          />
        </div>
      </div>

      <div
        className={`relative w-[330px] h-[330px] sm:w-[430px] sm:h-[430px] md:w-[530px] md:h-[530px] lg:w-[630px] lg:h-[630px] xl:w-[700px] xl:h-[700px] rounded-br-[60%] rounded-tl-[60%] rounded-tr-[20px] rounded-bl-[20px] duration-300 overflow-hidden rotate-45 z-10 bg-primary`}
      ></div>
      <div className="absolute w-fit m-auto left-0 right-[-50%] ">
        <div className="relative flex justify-center items-center w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] xl:w-[470px] xl:h-[470px] rounded-br-[60%] rounded-tl-[60%] rounded-tr-[20px] rounded-bl-[20px] rotate-45 bg-secondary z-20 shadow-xl">
          <div className="small-eye-icon-container">
            <div className="small-eye-icon">
              <Image
                alt="icon"
                src={icon}
                fill={true}
                style={{ objectFit: "contain" }}
                className="z-60 absolute rotate-[-45deg] "
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center w-full px-[5vw] ml-8 h-full rotate-[-45deg]">
            <div className="relative w-full h-full top-[-10px] flex flex-col justify-center">
              <div class="flex flex-col gap-2 ">
                <span class="text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-primary text-center">
                  {title}
                </span>
                <p class="text-[10px] sm:text-[13px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-medium text-text text-center pb-2 lg:pb-4">
                  {paragraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
