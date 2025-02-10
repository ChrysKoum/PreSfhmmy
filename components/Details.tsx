import React from "react";

import { wordSfhmmy } from "@/data";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Button } from "./ui/MovingBorders";

const Details = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading font-pixeloidMono mb-10">
        What <span className="text-purple">you Will Achieve</span>
      </h1>
      <TextGenerateEffect className="text-4xl" words={wordSfhmmy} />
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10"></div>
    </div>
  );
};

export default Details;
