"use client";
import Hero from "@/app/components/sections/Hero";
import HomeArcadeGame from "@/app/components/features/HomeArcadeGame";
import HomeMemoryGame from "@/app/components/features/HomeMemoryGame";
import BubbleLoader from "./loading";
import HomeFunAstrologyGame from "@/app/components/features/HomeFunAstrologyGame";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <BubbleLoader />;
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-5xl px-4 text-center sm:px-6 ">
        <a
          href="#games"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          {t.home.scrollToGames}
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section
        id="games"
        className="mx-auto mt-10 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20"
      >
        <h2 className="mb-4 text-center text-xl font-semibold text-white">
          {t.home.miniGamesTitle}
        </h2>
        <p className="mb-6 text-center text-sm text-zinc-400">
          {t.home.miniGamesHint}
        </p>

        <div className="flex flex-col items-center gap-4 pb-2">
          <div className="snap-center shrink-0 w-[min(92vw,56rem)]">
            <HomeArcadeGame />
          </div>
          <div className="snap-center shrink-0 w-[min(92vw,56rem)]">
            <HomeMemoryGame />
          </div>
          <div className="snap-center shrink-0 w-[min(92vw,56rem)]">
            <HomeFunAstrologyGame />
          </div>
        </div>
      </section>
    </>
  );
}
