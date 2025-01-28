import { motion, Variants } from "framer-motion";

// Define the animation using the Variants type from Framer Motion
const stairAnimation: Variants = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: "0%",
  },
};

const reverseIndex = (index: number): number => {
  const totalSteps = 10;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="w-full h-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
