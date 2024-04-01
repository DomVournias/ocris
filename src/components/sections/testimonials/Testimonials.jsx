import CardButton from "@/components/buttons/CardButton";
import ContentEye from "@/components/eyes/ContentEye";
import React from "react";
import TestimonialsSwiper from "@/components/swiper/TestimonialsSwiper";

export default function Testimonials({ data }) {
  return (
    <section>
      <div className="container">
        <ContentEye icon={"star"}>
          <TestimonialsSwiper testimonials={data} />

          {/* <CardButton
            text={"Περισσότερα"}
            link={data.link}
            className="self-center text-center"
          /> */}
        </ContentEye>
      </div>
    </section>
  );
}
