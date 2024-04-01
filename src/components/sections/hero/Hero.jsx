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
      <div className="container">
        {icon && (
          <div className="hero-eye-icon">
            <div className="hero-eye-icon-image">
              <Image
                alt="icon"
                src={icon}
                fill={true}
                style={{ objectFit: "contain" }}
                className="p-2 sm:p-3 md:p-4 xl:p-6 z-50"
              />
            </div>
          </div>
        )}
        <div className="hero-eye-animated-bg1-container">
          <div className="hero-eye-animated-bg1-image">
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
        <div className="hero-eye-animated-bg2-container">
          <div className="hero-eye-animated-bg2-image">
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
        <div className="hero-eye-small">
          <div className="hero-eye-content-inner">
            <div className="flex flex-col md:gap-5 ">
              <span className="hero-eye-heading-animated">{heading1}</span>
              <span className="hero-eye-heading">{heading2}</span>
            </div>

            <h2 className="hero-eye-title">{title}</h2>
          </div>
        </div>

        {multiple ? (
          <HeroImage multiple={multiple} products={products} />
        ) : (
          <div className="hero-eye-big-container-static">
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
