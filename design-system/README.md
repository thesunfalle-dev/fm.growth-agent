# Design system

**Status:** `provisional-shell` — pipeline ready, brand Figma not yet ingested.

## Start here

1. `../docs/IMPLEMENTATION_PLAYBOOK.md` — **agent process, Figma 1:1, anti-patterns**
2. `DESIGN.md` — policy
3. `design-tokens.json` — values
4. `block-inventory.json` — what agents may build
5. `implementation-contract.md` — how code must look
6. `header-footer.md` — SiteHeader / SiteFooter
7. `sources.md` — Figma / provenance
8. `CHANGELOG.md` — history

## Commands

```bash
npm run generate:tokens
npm run validate:design
```

## Figma

Add links in `sources.md`. Do not silently overwrite tokens without changelog + provenance.
