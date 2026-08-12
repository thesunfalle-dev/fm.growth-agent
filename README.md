# FM Landings (`fm.growth-agent.org`)

Internal preview host for **Fusion Markets** marketing landings.

- URLs: `https://fm.growth-agent.org/{slug}/`
- Stack: Next.js (static export) → Cloudflare Pages
- SEO: `noindex` everywhere (meta + `robots.txt` + `X-Robots-Tag`)

This is **not** the main Growth Agent app (`growth-agent.org`). Separate project, separate deploy.

---

## Quick start

```bash
npm install
npm run dev
```

- Index: http://localhost:3000/
- Demo: http://localhost:3000/demo/
- Demo B: http://localhost:3000/demo-b/

```bash
npm run build    # writes static site to out/
npm run preview  # optional local static server
```

---

## Add a landing (`/slug`)

1. Copy a folder:

   ```bash
   cp -R landings/demo landings/my-campaign-a
   ```

2. Edit `landings/my-campaign-a/content.ts`:
   - set `slug: "my-campaign-a"` (must match folder name by convention)
   - fill `seo`, `blocks`, status

3. Register it in `lib/landings.ts`:

   ```ts
   import myCampaignA from "@/landings/my-campaign-a/content";
   // ...
   const registry = [demo, demoB, myCampaignA];
   ```

4. Run locally, then ship:

   ```bash
   npm run build
   git add . && git commit -m "Add landing my-campaign-a"
   git push
   ```

Live URL after Pages deploy: `https://fm.growth-agent.org/my-campaign-a/`

### Slug rules

- lowercase kebab-case: `low-cost-forex`, `demo-b`
- registered once in `lib/landings.ts`
- trailing slash in production (`trailingSlash: true`)

---

## Repo layout

```
app/                 # Next.js App Router
  [slug]/page.tsx    # all landings
  page.tsx           # internal index
landings/            # one folder per slug (content source)
lib/                 # registry + types
components/          # block renderer (expand with real DS blocks)
design-system/       # Figma tokens later
brand/               # voice + compliance notes
briefs/              # drop marketing briefs here
templates/brief.md   # brief template
public/              # robots, _headers for CF Pages
```

---

## Deploy: Cloudflare Pages + Git (recommended)

### 1. Create GitHub/GitLab repo

```bash
git init
git add .
git commit -m "Initial FM landings scaffold"
# create empty remote, then:
git remote add origin git@github.com:<you>/fm-landings.git
git branch -M main
git push -u origin main
```

### 2. Cloudflare Pages project

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect git
2. Settings:

   | Setting | Value |
   |---------|--------|
   | Framework preset | Next.js (or None) |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | `/` (repo root) |
   | Node version | `22` (or `20`) |

3. Deploy once → you get `*.pages.dev`.

### 3. Custom domain `fm.growth-agent.org`

1. Pages project → **Custom domains** → `fm.growth-agent.org`
2. Cloudflare will add the DNS record on zone `growth-agent.org` (or add manually):

   | Type | Name | Target |
   |------|------|--------|
   | CNAME | `fm` | `<your-project>.pages.dev` |

   Proxy status: **Proxied** (orange cloud).

3. Wait for SSL (usually minutes).

### 4. Everyday workflow

```
brief → edit landings/{slug}/content.ts → commit → push → live /{slug}/
```

Preview deployments: every PR/branch can get a unique `*.pages.dev` URL if enabled.

### Manual deploy (optional, no git hook)

```bash
npm run build
npx wrangler pages deploy out --project-name=fm-landings
```

(Requires `wrangler` login and an existing Pages project.)

---

## Design system / Figma

Live fusionmarkets.com is **Next.js + MUI**, but the new redesign lives in Figma.  
When you share Figma links, we map tokens into `app/globals.css` / `design-system/` and grow real blocks beyond the current shell (`hero`, `features`, `cta`, `disclaimer`).

---

## Security / discretion

- Pages are public-by-URL unless you add Cloudflare Access later
- Share only specific slug links with marketing
- Index at `/` is a convenience; set `listed: false` on a landing to hide it from the index (URL still works if known)
