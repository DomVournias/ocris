"use client";

import React from "react";
import useStore from "@/lib/stores/store";

const MobileMenu = ({ children }) => {
  const mobileMenuModal = useStore((state) => state.mobileMenuModal);
  const closeMobileMenuModal = useStore((state) => state.closeMobileMenuModal);

  console.log(mobileMenuModal);

  return (
    <div
      className={`w-screen h-screen absolute top-0 z-[9999] lg:hidden duration-300 ${
        mobileMenuModal ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      role="dialog"
      id="menu_modal"
      aria-label="menu modal"
    >
      <div className="modal-box w-screen max-w-full h-screen max-h-full rounded-none bg-primary text-white justify-center items-center flex">
        <div className="modal-action">
          <button
            onClick={closeMobileMenuModal}
            htmlFor="menu_modal"
            className="absolute right-6 top-2 w-10 h-10 text-3xl"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
