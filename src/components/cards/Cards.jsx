import Card from "./Card";
import React from "react";

export default function Cards({ data, type, unlink }) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-10 px-10">
      {data.map((item, index) => (
        <li key={index} className="flex flex-col justify-center items-center">
          <Card
            unlink={unlink}
            type={type}
            image={
              type === "articles"
                ? item.featuredImage.node.sourceUrl
                : item.icon.node.sourceUrl
            }
            alt={item.title}
            title={item.title}
            description={type === "articles" ? item.excerpt : item.description}
            link={type === "articles" ? item.slug : item.link}
          />
        </li>
      ))}
    </ul>
  );
}
