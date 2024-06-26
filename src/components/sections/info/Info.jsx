import CardButton from "@/components/buttons/CardButton";
import ContentEye from "@/components/eyes/ContentEye";
import React from "react";

export default function Info({ data }) {
  return (
    <section>
      <div className="container">
        <ContentEye icon={"heart"}>
          <span className="text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-primary text-center">
            {data.title}
          </span>
          <p className="text-[10px] sm:text-[13px] md:text-[16px] lg:text-[16px] xl:text-[18px] font-medium text-text text-center pb-2 lg:pb-4">
            {data.paragraph}
          </p>
          <CardButton
            text={"Περισσότερα"}
            link="εταιρεία"
            className="self-center text-center"
          />
        </ContentEye>
      </div>
    </section>
  );
}
