import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const StaggeredReveal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const str =
    "Tiare Kelly is a Composer, Musician & Artist based in Tamaki Makaurau (Auckland)";
  const DURATION = 0.25;
  const STAGGER = 0.025;

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div style={{ overflow: "hidden" }} ref={ref}>
      {str.split("").map((l, i) => {
        return (
          <motion.span
            className="inline-block"
            key={i}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
          >
            {l}
          </motion.span>
        );
      })}
    </div>
  );
};
