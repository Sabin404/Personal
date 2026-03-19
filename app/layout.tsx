import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Azeret_Mono, Noto_Sans_Devanagari, Syne } from "next/font/google";
import "./globals.css";
import SystemBar from "@/app/components/layout/SystemBar";
import Navigation from "@/app/components/layout/Navigation";
import MouseGlow from "@/app/components/layout/MouseGlow";
import ProgressBar from "@/app/components/ui/ProgressBar";
import { cn } from "@/app/lib/utils/cn";
import BubbleLoader from "./loading";
import { LanguageProvider } from "@/app/lib/i18n/LanguageProvider";

const nepaliFont = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nepali",
  display: "swap",
});

const locationFont = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-location",
  display: "swap",
});

const timeFont = Azeret_Mono({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-time",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aatreya - Full Stack Developer",
  description:
    "Portfolio of a passionate developer building modern web experiences",
  keywords: ["Next.js", "React", "TypeScript", "Full Stack Developer"],
  authors: [{ name: "Sabin Paudel" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sabinpaudel.com.np",
    title: "Aatreya - Full Stack Developer",
    description:
      "Portfolio of a passionate developer building modern web experiences",
    siteName: "Aatreya Portfolio",
  },
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await sleep(2000); // Simulate loading for 3 seconds
  return (
    <html
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        nepaliFont.variable,
        locationFont.variable,
        timeFont.variable,
        GeistSans.className,
      )}
    >
      <body className="antialiased app-bg text-foreground overflow-x-hidden transition-colors duration-300">
        <LanguageProvider>
          <BubbleLoader />
          <div aria-hidden="true" className="lamp-shell" />
          <div aria-hidden="true" className="lamp-beam" />
          <MouseGlow />
          {/* <CursorFollower /> */}
          {/* Base dark background */}
          {/* <div className="fixed inset-0 -z-50 bg-[#0a0a0a]" /> */}
          {/* Soft radial spotlight */}
          {/* <div className="fixed inset-0 -z-40 pointer-events-none">
            <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-purple-600/20 blur-[180px] rounded-full" />
            <div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-blue-600/20 blur-[180px] rounded-full" />
          </div> */}
          {/* Animated subtle gradient overlay */}
          <div className="fixed inset-0 -z-30 opacity-40">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl animate-gradient" />
          </div>
          {/* Cursor */}
          {/* <CursorFollower /> */}
          {/* Top system bar */}
          <SystemBar />
          {/* Scroll progress */}
          <ProgressBar />
          {/* Navigation */}
          <Navigation />
          {/* Main content */}
          <main className="pt-24 relative z-10">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
