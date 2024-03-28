"use client";

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import React from "react";
import useStore from "@/lib/stores/store";

export default function MobileMenuBtn() {
  const openMobileMenuModal = useStore((state) => state.openMobileMenuModal);

  return (
    <button
      onClick={openMobileMenuModal}
      htmlFor="menu_modal"
      aria-label="menu modal trigger"
      className="text-primary text-3xl md:hidden z-50"
    >
      <HiMiniBars3BottomRight />
    </button>
  );
}
