import { useInView } from "framer-motion";
import { useRef } from "react";

const Heading = ({ title }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <h1
        className="text-5xl mx-10 font-bold "
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {title}
      </h1>
    </section>
  );
};
export default Heading;
