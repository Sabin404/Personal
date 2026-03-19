# Aatreya Portfolio

A bold, motion-rich personal portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

This project showcases a full-stack developer profile with:
- immersive UI animations
- bilingual content (English + Nepali)
- interactive mini-games on the home page
- modern project and contact experiences

## Live Site

- Production: https://sabinpaudel.com.np

## Highlights

- App Router architecture with reusable sections and feature components
- EN/NP language toggle with client-side persistence (`localStorage`)
- Dynamic, animated pages powered by Framer Motion
- Three mini-games on the home page:
	- Arcade Aim Challenge
	- Pattern Memory Rush
	- Fun Astrology Oracle
- Rich portfolio sections for about, projects, and contact
- Typed data-driven content for easier maintenance

## Tech Stack

- Framework: Next.js 16 (App Router)
- Runtime/UI: React 19, React DOM 19
- Language: TypeScript
- Styling: Tailwind CSS 4
- Animation: Framer Motion
- Icons: Lucide React
- Effects: canvas-confetti
- Date/Time utilities: date-fns
- Linting: ESLint 9 + eslint-config-next

## Routes

- `/` - Hero + mini-games hub
- `/about` - Profile, experience, studies, skills
- `/projects` - Featured project cards
- `/contact` - Contact and social links

## Project Structure

```text
app/
	layout.tsx                # Global shell, metadata, providers
	page.tsx                  # Home page composition
	loading.tsx               # Custom animated loader
	(pages)/
		about/page.tsx
		projects/page.tsx
		contact/page.tsx
	components/
		sections/               # Large page sections (Hero, etc.)
		features/               # Home mini-game components
		layout/                 # System bar, navigation, footer, effects
		ui/                     # Reusable UI primitives
	lib/
		constants/              # Static constants (location, socials)
		data/                   # About/profile/tooltips/status data
		hooks/                  # Time and mouse hooks
		i18n/                   # Language provider + translation dictionary
		utils/                  # Utility helpers
	types/                    # Shared app-level types
public/
	projects/                 # Project images
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm (or your preferred package manager)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build optimized production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Customization Guide

### Update Personal Info

- `app/lib/data/about.ts` - profile, intro, studies, work experience
- `app/lib/constants/location.ts` - city/country/timezone values
- `app/lib/constants/social.ts` - social links and labels

### Update Projects

- `app/types/project.ts` - localized project list (`en` + `np`)

### Update Translations

- `app/lib/i18n/translations.ts` - all translation strings
- `app/lib/i18n/LanguageProvider.tsx` - language context/state handling

### Update Home Mini-Games

- `app/components/features/HomeArcadeGame.tsx`
- `app/components/features/HomeMemoryGame.tsx`
- `app/components/features/HomeFunAstrologyGame.tsx`

## Internationalization (i18n)

This project uses a lightweight custom i18n setup.

- Supported locales: `en`, `np`
- Language is stored in `localStorage` under the key `language`
- UI text is accessed via `useLanguage()` in client components

When adding new UI text:
1. Add keys for both `en` and `np` in `app/lib/i18n/translations.ts`.
2. Consume with `const { t } = useLanguage()`.
3. For localized data sets, follow the existing `getAboutData(locale)` / `getProjects(locale)` pattern.

## Notes

- No environment variables are currently required for local development.
- The project enables React Compiler in `next.config.ts`.
- Path alias `@/*` maps to the repository root (configured in `tsconfig.json`).

## Deployment

The app can be deployed on Vercel or any Node-compatible hosting.

Recommended flow:
1. Push repository to GitHub.
2. Import project in Vercel.
3. Build command: `npm run build`
4. Start command: `npm run start` (if required by platform)

## License

No license file is currently defined in this repository. Add a `LICENSE` file if you plan to open-source it publicly.
