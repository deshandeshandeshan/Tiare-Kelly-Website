import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const TitleStaggeredReveal = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const DURATION = 2;
  const STAGGER = 0.05;
  const str = props.children;
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div style={{ overflow: "hidden" }} ref={ref}>
      {str.split(" ").map((l, i) => {
        return (
          <motion.span
            className="inline-block-text"
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: DURATION,
              ease: [0.2, 0.65, 0.3, 0.9],
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
