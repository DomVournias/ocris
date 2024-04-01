"use client";

import "swiper/css";
import "swiper/css/pagination";

import {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
} from "swiper/modules";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import useStore from "@/lib/stores/store";

// import "swiper/css/navigation";

// Import Swiper styles

export default function TestimonialsSwiper({ testimonials }) {
  const currentTestimonial = useStore((state) => state.currentTestimonial);
  const setCurrentTestimonial = useStore(
    (state) => state.setCurrentTestimonial
  );

  const handleSlideChange = () => {
    const newTestimonialIndex = (currentTestimonial + 1) % testimonials.length;
    setCurrentTestimonial(newTestimonialIndex);
  };

  //   console.log("Testimonials", testimonials);
  return (
    <section>
      <div className="max-w-5xl m-auto">
        <Swiper
          loop={true}
          speed={400}
          autoplay={{
            delay: 5000,
          }}
          grabCursor={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
          onSlideChange={null}
          onSwiper={(swiper) => console.log()}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
        >
          {testimonials.map(({ fields }, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="testimonial">
                <span className="text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[23px] text-primary text-center">
                  {fields.name}
                </span>
                <span className="text-[11px] md:text-[12px] lg:text-[12px] xl:text-[16px] text-primary">
                  {fields.title + " - " + fields.company}
                </span>
                <p className="text-[10px] sm:text-[13px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-medium text-text text-center pb-2 lg:pb-4 lg:pt-3">
                  {fields.comment}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
