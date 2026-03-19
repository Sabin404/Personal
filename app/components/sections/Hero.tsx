"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import OptimizedImage from "../ui/OptimizedImage";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-start justify-center overflow-hidden px-4 pt-24 sm:min-h-[78vh] sm:px-6 md:min-h-[82vh] lg:min-h-[80vh] lg:pt-32"
    >
      {/* Radial spotlight */}
      <div className="absolute">
        <div className="absolute bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute  bg-linear-to-b from-transparent via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-0 text-center lg:px-6">
        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2.2rem,10vw,5.8rem)] font-bold leading-[1.2] tracking-tight text-white"
        >
          {t.hero.headingLine1}

          <motion.span
            className="inline-block bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            {t.hero.headingHighlight}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:text-xl"
        >
          {t.hero.intro}
        </motion.p>

        {/* ABOUT BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="/about"
            className="
      group relative flex items-center gap-4
      rounded-full px-2 py-2
      overflow-hidden
      transition-all duration-500 ease-out
    "
          >
            {/* Gradient Background Layer */}
            <div
              className="
      absolute inset-0 rounded-full
      bg-linear-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10
      blur-xl opacity-0 group-hover:opacity-100
      transition-opacity duration-500
    "
            />

            {/* Glass Morphism Base */}
            <div
              className="
      absolute inset-0 rounded-full
      border border-white/15
      bg-white/5 backdrop-blur-xl
      transition-all duration-500
      group-hover:border-white/30
      group-hover:bg-white/10
    "
            />

            {/* Shimmer Effect */}
            <div
              className="
      absolute inset-0 rounded-full
      bg-linear-to-r from-transparent via-white/20 to-transparent
      -translate-x-full group-hover:translate-x-full
      transition-transform duration-1000 ease-in-out
    "
            />

            {/* Content Container */}
            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              {/* Profile Image with Glow */}
              <div className="relative">
                <div
                  className="
          absolute inset-0 rounded-full
          bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500
          blur-md opacity-0 group-hover:opacity-60
          transition-opacity duration-500
        "
                />
                <div
                  className="
          relative w-10 h-10 rounded-full overflow-hidden 
          
          group-hover:border-white/40
         
          
        "
                >
                  <OptimizedImage
                    src="/picofme.png"
                    alt="Hero Image"
                    width={320}
                    height={240}
                    className="rounded-xl"
                    priority
                  />
                </div>
              </div>

              {/* Text with Gradient */}
              <span
                className="
              text-base font-medium tracking-wide sm:text-[20px]
        bg-linear-to-r from-white via-white to-white/80
        bg-clip-text text-transparent
        group-hover:from-purple-200 group-hover:via-blue-200 group-hover:to-cyan-200
        transition-all duration-500
      "
              >
                {t.hero.aboutButton}
              </span>

              {/* Arrow with Smooth Animation */}
              <ChevronRight
                size={25}
                className="
          text-white/80
          opacity-0 -translate-x-3 translate-y-1
          transition-all duration-500 ease-out
          group-hover:opacity-100
          group-hover:translate-x-0
          group-hover:translate-y-0
          group-hover:text-cyan-300
        "
              />
            </div>

            {/* Hover Glow Edge */}
            <div
              className="
      absolute inset-0 rounded-full
      shadow-[0_0_30px_rgba(139,92,246,0)]
      group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
      transition-shadow duration-500
    "
            />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="lg:flex flex-col items-center  text-zinc-500 hidden "
        >
          <span className="text-[14px] mb-2 font-mono">Dont scroll</span>
          <ArrowDown size={18} className="text-zinc-500 text-center" />
        </motion.div>
      </motion.div> */}
    </section>
  );
}
