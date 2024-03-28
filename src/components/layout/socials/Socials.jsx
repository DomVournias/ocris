import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function Socials({ socials, className }) {
  const defaultClass = "text-xl rounded-full";

  return (
    <ul className="flex space-x-4 items-center ">
      <li id="facebook" className={`${defaultClass} ${className}`}>
        <Link href={socials.facebook.link} className="block p-2">
          <FaFacebookF />
        </Link>
      </li>
      <li id="x" className={`${defaultClass} ${className}`}>
        <Link href={socials.x.link} className="block p-2">
          <FaXTwitter />
        </Link>
      </li>
      <li id="linkedin" className={`${defaultClass} ${className}`}>
        <Link href={socials.linkedin.link} className="block p-2">
          <FaLinkedinIn />
        </Link>
      </li>
      <li id="youtube" className={`${defaultClass} ${className}`}>
        <Link href={socials.youtube.link} className="block p-2">
          <FaYoutube />
        </Link>
      </li>
    </ul>
  );
}
