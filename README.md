# ANEEB UR REHMAN — Full Stack AI Engineer 👨‍💻✨

![React](https://img.shields.io/badge/React-Frontend-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-TypeSafe-blue?logo=typescript) ![Vite](https://img.shields.io/badge/Vite-Build-purple?logo=vite) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38BDF8?logo=tailwindcss) ![Framer Motion](https://img.shields.io/badge/FramerMotion-Animations-black?logo=framer) ![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel)

Production-ready AI engineer portfolio built to showcase intelligent systems, full-stack engineering, and modern product development.

---

## 🌐 Live Demo

🚀 Portfolio Website: [View Live Portfolio](https://portfolio-six-nu-20.vercel.app/)

---

## One-line summary

- I build AI-powered products and full-stack systems that turn raw data into production features. This repository is the website source that showcases those projects and the engineering work behind them.

---

## Key facts (quick)

- Frontend: React + Vite + TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Edit content in: `src/app/components/` (Hero.tsx, About.tsx, Projects.tsx, Contact.tsx)
- Contact: `dev.aneeb.rehman@gmail.com`

---

## Scope & purpose (repo-specific)

- This repository contains the portfolio website source only — the code you deploy to present projects, case studies, and professional contact information.
- It does not include full ML training code, large datasets, or model checkpoints. If a project requires deep ML artifacts, link to a dedicated project repo for those materials.

---

## Screenshots / Preview (replace with real assets)

Add high-quality screenshots to `src/assets/` and reference them here. Recruiters prefer visual proof.

| Desktop (Hero) | Projects | Mobile |
|---:|:---:|:---:|
| ![Hero](src/assets/hero-screenshot.png) | ![Projects](src/assets/projects-screenshot.png) | ![Mobile](src/assets/mobile-screenshot.png) |

---

## Where to edit content (quick paths)

- Hero / headline: `src/app/components/Hero.tsx`
- About / bio: `src/app/components/About.tsx`
- Projects list & cards: `src/app/components/Projects.tsx` (array of project objects)
- Contact form and CTA: `src/app/components/Contact.tsx`
- Images & screenshots: `src/assets/`
- Global styles & tokens (Tailwind): `tailwind.config.mjs`, `src/styles/`

Tip: Update `Projects.tsx` `demo` and `github` fields so the project buttons link to live demos and GitHub.

---

## Customization (for maintainers)
## Final notes

This README is tailored for a portfolio website repository: concise, visual, and focused on the site content and customization. If you want additional repo tooling (CI, preview deploys, editor-friendly content files), I can add a lightweight GitHub Actions workflow and a `src/data/` JSON for non-technical editors.

Made for recruiters and technical leads — clear, credible, and production-oriented.

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
- This repository uses Vite for a fast development loop. TypeScript is enabled across the front-end.

---

## Deployment (recommended)

Frontend: deploy on Vercel (recommended) or Netlify. Connect your GitHub repo and set build command to `npm run build`.

Checklist before deploying:

1. Update `Projects.tsx` with real `demo` and `github` links.
2. Add screenshots to `src/assets/` and reference them in this README.
3. Set environment variables (if you integrate a contact endpoint or other services).

---

## Tech stack (accurate for this repo)

- Frontend: React + Vite + TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Optional backend: minimal Node/Python endpoints (if you add contact form handling)

---

## Screenshots / Preview (replace with real assets)

Replace placeholder images in `src/assets/` with the following recommended files:

- `src/assets/hero-screenshot.png` — Desktop hero section (1920×1080 recommended)
- `src/assets/projects-screenshot.png` — Projects grid (1200×800 recommended)
- `src/assets/mobile-screenshot.png` — Mobile view (375×812 recommended)

Add these images and commit them to improve the repo's presentation.

---

## Contact

**ANEEB UR REHMAN — Full Stack AI Engineer**  
Email: dev.aneeb.rehman@gmail.com  
GitHub: https://github.com/<your-handle>  
LinkedIn: https://www.linkedin.com/in/<your-handle>

Replace placeholders with live links.

---
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
