"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ui/ThemeToggle";
import MagneticWrapper from "@/app/components/animations/MagneticWrapper";
import { Home, Briefcase, User, Mail } from "lucide-react";
import { useLanguage } from "@/app/lib/i18n/LanguageProvider";

export default function Navigation() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.navigation.home, href: "/", icon: Home },
    { label: t.navigation.about, href: "/about", icon: User },
    { label: t.navigation.work, href: "/projects", icon: Briefcase },
    { label: t.navigation.contact, href: "/contact", icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-3 left-1/2 z-50 w-[calc(100%-0.75rem)] max-w-[95%] -translate-x-1/2 sm:top-4 sm:w-full sm:max-w-xl"
    >
      {/* Glass Container */}
      <div className="flex items-center justify-between gap-1 overflow-x-auto rounded-2xl border border-white/10 bg-white/10 px-1.5 py-2 shadow-lg backdrop-blur-md dark:bg-black/80 sm:gap-2 sm:rounded-full sm:px-3 sm:py-2.5">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <MagneticWrapper key={item.href} strength={0.12}>
              <Link
                href={item.href}
                className={cn(
                  "flex shrink-0 items-center gap-1 rounded-full px-2 py-1.5 text-xs font-medium whitespace-nowrap transition-all duration-200 sm:gap-2 sm:px-3 sm:text-sm md:text-base",
                  "hover:bg-white/5 dark:hover:bg-white/10",
                  isActive
                    ? "text-white bg-white/10 dark:bg-white/20 dark:text-white"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-white",
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            </MagneticWrapper>
          );
        })}

        <div className="flex shrink-0 items-center gap-1 rounded-full border border-white/20 bg-white/5 px-1 py-1">
          <span className="sr-only">{t.navigation.langLabel}</span>
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors",
              language === "en"
                ? "bg-white/20 text-white"
                : "text-zinc-400 hover:text-white",
            )}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("np")}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors",
              language === "np"
                ? "bg-white/20 text-white"
                : "text-zinc-400 hover:text-white",
            )}
          >
            NP
          </button>
        </div>

        <span className="mx-1 hidden h-6 w-px shrink-0 bg-white/20 dark:bg-white/30 sm:block" />

        {/* Theme Toggle inline */}
        <ThemeToggle />
      </div>
    </motion.nav>
  );
}
