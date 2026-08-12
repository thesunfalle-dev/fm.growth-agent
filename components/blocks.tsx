import type { LandingBlock, LandingCta } from "@/lib/types";

function CtaLink({ cta, variant }: { cta: LandingCta; variant: "primary" | "secondary" }) {
  return (
    <a
      className={variant === "primary" ? "btn btn--primary" : "btn btn--secondary"}
      href={cta.href}
    >
      {cta.label}
    </a>
  );
}

export function BlockRenderer({ blocks }: { blocks: LandingBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "hero":
            return (
              <section className="block block--hero" key={index}>
                <div className="container">
                  {block.eyebrow ? <p className="eyebrow">{block.eyebrow}</p> : null}
                  <h1>{block.title}</h1>
                  {block.subtitle ? <p className="lead">{block.subtitle}</p> : null}
                  {(block.primaryCta || block.secondaryCta) && (
                    <div className="cta-row">
                      {block.primaryCta ? (
                        <CtaLink cta={block.primaryCta} variant="primary" />
                      ) : null}
                      {block.secondaryCta ? (
                        <CtaLink cta={block.secondaryCta} variant="secondary" />
                      ) : null}
                    </div>
                  )}
                </div>
              </section>
            );
          case "features":
            return (
              <section className="block block--features" id="features" key={index}>
                <div className="container">
                  {block.title ? <h2>{block.title}</h2> : null}
                  <div className="feature-grid">
                    {block.items.map((item) => (
                      <article className="feature-card" key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            );
          case "cta":
            return (
              <section className="block block--cta" key={index}>
                <div className="container container--narrow">
                  <h2>{block.title}</h2>
                  {block.subtitle ? <p className="lead">{block.subtitle}</p> : null}
                  <div className="cta-row cta-row--center">
                    <CtaLink cta={block.primaryCta} variant="primary" />
                    {block.secondaryCta ? (
                      <CtaLink cta={block.secondaryCta} variant="secondary" />
                    ) : null}
                  </div>
                </div>
              </section>
            );
          case "disclaimer":
            return (
              <footer className="block block--disclaimer" key={index}>
                <div className="container">
                  <p>{block.text}</p>
                </div>
              </footer>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
