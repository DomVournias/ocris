import React from "react";
import Socials from "./socials/Socials";

export default function Menu({ menu, socials }) {
  return (
    <>
      <nav className="pb-20">
        <ul className="flex flex-col gap-6 text-center">
          {menu.map((item, index) => (
            <li
              key={index}
              className="btn bg-transparent border-transparent text-white hover:text-black"
            >
              <a aria-label="menu link" href={item.path}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Socials socials={socials} />
      </div>
    </>
  );
}
