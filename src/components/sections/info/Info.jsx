import CardButton from "@/components/buttons/CardButton";
import ContentEye from "@/components/eyes/ContentEye";
import React from "react";

export default function Info({ data }) {
  return (
    <section>
      <div className="relative flex max-w-7xl justify-center items-center m-auto z-10 ">
        <ContentEye icon={"heart"}>
          <span className="text-[12px] lg:text-2xl text-primary text-center">
            {data.title}
          </span>
          <p className="text-[9px] lg:text-sm font-medium text-text text-center pb-4">
            {data.paragraph}
          </p>
          <CardButton
            text={"Μάθε περισσότερα"}
            link={data.link}
            className="self-center text-center"
          />
        </ContentEye>
      </div>
    </section>
  );
}
