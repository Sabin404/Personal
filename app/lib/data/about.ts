import { type Locale } from "@/app/lib/i18n/translations";

const profileByLocale = {
  en: {
    name: "Sabin Paudel",
    role: "Full Stack Developer",
    location: "Pokhara, Nepal 🇳🇵",
    image: "/picofme.png",
    hoverImage: "/picofmehover.png",
  },
  np: {
    name: "Sabin Paudel",
    role: "फुल स्ट्याक डेभलपर",
    location: "पोखरा, नेपाल 🇳🇵",
    image: "/picofme.png",
    hoverImage: "/picofmehover.png",
  },
} as const;

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/sabin404", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/sabin-paudel-702580254", icon: "linkedin" },
  { name: "Facebook", url: "https://facebook.com/paudelsabin0", icon: "facebook" },
  { name: "Instagram", url: "https://instagram.com/sabinpaudel_", icon: "instagram" },
];

const introductionByLocale = {
  en: `
I'm a passionate full-stack developer who loves building fast,
modern, and visually stunning web applications.

I enjoy turning complex ideas into simple, beautiful,
and intuitive digital experiences.

Currently focused on React, Next.js, Node.js, and system design.
`,
  np: `
म छिटो, आधुनिक र आकर्षक वेब एप्लिकेसन बनाउन रुचाउने
एक उत्साही फुल-स्ट्याक डेभलपर हुँ।

जटिल विचारलाई सरल, सुन्दर र सहज
डिजिटल अनुभवमा रूपान्तरण गर्न मलाई मन पर्छ।

हाल React, Next.js, Node.js र system design मा केन्द्रित छु।
`,
} as const;

const workExperienceByLocale = {
  en: [
    {
      title: "Frontend Intern",
      company: "YHHITS",
      period: "2026 — Present",
      description:
        "Working on real-world React applications, UI systems, and performance optimization.",
    },
  ],
  np: [
    {
      title: "फ्रन्टेन्ड इन्टर्न",
      company: "YHHITS",
      period: "2026 — हालसम्म",
      description:
        "वास्तविक React एप्लिकेसन, UI सिस्टम र performance optimization मा काम गर्दै।",
    },
  ],
} as const;

const studiesByLocale = {
  en: [
    {
      title: "Bachelor in CSIT",
      school: "Prithivi Narayan Campus",
      info: "7th Semester Running",
    },
    {
      title: "+2",
      school: "Amarsingh Higher Secondary School",
      info: "GPA: 3.26",
    },
    {
      title: "SLC",
      school: "Jana Adarsha Secondary School",
      info: "GPA: 3.90",
    },
  ],
  np: [
    {
      title: "Bachelor in CSIT",
      school: "Prithivi Narayan Campus",
      info: "७औं सेमेस्टर",
    },
    {
      title: "+2",
      school: "Amarsingh Higher Secondary School",
      info: "GPA: 3.26",
    },
    {
      title: "SLC",
      school: "Jana Adarsha Secondary School",
      info: "GPA: 3.90",
    },
  ],
} as const;

const technicalSkills = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
  backend: ["Node.js", "Express", "MongoDB"],
  tools: ["Git", "Figma", "Postman", "Linux"],
} as const;

export function getAboutData(locale: Locale) {
  const safeLocale = locale === "np" ? "np" : "en";
  const workExperience = workExperienceByLocale[safeLocale];

  return {
    profile: profileByLocale[safeLocale],
    socialLinks,
    introduction: introductionByLocale[safeLocale],
    workExperience:
      workExperience.length > 0 ? workExperience : workExperienceByLocale.en,
    studies: studiesByLocale[safeLocale],
    technicalSkills,
  };
}
