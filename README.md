# Leon Paulo Portfolio

A multi-page Next.js portfolio for Leon Paulo, designed in a near-black, editorial visual language.

## Run locally

```powershell
npm install
npm run dev
```

## Client editing guide

- `data/portfolio.json` holds personal details, role pages, client lists, creative labels, and logo titles.
- Replace creative imagery in `public/assets/creatives/creative-01.png` through `creative-18.png`.
- Replace logos in `public/assets/logos/logo-01.png` through `logo-16.png`.
- The supplied LP monogram is saved as `public/assets/leon-paulo-logo.png`.

## Routes

- `/` — landing page
- `/about` — profile, strengths, education, certifications
- `/work` — selected experience and freelance client list
- `/work/[slug]` — individual role case pages
- `/creatives` — 18-piece editable creative archive
- `/logos` — 16-piece editable logo archive

The interface uses shadcn-style UI primitives in `components/ui`, a responsive lanyard-inspired hero card for desktop, a mobile profile card, and interactive archive gallery treatments based on the supplied React Bits references.
