import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sabin Paudel's background, work experience, education, and technical skills as a full stack developer.",
  keywords: [
    "about Sabin Paudel",
    "developer experience",
    "full stack skills",
    "software engineer profile",
    "web developer background",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Aatreya Portfolio",
    description:
      "Professional profile, technical stack, and career journey of Sabin Paudel.",
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About | Aatreya Portfolio",
    description:
      "Professional profile, technical stack, and career journey of Sabin Paudel.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
