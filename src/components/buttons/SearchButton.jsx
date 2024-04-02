"use client";

import { IoSearch } from "react-icons/io5";
import React from "react";
import useStore from "@/lib/stores/store";

export default function SearchButton() {
  const openSearchModal = useStore((state) => state.openSearchModal);
  return (
    <button
      onClick={openSearchModal}
      className="flex justify-center items-center text-primary text-2xl"
    >
      <IoSearch />
    </button>
  );
}
