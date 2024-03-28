import ProductSlider from "../products/ProductSlider";
import React from "react";

export default function Products({ products }) {
  return (
    <section>
      <div className="pt-10 pb-20">
        <ProductSlider products={products} />
      </div>
    </section>
  );
}
