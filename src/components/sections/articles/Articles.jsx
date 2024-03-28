import Cards from "../../cards/Cards";
import Image from "next/image";
import React from "react";

export default function Articles({ data }) {
  return (
    <section>
      <div className="relative py-28">
        <div className="max-w-7xl space-y-20 m-auto">
          <h3 className="text-3xl text-center text-primary font-semibold">
            {data.heading}
          </h3>
          <Cards type="articles" data={data.posts.nodes} />
        </div>
        <Image
          src={
            process.env.NEXT_WP_PUBLIC_ENDPOINT +
            "/wp-content/uploads/2024/03/3Asset-6.png"
          }
          fill
          style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
          alt={"vision background"}
        />
      </div>
    </section>
  );
}
