import { IoSearch } from "react-icons/io5";
import React from "react";

export default function SearchForm() {
  return (
    <div className="flex items-center ">
      <input
        type="text"
        className="border rounded-full border-primary h-8 px-4 hidden lg:block"
      />
      <button className="flex lg:hidden text-primary text-2xl">
        <IoSearch />
      </button>
    </div>
  );
}
