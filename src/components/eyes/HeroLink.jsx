"use client";

import CardButton from "../buttons/CardButton";
import React from "react";
import { useRouter } from "next/navigation";
import useStore from "@/lib/stores/store";

export default function HeroLink() {
  const router = useRouter();
  const currentProduct = useStore((state) => state.currentProduct);
  const setActiveProduct = useStore((state) => state.setActiveProduct);

  const onClick = () => {
    setActiveProduct(currentProduct);
    router.push("/προϊόντα");
  };

  return <CardButton text={"Μάθε περισσότερα"} handleOnClick={onClick} />;
}
