# JAKUR Health and Beauty — Landing Page

A Next.js marketing landing page for JAKUR Health and Beauty Inc., built to
later expand into a full e-commerce store.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Project structure

```
jakur-landing/
  app/
    layout.js       # page metadata + root layout
    page.js          # renders the landing page
    globals.css       # minimal global reset
  components/
    JakurLandingPage.jsx   # the full landing page design
  public/            # put images/logos here
```

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to vercel.com, click "Add New Project," and import the repo.
3. Vercel will auto-detect Next.js — no config needed. Click Deploy.
4. Once live, connect your GoDaddy domain under Project Settings → Domains.

## Next steps

- Swap the placeholder ingredient/lot info on the product cards for real
  product details.
- Wire up the "Notify me" email form to an actual mailing list or database.
- Add real product photography to `public/` and reference it with Next's
  `<Image />` component for optimized loading.
- When ready, this same project can grow into the full store — product
  pages and a cart can be added alongside the existing landing page.
