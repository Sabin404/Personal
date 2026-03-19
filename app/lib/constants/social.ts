import { Github, Linkedin, Mail, Instagram, Facebook } from 'lucide-react'

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/sabin404',
    icon: Github,
    tooltip: "Where I store my bugs... I mean, code",
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sabin-paudel-188795280/',
    icon: Linkedin,
    tooltip: "Professional me (I promise I'm fun)",
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/paudelsabin0',
    icon: Facebook,
    tooltip: "Hot takes and cold coffee ☕",
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/sabinpaudel_',
    icon: Instagram,
    tooltip: "Hot takes and cold coffee ☕",
  },
  {
    name: 'Email',
    href: 'mailto:paudelsabin0@gmail.com',
    icon: Mail,
    tooltip: "Let's build something cool together",
  },
] as const