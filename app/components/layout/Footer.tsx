"use client";

import { motion } from "framer-motion";
import { Coffee, Code } from "lucide-react";
import { SOCIAL_LINKS } from "@/app/lib/constants/social";
import MagneticWrapper from "@/app/components/animations/MagneticWrapper";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function Footer() {
  const [clicks, setClicks] = useState(0);
  const currentYear = new Date().getFullYear();

  const handleLogoClick = () => {
    setClicks((prev) => prev + 1);

    // Easter egg: 5 clicks triggers confetti
    if (clicks + 1 === 5) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.8 },
      });
      setClicks(0);

      // Optional: Show a fun message
      const messages = [
        "🎉 You found the secret!",
        "🎊 Developer level: Expert",
        "✨ Easter egg unlocked!",
      ];
      alert(messages[Math.floor(Math.random() * messages.length)]);
    }
  };

  return (
    <footer className="relative border-t border-white/10 glass mt-32">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left: Brand */}
          <div>
            <motion.button
              onClick={handleLogoClick}
              className="text-2xl font-bold text-gradient cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Aatreya Sabin
            </motion.button>
            <p className="mt-2 text-sm text-muted-foreground">
              Building digital experiences with code and creativity.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Home", "Projects", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <MagneticWrapper key={social.name} strength={0.5}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-2 rounded-full glass hover:bg-white/70 transition-all"
                      aria-label={social.name}
                      title={social.tooltip}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  </MagneticWrapper>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom: Copyright with fun text */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Aatreya Sabin. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Coffee className="h-4 w-4 inline" />
            <span>and</span>
            <Code className="h-4 w-4 inline" />
            <span>• No Stack Overflow was harmed</span>
          </div>
        </div>

        {/* Hidden hint for easter egg */}
        {true && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-center mt-4 text-muted-foreground font-mono"
          >
            {clicks}/5 clicks... keep going 👀
          </motion.p>
        )}
      </div>
    </footer>
  );
}
