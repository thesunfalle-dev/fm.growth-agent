# Design system

**Status:** `provisional-shell` — pipeline ready, brand Figma not yet ingested.

## Start here

1. `DESIGN.md` — policy
2. `design-tokens.json` — values
3. `block-inventory.json` — what agents may build
4. `implementation-contract.md` — how code must look
5. `sources.md` — Figma / provenance
6. `CHANGELOG.md` — history

## Commands

```bash
npm run generate:tokens
npm run validate:design
```

## Figma

Add links in `sources.md`. Do not silently overwrite tokens without changelog + provenance.
