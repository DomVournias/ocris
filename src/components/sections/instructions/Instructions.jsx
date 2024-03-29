import React from "react";
import VideoEye from "@/components/eyes/VideoEye";
import VideoModal from "@/components/layout/VideoModal";

export default function Instructions({ data }) {
  const image = data.card1.image.node.sourceUrl;

  return (
    <section>
      <div className="bg-primary pt-28 pb-14 space-y-2">
        <h3 className="text-3xl text-center text-white font-semibold">
          {data.heading}
        </h3>
        <VideoEye image={image} title={data.card1.title} />
        <VideoModal video={data.card1.link} />
      </div>
    </section>
  );
}
