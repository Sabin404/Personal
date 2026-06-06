"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  Coffee,
  Zap,
  Sparkles,
  Phone,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import { SOCIAL_LINKS } from "@/app/lib/constants/social";
import { LOCATION } from "@/app/lib/constants/location";
import Tooltip from "@/app/components/ui/Tooltip";
import { TooltipKey, tooltips } from "@/app/lib/data/tooltips";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { language, t } = useLanguage();
  const city = language === "np" ? "पोखरा" : LOCATION.city;
  const country = language === "np" ? "नेपाल" : LOCATION.country;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden px-4 py-14 sm:px-6"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[80px_80px]" />

      {/* Floating Orbs */}
      <motion.div
        className="absolute left-1/3 top-1/4 h-[52vw] w-[52vw] max-h-128 max-w-lg rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(147,51,234,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 h-[60vw] w-[60vw] max-h-152 max-w-152 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto w-full max-w-350">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center sm:mb-20 lg:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white/80 font-medium">
              {t.contact.connectBadge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter mb-8"
          >
            <span className="inline-block bg-linear-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
              {t.contact.headingLine1}
            </span>
            <br />
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
              {t.contact.headingLine2}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto max-w-2xl px-1 text-base font-light text-white sm:text-lg lg:text-xl"
          >
            {t.contact.introLine1} ☕
            <br />
            {t.contact.introLine2}
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:gap-6 lg:mb-12 lg:grid-cols-12">
          {/* Email Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onHoverStart={() => setHoveredCard("email")}
            onHoverEnd={() => setHoveredCard(null)}
            className="lg:col-span-7 group"
          >
            <FloatingCard>
              <div className="flex h-full min-h-80 flex-col justify-between p-6 sm:min-h-95 sm:p-8 lg:min-h-100 lg:p-10">
                <div>
                  <motion.div
                    animate={{
                      rotate: hoveredCard === "email" ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-2xl mb-6 backdrop-blur-sm border border-white/10"
                  >
                    <Mail className="w-8 h-8 text-purple-400" />
                  </motion.div>

                  <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    {t.contact.dropLineTitle}
                  </h3>
                  <p className="mb-6 text-base text-white sm:text-lg">
                    {t.contact.dropLineDesc}
                  </p>
                </div>

                <motion.a
                  href="mailto:your@email.com"
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black transition-all hover:shadow-2xl hover:shadow-purple-500/20 sm:gap-3 sm:px-7 sm:py-4 sm:text-base lg:px-8 lg:text-lg"
                >
                  <span className="break-all sm:break-normal">
                    paudelsabin0@gmail.com
                  </span>
                  <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </motion.a>
              </div>
            </FloatingCard>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onHoverStart={() => setHoveredCard("location")}
            onHoverEnd={() => setHoveredCard(null)}
            className="lg:col-span-5 group"
          >
            <FloatingCard>
              <div className="flex h-full min-h-80 flex-col justify-between p-6 sm:min-h-95 sm:p-8 lg:min-h-100">
                <div>
                  <motion.div
                    animate={{
                      y: hoveredCard === "location" ? [-3, 3, -3] : 0,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl mb-6 backdrop-blur-sm border border-white/10"
                  >
                    <MapPin className="w-7 h-7 text-blue-400" />
                  </motion.div>

                  <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                    {t.contact.basedIn}
                  </h3>
                  <div className="space-y-3">
                    <p className="text-white text-base leading-relaxed">
                      {t.contact.basedInDesc}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-4xl">{LOCATION.flag}</span>
                      <div>
                        <p className="font-bold text-white text-lg">{city}</p>
                        <p className="text-white text-sm">{country}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timezone indicator */}
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-white font-mono">
                    {t.contact.timezoneText}
                  </span>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {t.contact.findMe}
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map((social, index) => {
              const Icon = social.icon;

              // Use type-safe tooltip key
              const tooltipKey = social.name.toLowerCase() as TooltipKey;

              return (
                <Tooltip
                  key={social.name}
                  content={tooltips[tooltipKey]}
                  delay={100}
                >
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all hover:border-white/30 hover:bg-white/10 sm:gap-3 sm:px-6 sm:py-4"
                  >
                    <Icon className="w-5 h-5 text-white group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium text-white group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                </Tooltip>
              );
            })}
          </div>
        </motion.div>

        {/* Fun Ways to Connect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">
              {t.contact.otherWaysTitle}
            </h3>
            <p className="text-white">{t.contact.otherWaysDesc} 😄</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {/* Quick Call */}
            <motion.div
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredCard("call")}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/30 sm:p-8">
                <motion.div
                  animate={{
                    rotate: hoveredCard === "call" ? [0, -10, 10, 0] : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="w-10 h-10 text-green-400 mb-4" />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {t.contact.quickCall}
                </h4>
                <p className="text-white/60 text-sm mb-4">
                  {t.contact.quickCallDesc}
                </p>
                <div className="inline-flex items-center gap-2 text-green-400 text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>{t.contact.bookSlot}</span>
                </div>
              </div>
            </motion.div>

            {/* Coffee Chat */}
            <motion.div
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredCard("coffee")}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/30 sm:p-8">
                <motion.div
                  animate={{
                    rotate: hoveredCard === "coffee" ? [0, 360] : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Coffee className="w-10 h-10 text-amber-400 mb-4" />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {t.contact.virtualCoffee}
                </h4>
                <p className="text-white/60 text-sm mb-4">
                  {t.contact.virtualCoffeeDesc}
                </p>
                <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium">
                  <Coffee className="w-4 h-4" />
                  <span>{t.contact.grabCup}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Message */}
            <motion.div
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredCard("message")}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-white/30 sm:p-8">
                <motion.div
                  animate={{
                    x: hoveredCard === "message" ? [0, 5, 0] : 0,
                  }}
                  transition={{ duration: 0.4, repeat: Infinity }}
                >
                  <MessageCircle className="w-10 h-10 text-blue-400 mb-4" />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {t.contact.quickDm}
                </h4>
                <p className="text-white/60 text-sm mb-4">
                  {t.contact.quickDmDesc}
                </p>
                <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium">
                  <Zap className="w-4 h-4" />
                  <span>{t.contact.superFast}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 text-center sm:mt-20"
        >
          <p className="text-white text-sm tracking-widest uppercase mb-4">
            {t.contact.responseTime}
          </p>
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-white font-mono text-xs"
          >
            {`✨ ${t.contact.poweredBy} ✨`}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// Floating Card Component with 3D effect
function FloatingCard({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      {/* Card */}
      <div className="relative bg-zinc-900/30 backdrop-blur-sm border border-white/10 rounded-3xl h-full hover:border-white/20 transition-all overflow-hidden">
        {/* Subtle shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.03), transparent 40%)",
          }}
        />

        {children}
      </div>
    </motion.div>
  );
}
