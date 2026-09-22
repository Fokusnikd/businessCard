# Project context

- Publication: `.github/workflows/deploy.yml` builds with Node 22 and npm ci, then deploys `dist` to GitHub Pages on pushes to `main`. Local rename prepared; remote rename from `init` still pending.
- Asset paths: `vite.config.ts` sets `/businessCard/`; `index.html` is a Vite source entry, never publish it without building.
- Entry chain verified: `src/main.tsx` → `src/App.tsx` → `src/components/pages/HomePage.tsx` → `src/components/templates/SiteLayout.tsx` and organisms.
- Copy: `src/content/site.ts`. Components: `src/components/{atoms,molecules,organisms,templates,pages}`. Styles: Tailwind CSS v4 via `@tailwindcss/vite`; `src/styles/index.css` imports shared tokens from `theme.css` and global element rules from `base.css`; component styles remain in CSS Modules. Existing semantic CSS variables are retained in `theme.css` during migration.
- Validation: `npm run build`, `npm run lint`, then `npm run preview` and open `/businessCard/`.
- Pages setting: user confirmed Source → GitHub Actions. Remote rename and publication of the updated workflow still require authenticated GitHub access.
- Freshness: `state.json` records SHA256 of reviewed entry/config files and an inventory of source files. Compare hashes and full inventory before reuse; report added/deleted/uncovered files. Matching hashes prove unchanged content only. UI internals remain unreviewed.
