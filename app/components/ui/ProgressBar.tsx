"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  // Smooth spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  // 0% ma hidden, scroll garesi visible
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.1, 1], [0, 1, 1, 1]);

  return (
    <>
      {/* Progress bar with gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] "
        style={{ scaleX, opacity }}
      >
        <div className="w-full h-full bg-gradient-to-r from-yellow-500 via-red-500 to-blue-500" />
      </motion.div>

      {/* Glowing dot at the end of progress bar */}
      <motion.div
        className="fixed top-0 z-[60] w-1 h-[3px]"
        style={{
          left: useSpring(scrollYProgress, {
            stiffness: 120,
            damping: 25,
          }),
          scaleX: "100vw",
          opacity,
        }}
      >
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Scroll percentage - simple text */}
      {/* <motion.div className="   top-16 z-50" style={{ opacity }}>
        <div className="text-base font-medium text-white/80">
          <ScrollPercentage />
        </div>
      </motion.div> */}
    </>
  );
}
