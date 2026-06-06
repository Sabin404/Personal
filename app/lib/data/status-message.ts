export const STATUS_MESSAGES = [
  "Currently: Teaching computers to think 🤖",
  "Status: Overthinking variable names again",
  "Currently: Debugging reality.exe",
  "Status: Converting ☕ into <code />",
  "Currently: Asking 'Why?' for the 47th time",
  "Status: Building things that scale (hopefully)",
  "Currently: Making pixels do my bidding",
  "Status: Arguing with TypeScript (it's winning)",
  "Currently: Refactoring yesterday's 'genius' code",
  "Status: Somewhere between MVP and perfection",
] as const

export type StatusMessage = typeof STATUS_MESSAGES[number]