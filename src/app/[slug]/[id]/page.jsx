import Hero from "@/components/sections/hero/Hero";
import Image from "next/image";
import React from "react";
import { fetchSinglePost } from "@/lib/functions";

export default async function page({ params }) {
  const encodedSlug = decodeURIComponent(params.id);

  const { data } = await fetchSinglePost(encodedSlug);

  const post = data.postBy;
  const hero = post.hero.heroContent;

  // console.log(post);

  return (
    <section>
      <div className="relative flex max-w-7xl justify-center items-center m-auto z-10 ">
        <Hero
          eyeImage={post.featuredImage.node.sourceUrl}
          link={false}
          icon={
            process.env.NEXT_WP_PUBLIC_ENDPOINT +
            "/wp-content/uploads/2024/03/2Asset-3.png"
          }
          title={hero.title}
          heading1={hero.heading1}
          heading2={hero.heading2}
        />
      </div>
      <article className="relative w-full pt-4 pb-32">
        <div className="max-w-[1200px] py-[110px] px-[110px]  m-auto bg-white shadow-xl rounded-xl">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="post-content space-y-4"
          />
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
