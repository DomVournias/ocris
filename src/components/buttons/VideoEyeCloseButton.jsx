"use client";

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import React from "react";
import useStore from "@/lib/stores/store";

export default function VideoEyeCloseButton() {
  const videoModal = useStore((state) => state.videoModal);
  const closeVideoModal = useStore((state) => state.closeVideoModal);

  return (
    <button
      onClick={closeVideoModal}
      className="absolute right-2 top-2 w-10 h-10 text-3xl text-white"
    >
      ✕
    </button>
  );
}
