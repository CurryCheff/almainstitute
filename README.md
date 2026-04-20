# Alma Institute - School Website

A professional school website for Alma Institute, a premier private school in Mutare, Zimbabwe offering dual ZIMSEC and Cambridge curricula.

## Features

- **Modern Design**: Clean, professional interface with subtle animations
- **Responsive**: Optimized for all device sizes
- **Fast**: Built with Vite and React for optimal performance
- **Accessible**: Built with modern web standards

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with ShadCN/UI components
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **State Management**: TanStack Query

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # ShadCN/UI components
│   └── motion-primitives.tsx  # Animation utilities
├── pages/              # Page components
├── assets/             # Images and media
├── lib/                # Utilities
└── hooks/              # Custom React hooks
```

## Pages

- **Home**: Hero section, key statistics, mission, pillars, and call-to-action
- **About**: School history, headmaster's message, and values
- **Academics**: Curriculum details and subject offerings
- **Admissions**: Enrollment information
- **Contact**: Contact details and location

## Deployment

The website can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

```bash
npm run build
```

Upload the `dist/` folder contents to your hosting provider.
