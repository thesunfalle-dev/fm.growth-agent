import { CtaBand } from "@/components/blocks/CtaBand";
import { Disclaimer } from "@/components/blocks/Disclaimer";
import { Features } from "@/components/blocks/Features";
import { Hero } from "@/components/blocks/Hero";
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
                primaryCta={block.primaryCta}
                secondaryCta={block.secondaryCta}
              />
            );
          case "features":
            return <Features key={index} title={block.title} items={block.items} />;
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
