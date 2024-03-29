"use client";

import Image from "next/image";
import React from "react";
import useStore from "@/lib/stores/store";

export default function VideoEyeButton() {
  const openVideoModal = useStore((state) => state.openVideoModal);
  return (
    <button
      onClick={openVideoModal}
      className="relative w-[100px] h-[100px] md:w-[110px] md:h-[110px]  lg:w-[120px] lg:h-[120px] xl:w-[130px] xl:h-[130px]"
    >
      <Image
        alt="video play button image"
        src="http://dev-ocris.healthmore.gr/wp-content/uploads/2024/03/play-button.png"
        fill={true}
        style={{ objectFit: "cover" }}
        className=""
      />
    </button>
  );
}
