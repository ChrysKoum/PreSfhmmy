import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Spotlight } from "./ui/Spotlight";
import { FaAnglesDown } from "react-icons/fa6";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundLayer1Y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-50%"]
  );
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

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
        className="font-bold text-center text-white text-5xl sm:text-6xl md:text-7xl lg:text-9xl relative z-10 mt-12"
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
      {/* Background Layer 1 */}
      <div
        className="
    absolute z-20 
    w-[50%] h-[50%] 
    md:w-[30%] md:h-[30%] // Default size for large screens
    md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 // Center on larger screens
    -bottom-0  // Adjust position for small screens
    bg-contain bg-no-repeat
  "
        style={{
          backgroundImage: `url(/LogoPreΣΦΗΜΜΥwhite.png)`,
        }}
      />

      {/* Background Layer 2 */}
      <div
        className="
    absolute z-20 
    w-[50%] h-[50%] 
    md:w-[30%] md:h-[30%] // Default size for large screens
    md:bottom-3 md:right-5 // Default bottom-right for larger screens
    -bottom-20
    bg-contain bg-no-repeat
  "
        style={{
          backgroundImage: `url(/PreΣΦΗΜΜΥ_9_moto.png)`,
        }}
      />

      {/* Background Layer 3 */}
      <div
        className="
    absolute z-20 
    w-[30%] h-[30%] 
    md:w-[20%] md:h-[20%] // Default size for large screens
    md:bottom-14 md:left-24 // Default bottom-right for larger screens
    bottom-56
    bg-contain bg-no-repeat
  "
        style={{
          backgroundImage: `url(/Call_for_Par.png)`,
        }}
      />

      {/* Background Layer 4 */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(/1_bg_green_building.png)`,
          backgroundPosition: "bottom", // Align the image to the bottom
          backgroundSize: "contain", // Stretch the image to cover the entire container
          backgroundRepeat: "no-repeat", // Prevent repeating the image
        }}
      />

      {/* Animated Scroll Down Indicator */}
      <a href="#about" className="cursor-pointer">
        <motion.div
          className="absolute bottom-8 z-30 flex flex-col items-center"
          animate={{ y: [0, 16, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaAnglesDown className="text-white text-3xl opacity-80 drop-shadow-lg" />
        </motion.div>
      </a>
    </div>
  );
}
