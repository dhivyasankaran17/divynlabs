# Divyn Labs website

Marketing site for [divynlabs.com](https://divynlabs.com). Built with Vite, React, TypeScript, Tailwind CSS, and react-router-dom. It's a static site with no backend, database, analytics, or cookie banner.

## Local setup

Requires Node.js 20.19+ (22 recommended).

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # type-checks (tsc -b), then builds to dist/
npm run preview    # serve the production build locally
```

## Deploy to Cloudflare Pages

1. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git** and pick this repository.
2. Build settings:
   - Framework preset: **None** (or Vite)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: set by `.node-version` (22). You can also set the `NODE_VERSION` environment variable.
3. Deploy.

`public/_redirects` contains `/* /index.html 200`, so deep links like `/privacy` and `/terms` load the app instead of returning 404.

### Custom domain (Namecheap)

1. In the Pages project, open **Custom domains** and add `divynlabs.com` (and `www.divynlabs.com` if you want it).
2. Cloudflare will show you what DNS records to add. The simplest option is to move the domain's nameservers from Namecheap to Cloudflare (Namecheap → Domain List → Manage → Nameservers → Custom DNS).
3. **Keep your Zoho Mail records.** If you move DNS to Cloudflare, copy over the existing Zoho `MX`, `SPF` (TXT), `DKIM` (TXT), and any verification records from Namecheap before switching nameservers, or email to admin@divynlabs.com will stop working.

## Where to edit things

| What | File |
| --- | --- |
| Company name, email, domain, app URLs, location line, governing-law state, policy date | `src/data/site.ts` |
| App cards: status, links, H2OMed toggle | `src/data/apps.ts` |
| Services and "What's included" | `src/data/services.ts` |
| Logo mark and favicons | `public/logo-mark.png`, `public/favicon-32.png`, `public/apple-touch-icon.png` (shown via `src/components/Logo.tsx`) |
| Page title and meta description | `usePageMeta(...)` at the top of each file in `src/pages/` |

## TODO list

All of these are also marked `TODO` in the source.

- [ ] **Chorros Google Play link**: add the URL in `src/data/apps.ts`. Until then it shows as a disabled button.
- [ ] **Privacy Policy and Terms**: both are drafts. Review with a qualified professional, then remove the DRAFT banners (`src/components/LegalPage.tsx`) and update `policyEffectiveDate` in `src/data/site.ts`.
- [ ] **Contact page**: add a phone number or mailing address later if desired (`src/pages/Contact.tsx`).
- [ ] **Third service card**: the brief lists two services but asks for three cards on Home, so the third card shows the "What's included" list. Confirm, or add a third service (`src/components/ServicesGrid.tsx`).
