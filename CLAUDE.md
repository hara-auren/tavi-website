# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- **Run development server**: `npm run dev` - Starts Vite dev server
- **Build for production**: `npm run build` - Runs TypeScript compiler and builds with Vite
- **Preview production build**: `npm run preview` - Preview built app on port 5173

### Package Management
- **Install dependencies**: `npm install`
- **Add new dependency**: `npm install <package-name>`
- **Add dev dependency**: `npm install -D <package-name>`

## Project Architecture

This is a React + TypeScript + Vite single-page application for a luxury brand waitlist landing page.

### Key Technologies
- **React 18** with TypeScript
- **Vite** for build tooling and dev server
- **React Router DOM** for client-side routing
- **TanStack Query** for server state management
- **Supabase** for backend services (waitlist storage)
- **Tailwind CSS** with class-variance-authority and tailwind-merge for styling
- **Radix UI** components (Toast, Tooltip)
- **Lucide React** for icons

### Core Structure
- `/src/App.tsx` - Main app component with routing and global providers
- `/src/pages/` - Page components (Index, NotFound)
- `/src/components/` - Reusable components
  - `/ui/` - Shadcn-style UI components
- `/src/lib/` - Utilities and external service integrations
  - `supabase.ts` - Supabase client configuration with environment variable checks
  - `utils.ts` - Tailwind class merging utility

### Environment Variables
Required for Supabase integration:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

### Component Pattern
- Uses shadcn/ui component pattern with Radix UI primitives
- Components in `/src/components/ui/` are typically utility components
- Business logic components live in `/src/components/`
- Path aliases configured: `@/` maps to `/src/`

### Current Features
- Email waitlist signup with validation
- Supabase integration for storing emails (gracefully handles missing config)
- Toast notifications for user feedback
- Responsive design with Tailwind CSS
- Custom magic cursor effect