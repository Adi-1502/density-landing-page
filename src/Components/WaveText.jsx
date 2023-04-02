import React from "react";
import { motion } from "framer-motion";

export const WaveText = ({
  text,
  duration = 1,
  fontSize = "20px",
  delay = 0.05,
}) => {
  const textArray = text.split("");

  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <motion.span
        style={{ display: "block", originY: 1, fontSize: fontSize }}
        initial={{ y: 40, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
      >
        {textArray.map((letter, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: 50,
              x: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              y: [50, -20, 10, 0, -5, 0],
              x: [0, 5, -5, 3, -3, 0],
              scale: 1,
              transition: {
                duration: duration,
                ease: "easeInOut",
                delay: index * delay,
              },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export default WaveText;
