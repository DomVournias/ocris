import HeroImage from "./HeroImage";
import Image from "next/image";
import React from "react";
import VideoEyeButton from "../buttons/VideoEyeButton";

export default function VideoEye({ image, title }) {
  return (
    <div>
      <div className="relative flex max-w-7xl justify-center items-center m-auto z-10 ">
        <div className="absolute z-[1000] bottom-[10px] left-[100px] sm:bottom-[20px] sm:left-[120px] md:bottom-[30px] md:left-[120px]  lg:bottom-[50px] lg:left-[220px] xl:bottom-[140px] xl:left-[140px] ">
          <VideoEyeButton />
        </div>
        <div className="absolute right-0 m-auto w-fit left-[-50%] bottom-[22%]">
          <div className="relative flex justify-center items-center w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] rounded-br-[60%] rounded-tl-[60%] rounded-tr-[10px] rounded-bl-[10px] rotate-45 bg-accent z-20 shadow-xl">
            <div className="flex flex-col gap-2 md:gap-10  justify-center h-full rotate-[-45deg]">
              <div className="flex flex-col md:gap-5 text-xl md:text-xl lg:text-2xl xl:text-4xl font-medium">
                <span className="text-accentText ">{title}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]  rounded-br-[70%] rounded-tl-[70%] rounded-tr-[0] rounded-bl-[0] duration-300 overflow-hidden rotate-45 z-10 shadow-2xl ">
          <Image
            alt="eye"
            src={image}
            fill={true}
            style={{ objectFit: "cover" }}
            className="rounded-[20px] duration-500"
          />
        </div>
      </div>
    </div>
  );
}
