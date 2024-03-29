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
      className={`fixed flex top-0 left-0 w-screen h-screen z-[1000] bg-primary backdrop-filter backdrop-blur-lg bg-opacity-50 pl-5 pr-10 duration-300 ${
        videoModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div ref={modalRef} className="m-auto overflow-hidden rounded-xl">
        <video width="640" height="640" preload="auto" autoPlay>
          <source src={video} type="video/mp4" />
        </video>
        <VideoEyeCloseButton />
      </div>
    </div>
  );
}
