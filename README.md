# FM Landings (`fm.growth-agent.org`)

Internal preview host for **Fusion Markets** marketing landings.

- URLs: `https://fm.growth-agent.org/{slug}/`
- Stack: Next.js (static export) → Cloudflare Pages
- SEO: `noindex` everywhere (meta + `robots.txt` + `X-Robots-Tag`)

This is **not** the main Growth Agent app (`growth-agent.org`). Separate project, separate deploy.

---

## For agents (Claude / Codex / Cursor / Grok)

**If the user says «ознакомься с проектом» / “familiarize yourself with the project”:**

→ Open **`ONBOARDING.md` first** and complete the Tier 1 (and Tier 2 for UI) reading list.  
→ Then follow **`AGENTS.md`** + **`docs/IMPLEMENTATION_PLAYBOOK.md`**.

| Entry file | Who auto-loads it |
|------------|-------------------|
| `ONBOARDING.md` | Manual / any agent told to onboard |
| `AGENTS.md` | Codex, Grok, many tools |
| `CLAUDE.md` | Claude Code |

| Doc | Purpose |
|-----|---------|
| `docs/IMPLEMENTATION_PLAYBOOK.md` | Process, Figma 1:1, anti-patterns, definition of done |
| `docs/WORKFLOW.md` | How we ship landings & DS changes |
| `docs/DECISIONS.md` | Why things are the way they are |
| `docs/OPEN_QUESTIONS.md` | Unknowns (don’t invent answers) |
| `design-system/` | Tokens, inventories, patterns, header/footer |

```bash
npm run generate:tokens
npm run validate:design
npm run build
# ship: git push main → GitHub Actions → Cloudflare Pages
```

**Hard rules (summary):**

- Figma = **structure** only; TZ/brief = **content** only  
- Only registered block types in landings  
- Production is SoT for “does it work?”  
- Social URLs from live fusionmarkets.com; chrome icons from Figma SVGs  

---

## Production-first workflow

Source of truth is GitHub + Cloudflare Pages (not local preview alone).

| URL | Notes |
|-----|--------|
| https://fm.growth-agent.org/{slug}/ | Production landings |
| https://fm.growth-agent.org/crypto/ | Example market landing |

### Ship a change

```bash
git add . && git commit -m "…"
git push origin main   # CI deploy when secrets are set
# or: npm run deploy
```

### Add a landing (`/slug`)

1. Add `landings/{slug}/content.ts` (inventory block types only; TZ content)
2. Register in `lib/landings.ts`
3. Validate, build, push
4. Share: `https://fm.growth-agent.org/{slug}/`

### Slug rules

- lowercase kebab-case: `low-cost-forex`, `crypto`
- registered once in `lib/landings.ts`
- trailing slash in production (`trailingSlash: true`)

---

## Repo layout

```
AGENTS.md / CLAUDE.md / ONBOARDING.md   # agent entry
app/                 # Next.js App Router
landings/            # one folder per slug (content)
lib/                 # registry + types + navigation
components/          # blocks + ui (header/footer)
design-system/       # tokens, inventories, patterns
docs/                # workflow, playbook, decisions
brand/               # voice + compliance
public/              # static assets, robots, brand SVGs
```

---

## Deploy

- **Pages project:** `fm-growth-agent`
- **GitHub:** push to `main` → `.github/workflows/deploy.yml`
- Secrets: `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`

---

## Security / discretion

- Pages are public-by-URL unless Cloudflare Access is added
- Share specific slug links with marketing
- Index at `/` lists `listed: true` landings only; URL still works if known
