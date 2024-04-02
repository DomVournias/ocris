"use client";

import React from "react";
import useStore from "@/lib/stores/store";

const SearchModal = ({ children }) => {
  const searchModal = useStore((state) => state.searchModal);
  const closeSearchModal = useStore((state) => state.closeSearchModal);

  return (
    <div
      className={`w-screen h-screen absolute top-0 z-[9999] duration-300 ${
        searchModal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      role="dialog"
      id="menu_modal"
      aria-label="menu modal"
    >
      <div className="modal-box w-screen max-w-full h-screen max-h-full rounded-none bg-primary text-white justify-center items-center flex">
        <div className="w-[500px] px-4">
          <button
            onClick={closeSearchModal}
            htmlFor="menu_modal"
            className="absolute right-4 top-4 w-10 h-10 text-3xl"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
