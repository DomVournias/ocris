import CardButton from "../buttons/CardButton";
import Image from "next/image";
import React from "react";

export default function ContentEye({ children, icon }) {
  return (
    <>
      <div
        className={`relative w-[270px] h-[270px] sm:w-[370px] sm:h-[370px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] rounded-br-[60%] rounded-tl-[60%] rounded-tr-[0] rounded-bl-[0] duration-300 overflow-hidden rotate-45 z-10 `}
      >
        <Image
          alt="eye"
          src={
            process.env.NEXT_WP_PUBLIC_ENDPOINT +
            "/wp-content/uploads/2024/03/New-Project-27.png"
          }
          fill={true}
          style={{ objectFit: "cover" }}
          className="rounded-[20px]"
        />
      </div>
      <div className="absolute right-[50px] md:right-[100px] lg:right-[150px]">
        <div className="relative flex justify-center items-center w-[170px] h-[170px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] rounded-br-[60%] rounded-tl-[60%] rounded-tr-[20px] rounded-bl-[20px] rotate-45 bg-secondary z-20 shadow-xl">
          <div className="absolute top-[-30px] right-[50px] lg:top-[-60px] lg:right-[150px]">
            <div className="relative w-[60px] h-[60px] z-60 flex">
              <Image
                alt="icon"
                src={
                  icon === "heart"
                    ? process.env.NEXT_WP_PUBLIC_ENDPOINT +
                      "/wp-content/uploads/2024/03/2asAsset-2.png"
                    : process.env.NEXT_WP_PUBLIC_ENDPOINT +
                      "/wp-content/uploads/2024/03/2asAsset-1.png"
                }
                fill={true}
                style={{ objectFit: "contain" }}
                className="z-60 absolute rotate-[-45deg] "
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center w-full px-4 lg:px-20 h-full rotate-[-45deg]">
            <div className="flex flex-col gap-2 ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
