# Leo Club of Kathmandu Budigandaki — Website

A static, no-build website for the Leo Club of Kathmandu Budigandaki
(Club No. 136440, established 2018). Plain HTML/CSS/JS — no build tools,
no dependencies, works on any static host.

## Structure

```
index.html          Home
about.html           About the club, mission, timeline
activities.html      Programs & activities
gallery.html         Photo gallery (placeholders — see below)
contact.html         Contact info + message form (static-friendly)
assets/css/style.css Shared styling
assets/js/main.js    Nav toggle, active-link highlighting, form message
assets/img/logo.jpg  Official club emblem (pulled from the club's Facebook page)
```

## Things to fill in / fix before going live

These were placeholders or best-guess info pulled from public sources —
double-check and replace with the club's actual details:

- **Email address** — `info@leobudigandaki.org.np` is a placeholder in
  `contact.html` and the footer of every page. Replace with the real one.
- **Instagram link** — not included yet; the club's exact Instagram handle
  couldn't be confirmed. Add it to the social rows in the footer and
  `contact.html` once you have it.
- **Gallery photos** — `gallery.html` has 6 placeholder tiles. Drop real
  photos into `assets/img/gallery/` and swap each placeholder `<div>` for:
  ```html
  <div class="gallery-item has-photo"><img src="assets/img/gallery/your-photo.jpg" alt="..."></div>
  ```
- **Contact form** — it's static, so submissions currently just show a
  message instead of sending anything. Wire it to a free form backend
  (e.g. [Formspree](https://formspree.io) — free tier, just change the
  `<form>`'s `action`/`method`) if you want real email delivery.
- **Sponsoring Lions club / district number** — listed as "Lions Club of
  Kathmandu Budhigandaki" and Lions District 325 based on public info;
  confirm the exact sub-district (e.g. 325 A2 / J / etc.) with your club
  officers and update `index.html`'s stat strip.
- **Officers/members page** — not built yet. Happy to add one if you send
  names/roles/photos.

## Hosting it for free

Any of these work well for a plain static site like this one. All are free
for a project this size.

### Option A — GitHub Pages (recommended, easiest to keep updating)

```bash
cd /home/office2/.local/state/leo
git init
git add .
git commit -m "Leo Club of Kathmandu Budigandaki website"
gh repo create leo-budigandaki-website --public --source=. --push
```
Then in the repo's GitHub Settings → Pages, set source to the `main` branch
(root). Your site will be live at
`https://<your-github-username>.github.io/leo-budigandaki-website/`.

### Option B — Cloudflare Pages / Netlify (drag-and-drop)

- [Cloudflare Pages](https://pages.cloudflare.com/) or
  [Netlify Drop](https://app.netlify.com/drop) both let you drag this whole
  folder into the browser and get a live URL in seconds — no git required.

### Option C — Vercel

```bash
npm i -g vercel   # one-time
cd /home/office2/.local/state/leo
vercel --prod
```

## Connecting a `.com.np` domain later

`.com.np` domains are registered through Nepal's registry (currently via
[Mercantile Communications](https://register.com.np/)) and are **not free**
to register — expect a small annual fee. Once you own one:

1. In your registrar's DNS settings, add either:
   - A `CNAME` record pointing to your host (e.g.
     `<your-username>.github.io` for GitHub Pages), or
   - The `A`/`ALIAS` records your host's docs specify (Cloudflare Pages,
     Netlify, and Vercel all show these in their dashboard under
     "Custom Domains").
2. Add the domain in your host's dashboard (GitHub Pages: repo Settings →
   Pages → Custom domain; Netlify/Cloudflare/Vercel: project → Domains).
3. Wait for DNS propagation (usually minutes to a few hours) — the host
   will show a green check once it's verified, and can auto-provision a
   free HTTPS certificate.

No code changes are needed on the site itself to support a custom domain.
