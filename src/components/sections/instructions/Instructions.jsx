import React from "react";

export default function Instructions({ data }) {
  // console.log("INSTRUCTIONS", data);
  return (
    <section>
      <div className="bg-primary">
        <h3 className="text-3xl text-center text-white font-semibold">
          {data.heading}
        </h3>
      </div>
    </section>
  );
}
