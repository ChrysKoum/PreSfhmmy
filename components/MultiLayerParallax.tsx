import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-screen h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{
          y: textY,
          fontFamily: "'3DThirteenPixel', sans-serif",
          color: "#77bb4e",
        }}
        className="font-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-9xl relative z-10"
      >
        PreΣΦΗΜΜΥ 9
      </motion.h1>

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="green"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#77bb4e"
        />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Background Layer 2 */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(/1_bg_green_building.png)`,
          backgroundPosition: "bottom", // Adjust this value to lower the building
          backgroundSize: "contain", // Prevent stretching
          backgroundRepeat: "no-repeat", // Optional:
        }}
      />
    </div>
  );
}
