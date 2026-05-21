
  # ANEEB UR REHMAN — Full Stack AI Engineer 👨‍💻✨

  Futuristic Full Stack AI Engineer Portfolio — Production-ready personal brand website for AI systems engineering.

  ---

  ## Project Overview

  This repository is a premium, production-focused portfolio website that presents the engineering identity of **ANEEB UR REHMAN** — *Full Stack AI Engineer*. The site is designed to showcase real-world systems engineering: OCR and YOLO pipelines, model integration, scalable web backends, and polished frontend experiences with a dark, futuristic aesthetic and glassmorphism UI.

  Why this exists:
  - Personal branding that reads like a product-engineering portfolio (not an academic résumé).
  - A living demonstration of full-stack, AI, and deployment capabilities.
  - Clear signal to recruiters, clients, and partners that the author ships production systems — not demos.

  What it demonstrates:
  - System-level AI engineering (data collection, preprocessing, model training, inference, validation).
  - Production web engineering (frontend, backend, APIs, DB, deployment).
  - Product thinking and research-driven development (real-world constraints, robustness, scale).

  ---

  ## Portfolio Goals

  - Showcase production-ready AI systems instead of toy projects.
  - Demonstrate full-stack capabilities: frontend, backend, data, models, and deployment.
  - Communicate engineering process: data → model → API → product.
  - Build recruiter and client trust with clear project stories and technical depth.
  - Maintain a consistent, premium visual identity and UX.

  ---

  ## Features

  - Dark, futuristic theme with subtle glassmorphism and premium spacing.
  - Responsive layout and mobile-first behavior.
  - Animated sections driven by motion primitives (smooth entrance/scroll animations).
  - Interactive UI components (buttons, modals, project cards, form).
  - Polished featured-project cards with hover states, badges, and CTA buttons.
  - Dedicated Research / AI Work section for technical depth (OCR pipelines, dataset work).
  - Contact section with a professional CTA and working contact form.
  - Performance-conscious asset handling and lazy-loaded components.
  - SEO-friendly structure and fast-first paint focus.

  Key highlights:
  - Modern UI: Tailwind + design tokens for spacing/typography.
  - Motion system: orchestrated animated entrances and hover effects.
  - Premium project storytelling with problem → approach → impact structure.

  ---

  ## Tech Stack

  Badges
  [![React](https://img.shields.io/badge/React-17.x-blue?logo=react)](https://reactjs.org)  
  [![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js)](https://nextjs.org)  
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org)  
  [![Tailwind](https://img.shields.io/badge/TailwindCSS-3.x-teal?logo=tailwindcss)](https://tailwindcss.com)  
  [![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org)  
  [![Python](https://img.shields.io/badge/Python-3.x-yellow?logo=python)](https://www.python.org)  
  [![FastAPI](https://img.shields.io/badge/FastAPI-0.95-lightblue?logo=fastapi)](https://fastapi.tiangolo.com/)  
  [![Supabase](https://img.shields.io/badge/Supabase-1.x-6cc24a?logo=supabase)](https://supabase.com)  
  [![Postgres](https://img.shields.io/badge/PostgreSQL-14.0-blue?logo=postgresql)](https://www.postgresql.org)  
  [![Vercel](https://img.shields.io/badge/Vercel-deploy-black?logo=vercel)](https://vercel.com)  
  [![YOLO / OCR](https://img.shields.io/badge/YOLO--OCR-models-orange)](https://github.com/AlexeyAB/darknet)

  Why this stack:
  - Scalability: modular Node/Python services, PostgreSQL for relational scale, Supabase for realtime primitives.
  - Maintainability: TypeScript across frontend, clear folder separation, typed contracts for APIs.
  - Performance: Vite/Next builds, edge-friendly deployment, progressive enhancement for animations and assets.
  - Developer productivity: modern DX with Tailwind, Framer Motion, TypeScript, and a small set of battle-tested services.

  ---

  ## Architecture & Development Workflow

  High-level architecture:
  - Frontend (React + Vite/Next.js): component-driven UI, Tailwind-based tokens, motion orchestration via Framer Motion.
  - Backend (Node / Python): lightweight API services (Express or FastAPI) for model inference, auth, and data workflows.
  - Data & DB: PostgreSQL for transactional data, Supabase for realtime functionality, object storage for assets and annotated datasets.
  - AI components: Python services for preprocessing, YOLO segmentation, OCR pipeline orchestration, model training and validation.

  Developer workflow (senior-engineer focused):
  1. Feature branch: small, scoped branches with feature flags for new AI integrations.
  2. Modular services: each API and model runner isolated in its own folder and Dockerfile.
  3. Contract-first APIs: TypeScript clients generated from OpenAPI where possible.
  4. Deploy: Vercel for frontend, Render/Vercel/Cloud Run for backend, scheduled training jobs in managed compute for models.

  # ANEEB UR REHMAN — Full Stack AI Engineer 👨‍💻✨

  Production-ready personal brand website built with React + Vite + TypeScript, showcasing professional projects, engineering process, and a premium dark-futuristic design.

  ---

  ## Quick Summary

  - Purpose: a professional portfolio website for ANEEB UR REHMAN that highlights production systems, full-stack engineering, and product-focused AI work.
  - Stack: React, Vite, TypeScript, Tailwind CSS, Framer Motion.
  - Edit content in: `src/app/components/` (Hero.tsx, About.tsx, Projects.tsx, Contact.tsx).
  - Contact: `dev.aneeb.rehman@gmail.com`

  ---

  ## What this repo is (and is not)

  - This repository is the website source — a polished, responsive frontend with a content-driven structure designed to present an engineer's portfolio.
  - It is not an ML project repo (no dataset/model training instructions belong here). If you include ML case studies, link to dedicated repos for data and model details.

  ---

  ## Where to edit content (fast edits)

  - Hero text and tagline: `src/app/components/Hero.tsx`
  - About / bio: `src/app/components/About.tsx`
  - Projects data & cards: `src/app/components/Projects.tsx` (array of project objects)
  - Contact settings / form: `src/app/components/Contact.tsx`
  - Profile image & assets: `src/assets/` (replace `profile.jpeg`)
  - Global styles & tokens: `src/styles/` and `postcss.config.mjs` / `tailwind.config.mjs`

  Tip: Projects are defined in `Projects.tsx` as an array (title, description, tech, demo, github). Update the `demo` and `github` fields to point to live demos and repos.

  ---

  ## Live demo & screenshots

  Add your deployed link here (replace placeholder once deployed):

  - Live site: https://your-domain.example (update in README after deploying)

  Screenshots (add images to `src/assets/` and reference them below):

  ![Hero screenshot](src/assets/hero-screenshot.png)
  ![Projects screenshot](src/assets/projects-screenshot.png)

  Include real demo URLs in `src/app/components/Projects.tsx` so CTA buttons link to live demos and GitHub.

  ---

  ## How to customize content (step-by-step)

  1. Hero
     - Open `src/app/components/Hero.tsx` and update the headline, subheadline, and CTA text.
  2. About
     - Edit `src/app/components/About.tsx` for your professional summary. Keep it concise and product-focused.
  3. Projects
     - In `src/app/components/Projects.tsx` update the `projects` array:
       - `title`, `description`, `tech` (array), `demo` (URL), `github` (URL).
  4. Contact
     - Replace the email and links in `src/app/components/Contact.tsx`. The form posts to a local endpoint or third-party service — check the component for integration notes.
  5. Images
     - Replace `src/assets/profile.jpeg` and any screenshot placeholders.
  6. Styling
     - Global tokens live in `src/styles/` and Tailwind config (`tailwind.config.mjs`). Adjust scales or colors via CSS variables or Tailwind theme overrides.

  ---

  ## Development (local)

  Prereqs: Node 18+, npm

  ```bash
  # Install
  npm install

  # Start dev server
  npm run dev

  # Build
  npm run build

  # Preview
  npm run preview
  ```

  Notes:
  - The site is built with Vite for a fast dev loop. The project uses TypeScript and Tailwind CSS.
  - If you add backend endpoints (contact form), run those services separately and update `Contact.tsx` with the endpoint URL.

  ---

  ## Deployment (recommended)

  1. Frontend: Vercel (recommended) or Netlify. Connect the GitHub repo and set the build command to `npm run build`.
  2. Environment variables: add any API endpoints or keys in the deployment dashboard (do not commit secrets).
  3. Optional backend: host with Render, Cloud Run, or a managed service. Keep inference/model services private and authenticated.

  Quick Vercel steps:
  ```text
  - Create a Vercel project and connect your repository
  - Set build command: npm run build
  - Set output directory (if asked): dist or leave as default for Vite
  - Add environment variables in Vercel dashboard
  - Deploy
  ```

  ---

  ## Design & Content Guidelines (branding)

  - Keep copy product-focused and concise.
  - Project cards should use the 'problem → approach → impact' format.
  - Maintain consistent spacing and typography via Tailwind tokens.
  - Prefer screenshots and live links over long model or dataset descriptions in this repo.

  ---

  ## Screenshots & Live Link Checklist (before sharing)

  1. Update `Projects.tsx` with `demo` and `github` links.
  2. Replace placeholder images in `src/assets/` with real screenshots.
  3. Update the Live site link above with your Vercel/Netlify URL.

  ---

  ## Tech stack (accurate for this repo)

  - Frontend: React + Vite + TypeScript
  - Styling: Tailwind CSS
  - Animations: Framer Motion
  - Optional backend: Node.js or Python (FastAPI) for APIs and contact endpoints

  ---

  ## Contributing & Notes

  - This repo is structured for a single-author portfolio. Contributions are welcome if they improve layout, accessibility, or performance.
  - Use branches for content updates and open a PR for major layout changes.

  ---

  ## Contact

  **ANEEB UR REHMAN — Full Stack AI Engineer**  
  Email: dev.aneeb.rehman@gmail.com  
  GitHub: https://github.com/<your-handle>  
  LinkedIn: https://www.linkedin.com/in/<your-handle>

  Replace `<your-handle>` with real profile links in the README after publishing.

  ---

  If you'd like, I can also:
  - wire up GitHub Actions for lint/type checks and preview deploys,
  - add a ready-to-use Vercel configuration,
  - or generate a short 'how to update content' guide inside the `src/data/` folder for non-technical editors.

  ---

  Made to present production-quality projects and engineering workflows — concise, recruiter-friendly, and developer-ready.
