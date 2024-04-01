import CardButton from "../buttons/CardButton";
import Image from "next/image";
import React from "react";

export default function ContentEye({ children, icon }) {
  function imageChoice(type) {
    const star =
      process.env.NEXT_WP_PUBLIC_ENDPOINT +
      "/wp-content/uploads/2024/04/star-button.png";

    const heart =
      process.env.NEXT_WP_PUBLIC_ENDPOINT +
      "/wp-content/uploads/2024/03/2asAsset-2.png";

    const person =
      process.env.NEXT_WP_PUBLIC_ENDPOINT +
      "/wp-content/uploads/2024/03/2asAsset-1.png";

    const heartBg =
      process.env.NEXT_WP_PUBLIC_ENDPOINT +
      "/wp-content/uploads/2024/04/eye-content-image-1.png";
    const personBg =
      process.env.NEXT_WP_PUBLIC_ENDPOINT +
      "/wp-content/uploads/2024/04/eye-content-image-2.png";
    const starBg =
      process.env.NEXT_WP_PUBLIC_ENDPOINT +
      "/wp-content/uploads/2024/04/woman-1-1.png";

    if (type === "background") {
      if (icon === "heart") {
        return heartBg;
      }
      if (icon === "star") {
        return starBg;
      }

      if (icon === "person") {
        return personBg;
      }
    }
    if (type === "icon") {
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
  }

  const Icon = imageChoice("icon");
  const Bg = imageChoice("background");
  return (
    <>
      <div className="content-eye">
        <Image
          alt="eye"
          src={Bg}
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
                src={Icon}
                fill={true}
                style={{ objectFit: "contain" }}
                className="z-60 absolute rotate-[-45deg] "
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center w-full px-8 lg:px-10 h-full rotate-[-45deg]">
            <div className="flex flex-col gap-2 ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
