import { type Project } from "@/app/types";
import { type Locale } from "@/app/lib/i18n/translations";

const projectsByLocale: Record<Locale, Project[]> = {
  en: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "Full-stack online shopping platform with admin dashboard",
      longDescription:
        "Built a complete e-commerce solution with Reactjs, featuring real-time inventory management, payment integration, and admin dashboard.",
      image: "/projects/ecommerce.png",
      tags: ["React.js", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Sabin404/SaShop",
      featured: true,
    },
    {
      id: "2",
      title: "Zone XVI website",
      description: "A website for a community",
      longDescription:
        "Designed and developed a vibrant community website for Zone XVI, featuring event management, club profiles, and interactive forums.",
      image: "/projects/projectone.png",
      tags: ["React"],
      liveUrl: "https://zonexvi.vercel.app",
      githubUrl: "https://github.com/Sabin404/zonexvi",
      featured: true,
    },
    {
      id: "3",
      title: "Digital signature platform",
      description: "Secure and user-friendly digital signature solution",
      longDescription:
        "Created a digital signature platform using Reactjs, enabling users to sign documents securely with features like multi-factor authentication and audit trails.",
      image: "/projects/projecttwo.png",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://digital-signature.vercel.app",
      githubUrl: "https://github.com/Sabin404/digital-signature",
      featured: false,
    },
    {
      id: "4",
      title: "Weather Dashboard",
      description: "Beautiful weather forecast application",
      longDescription:
        "Designed an intuitive weather app with location-based forecasts, weather maps, and historical data visualization.",
      image: "/projects/weather.png",
      tags: ["React", "TypeScript", "Weather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: false,
    },
  ],
  np: [
    {
      id: "1",
      title: "ई-कमर्स प्लेटफर्म",
      description: "एडमिन ड्यासबोर्ड सहित फुल-स्ट्याक अनलाइन सपिङ प्लेटफर्म",
      longDescription:
        "Reactjs प्रयोग गरेर real-time inventory, payment integration र admin dashboard सहित पूर्ण ई-कमर्स समाधान बनाइयो।",
      image: "/projects/ecommerce.png",
      tags: ["React.js", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/Sabin404/SaShop",
      featured: true,
    },
    {
      id: "2",
      title: "Zone XVI वेबसाइट",
      description: "समुदायका लागि तयार गरिएको वेबसाइट",
      longDescription:
        "Zone XVI समुदायका लागि event management, club profiles र interactive forums सहितको वेबसाइट डिजाइन र विकास गरियो।",
      image: "/projects/projectone.png",
      tags: ["React"],
      liveUrl: "https://zonexvi.vercel.app",
      githubUrl: "https://github.com/Sabin404/zonexvi",
      featured: true,
    },
    {
      id: "3",
      title: "डिजिटल हस्ताक्षर प्लेटफर्म",
      description: "सुरक्षित र प्रयोगमैत्री डिजिटल सिग्नेचर समाधान",
      longDescription:
        "Reactjs मा आधारित यो प्लेटफर्मले multi-factor authentication र audit trails सहित सुरक्षित दस्तावेज हस्ताक्षर सुविधा दिन्छ।",
      image: "/projects/projecttwo.png",
      tags: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://digital-signature.vercel.app",
      githubUrl: "https://github.com/Sabin404/digital-signature",
      featured: false,
    },
    {
      id: "4",
      title: "मौसम ड्यासबोर्ड",
      description: "सुन्दर मौसम पूर्वानुमान एप्लिकेसन",
      longDescription:
        "स्थान-आधारित पूर्वानुमान, मौसम नक्सा र ऐतिहासिक डेटा दृश्यकरण सहित सहज मौसम एप डिजाइन गरियो।",
      image: "/projects/weather.png",
      tags: ["React", "TypeScript", "Weather API", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: false,
    },
  ],
};

export function getProjects(locale: Locale = "en") {
  return projectsByLocale[locale];
}

export function getFeaturedProjects(locale: Locale = "en") {
  return projectsByLocale[locale].filter((p) => p.featured);
}

export function getProjectById(id: string, locale: Locale = "en") {
  return projectsByLocale[locale].find((p) => p.id === id);
}