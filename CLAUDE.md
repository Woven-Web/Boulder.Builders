# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Boulder Builders is a community-focused landing page for Boulderites gathering to build solutions for their city. The site emphasizes two core principles: "Give First" and "Start Small". It serves as an entry point to invite people to in-person gatherings rather than a full platform.

## Commands

### Development
```bash
npm install        # Install dependencies
npm run dev        # Start dev server (default: http://localhost:5173)
npm run build      # Build for production (outputs to dist/)
npm run preview    # Preview production build locally
```

## Architecture

This is a single-page React application built with:
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **React 18** - UI framework
- **CSS** - Custom styling with CSS variables for theming

The application structure is intentionally simple:
- `src/App.tsx` - Single component containing all sections
- `src/App.css` - All styling with Boulder-inspired gradients and animations
- `src/index.css` - Global styles and CSS variables

## Key Content Areas

The landing page contains these sections in order:
1. **Hero** - Main CTA with next meetup date/time
2. **Principles** - Give First, Start Small
3. **What's Emerging** - Placeholder for future community projects
4. **How We Build** - Features Communal* Design philosophy
5. **Join** - Secondary CTA to Luma calendar
6. **Footer** - Minimal links

## Important Notes

- The next meetup date is hardcoded in App.tsx line 23
- All CTAs link to https://lu.ma/boulder-builders
- The "Communal* Design" links to https://www.localasterisk.agency/post/the-who-behind-the-why-work
- The site uses Boulder-inspired color gradients (sunrise/sky colors)
- Mobile responsive with CSS Grid and Flexbox

## Deployment

Build outputs to `dist/` directory. Can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).