import Image from "next/image";
import React from "react";
import { useHashState } from "@/hooks/useHash";

// import { useRouter } from "next/router";

export default function SliderEye({ products, image, title, paragraph, icon }) {
  // const router = useRouter();
  const [hash, setHash] = useHashState();
  let productSlug;
  if (hash === "") {
    productSlug = products[0].slug;
    // router.push(`προϊόντα#` + productSlug);
    // setHash(productSlug);
    // setTempProductSlug(productSlug);
  } else {
    productSlug = hash;
  }

  // console.log("HASH", hash);
  return (
    <div className="container">
      {products.map((product, index) => (
        <div
          key={index}
          className={`absolute m-auto w-fit left-[-45%] sm:left-[-25%] right-0 `}
        >
          <div
            id={product.slug}
            className="relative w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] md:w-[450px] md:h-[450px] lg:w-[450px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
          >
            <Image
              alt={"product" + "-" + product.id}
              src={product.productDetails.content.image.node.sourceUrl}
              fill={true}
              style={{ objectFit: "contain" }}
              className={`z-50 duration-500 ease-in-out ${
                productSlug === product.slug
                  ? "opacity-100"
                  : "opacity-0 translate-x-10"
              }`}
            />
          </div>
        </div>
      ))}

      <div
        className={`relative w-[330px] h-[330px] sm:w-[430px] sm:h-[430px] md:w-[530px] md:h-[530px] lg:w-[630px] lg:h-[630px] xl:w-[700px] xl:h-[700px] rounded-br-[60%] rounded-tl-[60%] rounded-tr-[20px] rounded-bl-[20px] duration-300 overflow-hidden rotate-45 z-10 bg-primary`}
      ></div>
      <div className="absolute w-fit m-auto left-0 right-[-50%] ">
        <div className="relative flex justify-center items-center w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] xl:w-[470px] xl:h-[470px] rounded-br-[60%] rounded-tl-[60%] rounded-tr-[20px] rounded-bl-[20px] rotate-45 bg-secondary z-20 shadow-xl">
          <div className="small-eye-icon-container">
            <div className="small-eye-icon">
              <Image
                alt="icon"
                src={
                  "http://dev-ocris.healthmore.gr/wp-content/uploads/2024/04/star-button.png"
                }
                fill={true}
                style={{ objectFit: "contain" }}
                className="z-60 absolute rotate-[-45deg] "
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center w-full px-[5vw] ml-8 h-full rotate-[-45deg]">
            <div className="relative w-full h-full top-[-10px] flex flex-col justify-center">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`absolute flex flex-col gap-2 left-0 right-0 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px] xl:text-[18px]  ${
                    productSlug === product.slug ? "opacity-100" : "opacity-0 "
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
