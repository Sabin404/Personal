import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sabin Paudel for full stack development, freelance projects, collaborations, and web app consulting.",
  keywords: [
    "contact developer",
    "hire full stack developer",
    "freelance web developer",
    "web development consultation",
    "Sabin Paudel contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Aatreya Portfolio",
    description:
      "Get in touch with Sabin Paudel for web development and collaboration opportunities.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact | Aatreya Portfolio",
    description:
      "Get in touch with Sabin Paudel for web development and collaboration opportunities.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
