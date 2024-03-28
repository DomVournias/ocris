"use client";

import ProductSlider from "../products/ProductSlider";
import ProductsSwiper from "../swiper/ProductsSwiper";
import React from "react";

export default function Products({ products }) {
  return (
    <section>
      <div className="pt-10 pb-20">
        <ProductsSwiper products={products} />
      </div>
    </section>
  );
}
