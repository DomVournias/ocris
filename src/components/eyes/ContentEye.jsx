import CardButton from "../buttons/CardButton";
import Image from "next/image";
import React from "react";

export default function ContentEye({ children, icon }) {
  function iconChoice() {
    const star =
      process.env.NEXT_WP_PUBLIC_ENDPOINT +
      "/wp-content/uploads/2024/04/star-button.png";

    const heart =
      process.env.NEXT_WP_PUBLIC_ENDPOINT +
      "/wp-content/uploads/2024/03/2asAsset-2.png";

    const person =
      process.env.NEXT_WP_PUBLIC_ENDPOINT +
      "/wp-content/uploads/2024/03/2asAsset-1.png";

    if (icon === "heart") {
      return heart;
    }
    if (icon === "star") {
      return star;
    }

    if (icon === "person") {
      return person;
    }
  }
  return (
    <>
      <div className="content-eye">
        <Image
          alt="eye"
          src={
            icon === "star"
              ? process.env.NEXT_WP_PUBLIC_ENDPOINT +
                "/wp-content/uploads/2024/04/woman-1-1.png"
              : process.env.NEXT_WP_PUBLIC_ENDPOINT +
                "/wp-content/uploads/2024/03/New-Project-27.png"
          }
          fill={true}
          style={{ objectFit: "cover" }}
          className="rounded-[20px]"
        />
      </div>
      <div className="small-eye">
        <div className="small-eye-inner">
          <div className="small-eye-icon-container">
            <div className="small-eye-icon">
              <Image
                alt="icon"
                src={iconChoice()}
                fill={true}
                style={{ objectFit: "contain" }}
                className="z-60 absolute rotate-[-45deg] "
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center w-full px-8 lg:px-20 h-full rotate-[-45deg]">
            <div className="flex flex-col gap-2 ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
