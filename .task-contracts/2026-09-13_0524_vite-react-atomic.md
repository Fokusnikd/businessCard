# Task contract

Status: completed

## User request

Take the existing HTML and turn it into a full Vite project on the latest React, split according to Atomic Design (atoms).

## Requirements and constraints

- Convert existing `index.html` + `style.css` into a Vite + React project.
- Use the latest React (user-provided constraint: "последнем реакте").
- Use Vite as the bundler.
- Split UI by Atomic Design: atoms → molecules → organisms → templates → pages.
- Preserve the current visual design and copy from the HTML.

## Evidence and source plan

- Source UI: `index.html`, `style.css` in the workspace.
- Latest React/Vite versions: npm registry + Context7 docs.
- Verification: `npm install`, `npm run build`, browser check of the rendered page.

## Unknowns and assumptions

- Assumption: TypeScript is appropriate for a "полноценный" Vite + React project. Confirmed by official Vite `react-ts` template.
- Assumption: "согласно atoms" means Atomic Design (atoms, molecules, organisms, templates, pages), not only a folder named `atoms`.
- Assumption: keep original CSS classes to preserve pixel-level look rather than rewriting styles.

## Acceptance checks

- Project runs via Vite (`npm run dev`) and builds (`npm run build`).
- React 19.x (latest major at time of work) is in package.json.
- UI is split into atomic layers, not a single HTML dump.
- Home page visually matches the original HTML (header, hero, tech strip, about, projects, contact, footer).
- Original HTML/CSS content is preserved (Russian copy, example projects).

## Work log

- Inspected `index.html` and `style.css`.
- Scaffolded Vite 8.3.0 + React 19.3.0 + TypeScript from the official template.
- Split UI into atoms/molecules/organisms/templates/pages.
- Moved copy into `src/content/site.ts`.
- Verified with `npm run build`, `npm run lint`, and browser walkthrough.

## Final verification

- Vite + React project: `package.json` scripts `dev`/`build`/`preview`; installed React **19.3.0**, Vite **8.3.0** (`node -p` on package.json versions).
- Atomic architecture: `src/components/{atoms,molecules,organisms,templates,pages}`.
- Build: `npm run build` exit 0 — `tsc -b && vite build`, 57 modules, CSS 13.36 kB matching original stylesheet size.
- Lint: `npm run lint` (oxlint) exit 0, no findings.
- Browser: `http://localhost:5173/` title "Lukianov Aleksandr"; hero, tech strip, about, Flowboard/Forma projects, details accordion, contact, footer all rendered.
- Interactions: `#projects`, `#about`, `#contact`, `#main` (Наверх), Flowboard details open with rotated +.
- Copy preserved from original HTML (Russian strings, example email, concept projects).
