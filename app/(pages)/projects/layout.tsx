import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore featured full stack projects built with Next.js, React, TypeScript, Node.js, and modern web technologies.",
  keywords: [
    "developer projects",
    "Next.js projects",
    "React portfolio projects",
    "full stack case studies",
    "web app development",
  ],
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Aatreya Portfolio",
    description:
      "A curated collection of production-ready projects by Sabin Paudel.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Projects | Aatreya Portfolio",
    description:
      "A curated collection of production-ready projects by Sabin Paudel.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
