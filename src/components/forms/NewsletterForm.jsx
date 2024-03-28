import { MdOutlineEmail } from "react-icons/md";
import React from "react";

export default function NewsletterForm({ className }) {
  return (
    <form>
      <p className={`pb-4 ${className}`}>ΕΓΓΡΑΦΗ NEWSLETTER</p>
      <div className="flex items-center justify-between rounded-full shadow-lg relative">
        <input type="email" className="w-full py-2 px-4 rounded-full" />
        <span className="pr-2 absolute right-4 top-[10px] text-primary">
          <MdOutlineEmail />
        </span>
      </div>
    </form>
  );
}
