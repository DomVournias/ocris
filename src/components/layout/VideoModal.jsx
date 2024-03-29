"use client";

import React, { useRef } from "react";

import VideoEyeCloseButton from "../buttons/VideoEyeCloseButton";
import { useClickOutside } from "@/hooks/useClickOutside";
import useStore from "@/lib/stores/store";

export default function VideoModal({ video }) {
  const videoModal = useStore((state) => state.videoModal);
  const closeVideoModal = useStore((state) => state.closeVideoModal);

  const modalRef = useRef();
  useClickOutside(modalRef, closeVideoModal);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen z-[1000] bg-primary backdrop-filter backdrop-blur-lg bg-opacity-50 ${
        videoModal ? "flex" : "hidden"
      }`}
    >
      <div ref={modalRef} className="relative max-w-2xl bg-white">
        <h2>Video Modal</h2>
        <VideoEyeCloseButton />
      </div>
    </div>
  );
}
