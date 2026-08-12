# FM Landings (`fm.growth-agent.org`)

Internal preview host for **Fusion Markets** marketing landings.

- URLs: `https://fm.growth-agent.org/{slug}/`
- Stack: Next.js (static export) → Cloudflare Pages
- SEO: `noindex` everywhere (meta + `robots.txt` + `X-Robots-Tag`)

This is **not** the main Growth Agent app (`growth-agent.org`). Separate project, separate deploy.

## For agents & contributors

Start with **`AGENTS.md`**, then:

| Doc | Purpose |
|-----|---------|
| `docs/WORKFLOW.md` | How we ship landings & DS changes |
| `docs/DECISIONS.md` | Why things are the way they are |
| `docs/OPEN_QUESTIONS.md` | Unknowns (don’t invent answers) |
| `design-system/DESIGN.md` | Design policy |
| `design-system/design-tokens.json` | Visual source of truth |
| `design-system/block-inventory.json` | Allowed landing sections |

```bash
npm run generate:tokens
npm run validate:design
npm run deploy
```

---

## Production-first workflow

We **don’t rely on local preview**. Source of truth is GitHub + Cloudflare Pages.

| URL | Status |
|-----|--------|
| https://fm-growth-agent.pages.dev/ | live now |
| https://fm-growth-agent.pages.dev/demo/ | live now |
| https://fm.growth-agent.org/{slug}/ | after DNS CNAME (see below) |

### Ship a change

```bash
# edit landings / code
git add . && git commit -m "Add landing …"
git push
npm run deploy   # build + wrangler pages deploy → production
```

Or: push to `main` and let GitHub Actions deploy (needs secrets once — see Deploy).

### Add a landing (`/slug`)

1. Copy a folder: `cp -R landings/demo landings/my-campaign-a`
2. Edit `landings/my-campaign-a/content.ts` (`slug`, `seo`, `blocks`)
3. Register import in `lib/landings.ts`
4. Commit, push, `npm run deploy`
5. Share: `https://fm.growth-agent.org/my-campaign-a/` (or `*.pages.dev` until DNS is ready)

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

## Deploy (already set up)

- **Pages project:** `fm-growth-agent`
- **GitHub:** https://github.com/thesunfalle-dev/fm.growth-agent
- **Production deploy command:** `npm run deploy` (uses logged-in wrangler)

### Custom domain DNS (one-time, manual)

Custom domain is registered on the Pages project, but DNS write needs a click in the dashboard (API token has no zone edit):

1. Cloudflare → zone **growth-agent.org** → **DNS**
2. Add record:

   | Type | Name | Target | Proxy |
   |------|------|--------|-------|
   | CNAME | `fm` | `fm-growth-agent.pages.dev` | Proxied |

3. Wait 1–2 minutes → https://fm.growth-agent.org/demo/

### Optional: auto-deploy on every `git push`

Workflow: `.github/workflows/deploy.yml`

Add repo secrets:

| Secret | Value |
|--------|--------|
| `CLOUDFLARE_ACCOUNT_ID` | `9158da08ff0d2f68f183250a5ab55808` |
| `CLOUDFLARE_API_TOKEN` | API Token with **Cloudflare Pages — Edit** |

Until secrets exist, use `npm run deploy` after push (same result).

---

## Design system / Figma

Live fusionmarkets.com is **Next.js + MUI**, but the new redesign lives in Figma.  
When you share Figma links, we map tokens into `app/globals.css` / `design-system/` and grow real blocks beyond the current shell (`hero`, `features`, `cta`, `disclaimer`).

---

## Security / discretion

- Pages are public-by-URL unless you add Cloudflare Access later
- Share only specific slug links with marketing
- Index at `/` is a convenience; set `listed: false` on a landing to hide it from the index (URL still works if known)
