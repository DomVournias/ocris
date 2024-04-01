import Card from "../cards/Card";
import Hero from "../sections/hero/Hero";
import Image from "next/image";
import React from "react";

export default function Articles({ page }) {
  const articles = page.pageBy.articlesPage.content.articles.nodes;
  const hero = page.pageBy.hero.heroContent;

  return (
    <section>
      <div className="container">
        <Hero
          eyeImage={hero.eyeImage.node.sourceUrl}
          link={false}
          icon={hero.icon.node.sourceUrl}
          title={hero.title}
          heading1={hero.heading1}
          heading2={hero.heading2}
        />
      </div>
      <article className="relative w-full pt-4 pb-32">
        <div className="max-w-[1200px] m-auto ">
          <ul className="w-full grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <li
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <Card
                  type={"articles"}
                  image={article.featuredImage.node.sourceUrl}
                  alt={article.title}
                  title={article.title}
                  description={article.excerpt}
                  link={article.slug}
                  white
                />
              </li>
            ))}
          </ul>
        </div>
        <Image
          art="background"
          fill={true}
          src={
            process.env.NEXT_WP_PUBLIC_ENDPOINT +
            "/wp-content/uploads/2024/03/3Asset-6.png"
          }
          style={{ objectFit: "cover", zIndex: "-1" }}
        />
      </article>
    </section>
  );
}
