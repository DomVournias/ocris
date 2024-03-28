import Image from "next/image";
import React from "react";

export default function SliderEye({ products, activeProduct }) {
  return (
    <div className="relative flex max-w-7xl justify-center items-center m-auto z-10 py-[50px]">
      {products.map((product, index) => (
        <div key={index} className={`absolute left-[250px]`}>
          <div className="relative w-[450px] h-[500px]">
            <Image
              alt={"product" + "-" + product.id}
              src={product.productDetails.content.image.node.sourceUrl}
              fill={true}
              style={{ objectFit: "contain" }}
              className={`z-50 duration-500 ease-in-out ${
                activeProduct === index
                  ? "opacity-100"
                  : "opacity-0 translate-x-10"
              }`}
            />
          </div>
        </div>
      ))}

      <div
        className={`relative w-[700px] h-[700px] rounded-br-[60%] rounded-tl-[60%] rounded-tr-[20px] rounded-bl-[20px] duration-300 overflow-hidden rotate-45 z-10 bg-primary`}
      ></div>
      <div className="absolute right-[150px]">
        <div className="relative flex justify-center items-center w-[400px] h-[400px] rounded-br-[60%] rounded-tl-[60%] rounded-tr-[20px] rounded-bl-[20px] rotate-45 bg-secondary z-20 shadow-xl">
          <div className="flex flex-col gap-6 justify-center w-full px-20 h-full rotate-[-45deg]">
            <div className="relative w-[300px] h-[400px] top-0 flex flex-col justify-center">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`absolute flex flex-col gap-2 ${
                    activeProduct === index ? "opacity-100" : "opacity-0 "
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: product.productDetails.content.shortDescription,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
