import { motion } from "framer-motion";
import { ComponentType } from "react";

const mainVariants = {
  initial: {
    height: 0,
    scaleY: 1,
  },
  animate: {
    height: 10000,
    scaleY: 0,
    transition: {
      height: { duration: 0.5, ease: "easeInOut", when: "beforeChildren" },
      scaleY: { duration: 0.5, ease: "easeInOut" },
    },
  },
};

const Transition = (Component: ComponentType) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="fixed top-0 bg-gray-700 right-0 h-screen w-screen z-50 flex justify-center items-center flex-col gap-y-5 transform origin-top"
        variants={mainVariants}
        initial="initial"
        animate="animate"
      ></motion.div>
    </>
  );
};

export default Transition;
