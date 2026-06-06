export const tooltips = {
  github: "Where I store my bugs... I mean, code ",
  linkedin: "Professional me (I promise I'm fun) ",
  twitter: "Hot takes and cold coffee ",
  email: "Let's build something cool together ",
  resume: "My life in PDF format 📄",
  contact: "I don't bite (usually) ",
  hire: "Warning: May solve problems creatively",
  facebook: "Daily dose of nostalgia & drama ",
  instagram: "Reels, vibes & fake perfection ",
} as const

export type TooltipKey = keyof typeof tooltips