import Link from "next/link";
import React from "react";

export default function CardButton({ link, text, handleOnClick, className }) {
  return (
    <>
      {handleOnClick ? (
        <button
          onClick={handleOnClick}
          className={`${"bg-primary hover:bg-primaryText py-2 px-3 lg:px-6 w-fit rounded-full text-white text-[12px] md:text-sm lg:text-base xl:text-lg "} ${className}`}
        >
          {text}
        </button>
      ) : (
        <Link
          href={`/${link}`}
          className={`${"bg-primary hover:bg-primaryText py-2 px-3 lg:px-6 w-fit rounded-full text-white text-[12px] md:text-sm lg:text-base xl:text-lg "} ${className}`}
        >
          {text}
        </Link>
      )}
    </>
  );
}
