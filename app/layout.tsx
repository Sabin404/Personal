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
  metadataBase: new URL("https://sabinpaudel.com.np"),
  title: {
    default: "Aatreya | Sabin Paudel - Full Stack Developer Portfolio",
    template: "%s | Aatreya Portfolio",
  },
  description:
    "Portfolio of Sabin Paudel, a full stack developer in Nepal building fast, modern, SEO-friendly web apps with Next.js, React, TypeScript, Node.js, and MongoDB.",
  applicationName: "Aatreya Portfolio",
  authors: [{ name: "Sabin Paudel", url: "https://sabinpaudel.com.np" }],
  creator: "Sabin Paudel",
  publisher: "Sabin Paudel",
  category: "technology",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Sabin Paudel",
    "Aatreya",
    "full stack developer",
    "full stack developer portfolio",
    "web developer Nepal",
    "frontend developer",
    "backend developer",
    "Next.js developer",
    "React developer",
    "TypeScript developer",
    "Node.js developer",
    "MongoDB developer",
    "JavaScript developer",
    "portfolio website",
    "software engineer portfolio",
    "SEO friendly web development",
    "modern web apps",
    "Pokhara developer",
    "hire web developer",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/picofme.png", type: "image/png", sizes: "32x32" },
      { url: "/picofme.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: ["/picofme.png"],
    apple: [{ url: "/picofme.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Aatreya | Sabin Paudel - Full Stack Developer Portfolio",
    description:
      "Explore projects, skills, and experience of Sabin Paudel, a full stack developer building high-performance digital products.",
    siteName: "Aatreya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aatreya | Sabin Paudel - Full Stack Developer Portfolio",
    description:
      "Full stack developer portfolio featuring modern web projects, technical skills, and contact details.",
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
  await sleep(2000);
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
