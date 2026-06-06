"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type BubbleConfig = {
  width: number;
  height: number;
  left: number;
  duration: number;
  delay: number;
};

const BUBBLE_CONFIGS: BubbleConfig[] = Array.from({ length: 18 }, (_, i) => ({
  width: 80 + ((i * 37) % 140),
  height: 80 + ((i * 53) % 140),
  left: (i * 17) % 100,
  duration: 10 + ((i * 7) % 6),
  delay: ((i * 19) % 30) / 10,
}));

export default function BubbleLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      const audio = new Audio("./thunder.mp3");
      audio.play();
      audio.playbackRate = 2;
      return () => {
        audio.pause();
      };
    }
  }, [loading]);

  const bubbles = BUBBLE_CONFIGS;

  const loadingProgressBarClass = "mt-10 h-0.5 bg-white/10 overflow-hidden";
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(circle at center, #0a0a0a 0%, #000000 70%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* ================= LIGHTNING SYSTEM ================= */}

          <div className="absolute inset-0 pointer-events-none">
            {/* Lightning flash */}
            <motion.div
              className="absolute inset-0 bg-white opacity-0"
              animate={{ opacity: [0, 0.12, 0] }}
              transition={{
                duration: 0.25,
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />

            {/* REALISTIC SVG LIGHTNING BRANCH */}
            <motion.svg
              viewBox="0 0 500 500"
              className="absolute top-0 left-1/3 w-100 h-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              <motion.path
                d="M250 0 L230 120 L270 120 L200 260 L260 260 L220 500"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(0 0 10px #a855f7)",
                }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Branch lines */}
              <motion.path
                d="M230 120 L190 180"
                stroke="white"
                strokeWidth="2"
                fill="none"
                style={{ filter: "drop-shadow(0 0 8px #6366f1)" }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />

              <motion.path
                d="M200 260 L160 320"
                stroke="white"
                strokeWidth="2"
                fill="none"
                style={{ filter: "drop-shadow(0 0 8px #6366f1)" }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </motion.svg>

            <motion.svg
              viewBox="0 0 500 500"
              className="absolute top-0 left-20 w-100 h-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              <motion.path
                d="M250 0 L230 120 L270 120 L200 260 L260 260 L220 500"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(0 0 10px #a855f7)",
                }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Branch lines */}
              <motion.path
                d="M230 120 L190 180"
                stroke="white"
                strokeWidth="2"
                fill="none"
                style={{ filter: "drop-shadow(0 0 8px #6366f1)" }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />

              <motion.path
                d="M200 260 L160 320"
                stroke="white"
                strokeWidth="2"
                fill="none"
                style={{ filter: "drop-shadow(0 0 8px #6366f1)" }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />
            </motion.svg>
            <motion.svg
              viewBox="0 0 500 500"
              className="absolute top-0 right-20 w-100 h-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              <motion.path
                d="M250 0 L230 120 L270 120 L200 260 L260 260 L220 500"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  filter: "drop-shadow(0 0 10px #a855f7)",
                }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8 }}
              />

              {/* Branch lines */}
              <motion.path
                d="M230 120 L190 180"
                stroke="white"
                strokeWidth="2"
                fill="none"
                style={{ filter: "drop-shadow(0 0 8px #6366f1)" }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />

              <motion.path
                d="M200 260 L160 320"
                stroke="white"
                strokeWidth="2"
                fill="none"
                style={{ filter: "drop-shadow(0 0 8px #6366f1)" }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.svg>
          </div>

          {/* ================= FLOATING GLASS BUBBLES ================= */}

          {bubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full backdrop-blur-xl border border-white/10"
              style={{
                width: `${bubble.width}px`,
                height: `${bubble.height}px`,
                left: `${bubble.left}%`,
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                boxShadow:
                  "0 0 80px rgba(99,102,241,0.15), inset 0 0 40px rgba(255,255,255,0.05)",
              }}
              initial={{ y: "120vh", opacity: 0, scale: 0.6 }}
              animate={{
                y: "-20vh",
                opacity: [0, 0.6, 0.4],
                scale: [0.7, 1, 0.9],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* ================= ENERGY RINGS ================= */}

          <motion.div
            className="absolute w-100 h-100 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
          <motion.div
            className="absolute w-105 h-105 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
          <motion.div
            className="absolute w-12.5 h-105 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />

          <motion.div
            className="absolute w-65 h-65 rounded-full border border-indigo-500/30"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          />

          {/* ================= CENTER CONTENT ================= */}

          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold tracking-[0.3em] text-white">
              Aatreya
            </h1>

            <p className="mt-6 text-sm uppercase tracking-[0.4em] text-white/50">
              Crafting Digital Experiences
            </p>

            <motion.div
              className={loadingProgressBarClass}
              style={{ width: "200px", marginInline: "auto" }}
            >
              <motion.div
                className="h-full bg-linear-to-r from-indigo-400 to-purple-500"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
