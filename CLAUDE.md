# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Jafar Sharif Shaik, deployed via GitHub Pages. Built with Astro, React, Tailwind CSS, and Framer Motion.

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321

# Build
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build
```

## Architecture

**Framework:** Astro 4.x with React islands for interactive components

**Key Directories:**
- `src/pages/` - Astro pages (index.astro is the main page)
- `src/components/` - UI components (Astro + React)
- `src/layouts/` - Base layout with dark mode support
- `src/styles/` - Global CSS with Tailwind
- `public/` - Static assets (images, resume PDF)

**Component Structure:**
```
src/components/
├── Hero/TerminalHero.tsx      # React - animated terminal intro
├── Skills/TechGrid.tsx        # React - tech stack grid with animations
├── Skills/CertificationBadges.astro
├── Experience/ExperienceTimeline.astro
├── About/AboutSection.astro
├── Contact/ContactSection.astro
└── common/
    ├── Navigation.astro       # With dark mode toggle
    └── Footer.astro
```

**Styling:**
- Tailwind CSS with custom config (tailwind.config.js)
- Dark mode via `class` strategy
- Custom component classes in `src/styles/globals.css`

## Key Patterns

- React components use `client:load` or `client:visible` directives for hydration
- Dark mode toggle stores preference in localStorage
- Framer Motion for animations in React components
- Path aliases configured: `@/` maps to `src/`
