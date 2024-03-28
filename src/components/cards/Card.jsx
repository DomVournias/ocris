import CardButton from "../buttons/CardButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({
  type,
  image,
  alt,
  title,
  description,
  link,
  white,
  unlink,
}) {
  return (
    <article>
      <div
        className={
          white
            ? " flex flex-col justify-start space-y-4 w-80 bg-white px-6 py-6 rounded-xl shadow-lg"
            : "flex flex-col justify-start space-y-4 w-80"
        }
      >
        <div
          className={
            type === "posts"
              ? "p-5 bg-white w-fit flex shadow-lg rounded-full"
              : `${white ? "flex shadow-lg" : "w-fit flex shadow-lg"}`
          }
        >
          {type === "articles" ? (
            <div
              className={white ? "relative h-40 w-full" : "relative h-40 w-60"}
            >
              <Image
                fill={true}
                style={{ objectFit: "cover" }}
                src={image}
                alt={alt}
              />
            </div>
          ) : (
            <div className="relative h-14 w-14">
              <Image
                fill={true}
                style={{ objectFit: "contain" }}
                src={image}
                alt={alt}
              />
            </div>
          )}
        </div>
        <div className="space-y-2 pb-4">
          <h4 className="text-xl md:text-2xl text-primary pt-2">{title}</h4>
          {type === "articles" ? (
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className="leading-8 font-medium text-text"
            />
          ) : (
            <p className="leading-8 font-medium text-text">{description}</p>
          )}
        </div>
        {!unlink === true && (
          <CardButton text={"Μάθε περισσότερα"} link={`άρθρα/${link}`} />
        )}
      </div>
    </article>
  );
}
