"use client";

import ProductsSwiper from "../swiper/ProductsSwiper";
import React from "react";
import useStore from "@/lib/stores/store";

export default function Products({ products }) {
  const currentProduct = useStore((state) => state.currentProduct);
  const setCurrentProduct = useStore((state) => state.setCurrentProduct);
  return (
    <section>
      <div className="pt-10 pb-20">
        <ProductsSwiper
          products={products}
          currentProduct={currentProduct}
          handleSwipe={setCurrentProduct}
        />
      </div>
    </section>
  );
}
