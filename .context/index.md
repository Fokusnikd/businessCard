# Project context

- Publication: `.github/workflows/deploy.yml` builds with Node 22 and npm ci, then deploys `dist` to GitHub Pages on pushes to `init`.
- Asset paths: `vite.config.ts` sets `/businessCard/`; `index.html` is a Vite source entry, never publish it without building.
- Entry chain verified: `src/main.tsx` → `src/App.tsx` → `src/components/pages/HomePage.tsx` → `src/components/templates/SiteLayout.tsx` and organisms.
- Copy: `src/content/site.ts`. Components: `src/components/{atoms,molecules,organisms,templates,pages}`. Styles: component CSS modules and `src/styles/global.css`. Detailed UI internals not reviewed in this deployment task.
- Validation: `npm run build`, `npm run lint`, then `npm run preview` and open `/businessCard/`.
- Pages setting required: Settings → Pages → Source → GitHub Actions. Remote deployment remains pending at this snapshot.
- Freshness: `state.json` records SHA256 of reviewed entry/config files and an inventory of source files. Compare hashes and full inventory before reuse; report added/deleted/uncovered files. Matching hashes prove unchanged content only. UI internals remain unreviewed.
