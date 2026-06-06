import type { Metadata } from "next";
import { GeistMono, GeistSans } from "geist/font";
import { Azeret_Mono, Noto_Sans_Devanagari, Syne } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import SystemBar from "@/app/components/layout/SystemBar";
import Navigation from "@/app/components/layout/Navigation";
import MouseGlow from "@/app/components/layout/MouseGlow";
import ProgressBar from "@/app/components/ui/ProgressBar";
import BubbleLoader from "./loading";
import { LanguageProvider } from "@/app/lib/i18n/LanguageProvider";
import { cn } from "@/app/lib/utils/cn";

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
    default: "Sabin Paudel | Frontend Developer",
    template: "%s | Sabin Paudel",
  },

  description:
    "Sabin Paudel is a Frontend Developer from Nepal specializing in React, Next.js, TypeScript, Tailwind CSS, and modern web application development.",

  applicationName: "Sabin Paudel Portfolio",
  authors: [{ name: "Sabin Paudel", url: "https://sabinpaudel.com.np" }],
  creator: "Sabin Paudel",
  publisher: "Sabin Paudel",
  category: "technology",
  referrer: "origin-when-cross-origin",

  keywords: [
    "Sabin Paudel",
    "Sabin Paudel portfolio",
    "Sabin Paudel frontend developer",
    "Frontend Developer Nepal",
    "Frontend Developer Pokhara",
    "React Developer Nepal",
    "Next.js Developer Nepal",
    "TypeScript Developer",
    "JavaScript Developer",
    "Tailwind CSS Developer",
    "Web Developer Nepal",
    "Portfolio Website",
    "Modern Web Applications",
    "SEO Friendly Web Development",
  ],

  verification: {
    google: "E3nFzfLYn6siE0KzcOArfuiHbQsrY84dnWoNE7YmDMk",
  },

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
    title: "Sabin Paudel | Frontend Developer",
    description:
      "Explore the portfolio, projects, and skills of Sabin Paudel, a Frontend Developer from Nepal building modern web applications with React, Next.js, and TypeScript.",
    siteName: "Sabin Paudel Portfolio",
    images: [
      {
        url: "/picofme.png",
        width: 1200,
        height: 630,
        alt: "Sabin Paudel - Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sabin Paudel | Frontend Developer",
    description:
      "Frontend Developer from Nepal specializing in React, Next.js, TypeScript, and modern web application development.",
    images: ["/picofme.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

          <div className="fixed inset-0 -z-30 opacity-40">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl animate-gradient" />
          </div>

          <SystemBar />
          <ProgressBar />
          <Navigation />

          <main className="pt-24 relative z-10">{children}</main>
        </LanguageProvider>

        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="58e33305-1dd3-49a3-81a4-bc7be9f7a634"
        />
      </body>
    </html>
  );
}