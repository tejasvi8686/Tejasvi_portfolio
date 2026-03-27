# Tejasvi Portfolio – Cursor Project Context

This file helps AI assistants understand the project structure, conventions, and context.

---

## Project Overview

Personal portfolio website for **Tejasvi Raj** (Front-end developer). Developer-themed design with IDE-inspired aesthetics, interactive Snake game on homepage, and project showcase.

---

## Tech Stack

- **Framework**: React 18
- **Build**: Vite 4
- **Routing**: React Router v6
- **Styling**: Tailwind CSS 3
- **Deployment**: Vercel (primary), Apache (.htaccess for fallback)

---

## Key Dependencies

- `react-helmet` — SEO meta tags
- `emailjs-com` — Contact form emails
- `aos` — Scroll animations
- `react-syntax-highlighter` — Code snippet display
- `react-image-gallery` — Project modal image carousel
- `react-stickynode` — Sticky nav/sidebars
- `react-vertical-timeline-component` — Experience timeline
- `react-icons` — Icons

---

## Project Structure

```
src/
├── components/          # Shared UI components
│   ├── AboutCodeSnippet/   # Syntax-highlighted code blocks
│   ├── ActiveLink/         # Nav link with active state
│   ├── AboutInfoNav/       # About section sub-nav
│   ├── ArrowButtons/       # Keyboard arrow visual
│   └── SnakeGame/          # Playable snake game
├── layouts/
│   ├── Main.jsx            # Root layout (Navbar + Outlet + Footer)
│   └── Styles.css          # Global animations, gradient BG
├── pages/
│   ├── Home/               # Landing + Snake game
│   ├── About/
│   │   ├── PersonalInfo/   # Bio, education, interests
│   │   └── ProfessionalInfo/ # Skills, experience
│   ├── Projects/           # Project grid + filter + modal
│   ├── Contact/            # EmailJS form
│   └── Shared/
│       ├── Navbar/
│       └── Footer/
├── router/
│   └── RouterProvider.jsx  # Route definitions
└── assets/                # Images, audio (eating.mp3, weldone.wav, etc.)
```

---

## Routes

| Path | Component |
|------|-----------|
| `/` | Home |
| `/about/professional-info` | ProfessionalInfo (default about) |
| `/about/personal-info` | PersonalInfo |
| `/projects` | Projects |
| `/contact` | Contact |

Note: `/about` has no index route → shows empty outlet. Consider redirect to `/about/professional-info`.

---

## Design System (Tailwind)

Custom colors in `tailwind.config.js`:
- **Primary**: p1 (#01080E), p2 (#011627), p3 (#011221), p4 (#1E2D3D)
- **Secondary**: s1 (#607B96), s2 (#3C9D93), s3 (#4D5BCE)
- **Accent**: a1 (#FEA55F), a2 (#43D9AD), a3 (#E99287), a4 (#C98BDF)
- **Font**: Fira Code (monospace)

---

## Data Sources

- **Projects**: `public/projectsData.json` — fetched at runtime
- **Projects filter**: Uses `project.category.includes("react")` or `"nextjs"` (category = path like `./techs/filled/react.svg`)

---

## Key Conventions

1. **Page structure**: Each page uses `<Helmet>` for title
2. **IDE theme**: Underscore-prefixed labels (`_home`, `_projects`, `submit-message`)
3. **Sticky nav**: `react-stickynode` with `top={57}` for desktop, `top={0}` for mobile
4. **Animations**: AOS (`data-aos` attributes), Tailwind animate

---

## Known Quirks / Tech Debt

- `Exprerience` folder (typo) — should be `Experience`
- ModalProject.jsx hardcodes React SVG for all projects; should use `category` prop
- Unused deps: firebase, localforage, match-sorter, sort-by
- EmailJS keys hardcoded in Contact.jsx — should use env vars

---

## File Naming

- Components: PascalCase (e.g., `ModalProject.jsx`)
- Pages match route names
- JSON: camelCase or kebab-case
