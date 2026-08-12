# Accessibility checklist

Use before marking a component/block `ready`.

## Structure

- [ ] Landings have a single logical `h1` (usually hero title)
- [ ] Heading levels do not skip (h1 → h2 → h3)
- [ ] Sections use landmarks (`header`, `main`, `section`, `footer`) where appropriate

## Interactive

- [ ] Links/buttons have clear accessible names (visible text or `aria-label`)
- [ ] Focus visible styles use tokenized focus ring
- [ ] Hit targets ≥ 44px where practical for primary CTAs
- [ ] No keyboard traps

## Content

- [ ] Color is not the only cue for meaning
- [ ] Disclaimer text remains readable (contrast against canvas)
- [ ] External CTAs make sense out of context

## Motion (when introduced)

- [ ] Honor `prefers-reduced-motion: reduce`
- [ ] No essential information only in animation

## Preview chrome

- [ ] Internal “noindex / preview” chrome does not confuse assistive tech as part of offer content
