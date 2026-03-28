# Tejasvi Portfolio

Personal developer portfolio built with React + Vite + Tailwind CSS.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check (`eslint src --ext js,jsx`)
- `npm run preview` — Preview production build

## Tech Stack

- React 18, Vite 4, Tailwind CSS 3, React Router v6
- EmailJS for contact form (env vars: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`)
- AOS for scroll animations, react-syntax-highlighter for code display
- Font: Fira Code (monospace)

## Project Structure

```
src/
├── main.jsx                         # Entry point
├── index.css                        # Tailwind directives + global styles
├── router/RouterProvider.jsx        # Route definitions
├── layouts/Main.jsx                 # Root layout (Navbar + Outlet + Footer)
├── pages/
│   ├── Home/Home.jsx                # Landing page with snake game
│   ├── About/                       # About section with nested views
│   │   ├── ProfessionalInfo/        # Skills, experience
│   │   └── PersonalInfo/            # Bio, education
│   ├── Projects/                    # Project listing with category filters
│   │   ├── Projects.jsx             # Main project grid
│   │   ├── Project.jsx              # Project card (desktop)
│   │   ├── ProjectCard.jsx          # Project card (mobile)
│   │   ├── ModalProject.jsx         # Project detail modal
│   │   └── ProjectCaseStudy.jsx     # Case study page (/projects/:slug)
│   ├── Blog/                        # Blog listing and individual posts
│   │   ├── Blog.jsx                 # Blog listing page
│   │   └── BlogPost.jsx             # Individual blog post
│   ├── Contact/                     # Email form + social links
│   └── Shared/Navbar, Footer
├── components/                      # Reusable: SnakeGame, ActiveLink, ArrowButtons, GitHubRepos
└── assets/                          # Images, audio files
public/
├── projectsData.json                # Project entries (images, techs, links)
├── blogData.json                    # Blog posts
└── project/, techs/                 # Static images
```

## Routes

- `/` — Home
- `/about/professional-info` — About (default, redirects from `/about`)
- `/about/personal-info` — Personal info
- `/projects` — Projects
- `/projects/:slug` — Project case study
- `/blog` — Blog listing
- `/blog/:slug` — Individual blog post
- `/contact` — Contact
- `*` — Catch-all → Home

## Conventions

- **Components**: Functional components only, PascalCase filenames (`.jsx`)
- **State**: Local `useState`/`useEffect`, no global state library
- **Styling**: Tailwind utility classes + custom CSS files where needed; dark theme throughout
- **Data**: Static JSON in `public/` fetched with `fetch()` in `useEffect`
- **SEO**: `react-helmet` on each page

## Tailwind Custom Theme

Colors: `p1`–`p4` (primary/dark blues), `s1`–`s3` (secondary), `a1`–`a4` (accents: orange, green, red, purple)

## Deployment

`.htaccess` handles SPA routing fallback for Apache-based hosting.

---

## Future Improvements Roadmap

### P0 — Quick Wins (Do First)
- [x] Remove unused dependencies: `firebase`, `localforage`, `match-sorter`, `sort-by`
- [x] Replace `moment.js` (67KB) with native `Intl.DateTimeFormat`
- [x] Migrate `emailjs-com` (deprecated) → `@emailjs/browser`
- [x] Fix React Router `<Link>` used for external URLs → use `<a>` tags instead
- [x] Fix `eslint-disable react-hooks/exhaustive-deps` — add proper dependency arrays
- [x] Preload audio objects in SnakeGame instead of creating new `Audio()` on every play
- [x] Debounce `window.resize` handler in Projects.jsx
- [x] Convert email `<span onClick>` to proper `<a href="mailto:">` in ContactNumber.jsx
- [x] **USER TODO**: Reconnect Gmail in EmailJS dashboard (OAuth token expired → status 412)
- [x] **USER TODO**: Run `npm install` to sync updated dependencies

### P1 — SEO & Accessibility
- [x] Add meta descriptions and Open Graph tags (og:title, og:description, og:image) on every page
- [x] Add `robots.txt` and `sitemap.xml` to `public/`
- [x] Add JSON-LD structured data (`Person` schema on home/about)
- [x] Fix image alt texts — replace `alt="img"` / `alt="url"` with descriptive text
- [x] Fix heading hierarchy — no skipping from `<h1>` to `<h3>` (changed to `<h2>`)
- [x] Add `aria-required` to required form fields, fix label `htmlFor` IDs
- [x] Fix fixed footer overlapping content on mobile (added `pb-12` to main content)
- [x] Wrap social links in `<nav aria-label="Social media">`, added `aria-label` to all social links

### P2 — Content & UX Upgrades
- [x] Add **project case study pages** (`/projects/[slug]`) with:
  - Problem statement, technical decisions, challenges, results
  - Replace modal-only view with dedicated pages
- [x] Add **blog/articles section** — even 3-4 technical posts show depth
- [x] Add loading skeletons/spinners for project fetching and contact form submission
- [x] Add lazy loading (`loading="lazy"`) and responsive `srcSet` on project images
- [x] Make snake game responsive (currently hardcoded 500px width)
- [x] Auto-dismiss contact form success message after a few seconds
- [x] Add GitHub activity integration (contribution graph or pinned repos)

### P3 — Major Upgrades
- [ ] **Migrate to Next.js + TypeScript** — SSR/SSG, image optimization, App Router
- [ ] Replace AOS with **GSAP** or **Framer Motion** for scroll-triggered animations
- [ ] Add **AI chatbot** that answers questions about your experience (big 2026 differentiator)
- [ ] Add 3D elements or micro-interactions (Three.js, WebGL subtle touches)
- [ ] Replace `react-syntax-highlighter` (100KB+) with a lighter alternative like `shiki`
- [ ] Replace `react-stickynode` with CSS `position: sticky`
- [ ] Add custom domain if not already set up

### Code Quality Debt
- [ ] Move inline styles to Tailwind classes (especially in SnakeGame and Home)
- [ ] Extract magic numbers into named constants (grid size, cell size, game speed)
- [ ] Add error boundaries with fallback UI for failed fetches
- [ ] Validate environment variables exist before using EmailJS
- [ ] Consistent data fetching pattern (currently mix of `fetch()` and direct imports)
