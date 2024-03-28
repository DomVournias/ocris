import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Import Swiper styles

export default function ProductsSwiper({
  products,
  currentProduct,
  handleSwipe,
}) {
  const handleSlideChange = () => {
    const newProductIndex = (currentProduct + 1) % products.length;
    handleSwipe(newProductIndex);
  };

  const handleProductSlide = (index) => {
    handleSwipe(index);
  };

  useEffect(() => {
    if (window.matchMedia("(min-width: 1200px)").matches) {
      const intervalId = setInterval(() => {
        const newProductIndex = (currentProduct + 1) % products.length;
        handleSwipe(newProductIndex);
      }, 5000);

      // Cleanup function to clear interval on component unmount
      return () => clearInterval(intervalId);
    }
  }, [currentProduct, handleSwipe, products.length]);

  return (
    <section>
      <div className="products-slider max-w-5xl m-auto">
        <Swiper
          navigation
          loop={true}
          speed={400}
          autoplay={{
            delay: 5000,
          }}
          grabCursor={true}
          pagination={{ clickable: true }}
          breakpoints={{
            720: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => console.log()}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <button
                onClick={() => handleProductSlide(index)}
                className="relative w-56 h-72 "
              >
                <Image
                  alt={"product" + "-" + product.id}
                  src={product.productDetails.content.image.node.sourceUrl}
                  fill={true}
                  style={{ objectFit: "contain" }}
                  className="z-50"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
