"use client";

import { useTime } from "@/app/lib/hooks/useTime";
import { MapPin, Clock } from "lucide-react";
import { LOCATION } from "@/app/lib/constants/location";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

export default function SystemBar() {
  const time = useTime("hh:mm:ss");
  const { language, t } = useLanguage();
  const city = language === "np" ? "पोखरा" : LOCATION.city;
  const country = language === "np" ? "नेपाल" : LOCATION.country;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-20 z-50 hidden lg:block md:block">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        className="pointer-events-auto absolute left-0"
      >
        <div className="flex max-w-[72vw] items-center gap-2 rounded-r-full border border-l-0 border-white/15 bg-black/55 px-2.5 py-1.5 backdrop-blur-md sm:max-w-none sm:px-3 sm:py-2">
          <MapPin className="h-3.5 w-3.5 text-zinc-300" />
          <div
            className="leading-tight"
            style={{
              fontFamily:
                "var(--font-location), var(--font-nepali), var(--font-geist-sans), sans-serif",
            }}
          >
            <div className="max-w-[48vw] truncate text-[11px] text-zinc-200 sm:max-w-none sm:text-xs">
              {city}, {country}
            </div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
              {LOCATION.flag} {t.systemBar.liveLocation}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
        className="pointer-events-auto absolute right-0"
      >
        <div className="flex max-w-[72vw] items-center gap-2 rounded-l-full border border-r-0 border-white/15 bg-black/55 px-2.5 py-1.5 backdrop-blur-md sm:max-w-none sm:px-3 sm:py-2">
          <div
            className="text-right leading-tight"
            style={{
              fontFamily: "var(--font-time), var(--font-geist-mono), monospace",
            }}
          >
            <div className="text-xs tabular-nums tracking-widest text-zinc-100 sm:text-base sm:tracking-[0.14em]">
              {time}
            </div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
              {t.systemBar.localTime}
            </div>
          </div>
          <Clock className="h-3.5 w-3.5 text-zinc-300" />
        </div>
      </motion.div>
    </div>
  );
}
