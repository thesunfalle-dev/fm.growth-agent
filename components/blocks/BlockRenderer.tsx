import { CtaBand } from "@/components/blocks/CtaBand";
import { Disclaimer } from "@/components/blocks/Disclaimer";
import { Faq } from "@/components/blocks/Faq";
import { Features } from "@/components/blocks/Features";
import { Hero } from "@/components/blocks/Hero";
import { MarketsTable } from "@/components/blocks/MarketsTable";
import { StepsBand } from "@/components/blocks/StepsBand";
import type { LandingBlock } from "@/lib/types";

export function BlockRenderer({ blocks }: { blocks: LandingBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "hero":
            return (
              <Hero
                key={index}
                eyebrow={block.eyebrow}
                title={block.title}
                subtitle={block.subtitle}
                bullets={block.bullets}
                primaryCta={block.primaryCta}
                secondaryCta={block.secondaryCta}
                brandBackground={block.brandBackground}
              />
            );
          case "features":
            return (
              <Features
                key={index}
                title={block.title}
                variant={block.variant}
                items={block.items}
              />
            );
          case "table":
            return (
              <MarketsTable
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                footnote={block.footnote}
                columns={block.columns}
                rows={block.rows}
                scrollable={block.scrollable}
                showSearch={block.showSearch}
              />
            );
          case "steps":
            return (
              <StepsBand
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                items={block.items}
                orientation={block.orientation}
                mode={block.mode}
                primaryCta={block.primaryCta}
                secondaryCta={block.secondaryCta}
              />
            );
          case "faq":
            return (
              <Faq
                key={index}
                title={block.title}
                items={block.items}
                openFirst={block.openFirst}
              />
            );
          case "cta":
            return (
              <CtaBand
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                primaryCta={block.primaryCta}
                secondaryCta={block.secondaryCta}
              />
            );
          case "disclaimer":
            return <Disclaimer key={index} text={block.text} />;
          default:
            return null;
        }
      })}
    </>
  );
}
