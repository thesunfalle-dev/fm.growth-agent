import { CtaBand } from "@/components/blocks/CtaBand";
import { Disclaimer } from "@/components/blocks/Disclaimer";
import { Faq } from "@/components/blocks/Faq";
import { Features } from "@/components/blocks/Features";
import { Hero } from "@/components/blocks/Hero";
import { MarketsTable } from "@/components/blocks/MarketsTable";
import { MarketHero } from "@/components/blocks/MarketHero";
import { LogoMarquee } from "@/components/blocks/LogoMarquee";
import { Reviews } from "@/components/blocks/Reviews";
import { SpreadCards } from "@/components/blocks/SpreadCards";
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
          case "market-hero":
            return (
              <MarketHero
                key={index}
                eyebrow={block.eyebrow}
                title={block.title}
                subtitle={block.subtitle}
                bullets={block.bullets}
                primaryCta={block.primaryCta}
                secondaryCta={block.secondaryCta}
                quotes={block.quotes}
                quote={block.quote}
                trustpilot={block.trustpilot}
                atmosphere={block.atmosphere}
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
                variant={block.variant}
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
          case "reviews":
            return (
              <Reviews
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                summary={block.summary}
                items={block.items}
              />
            );
          case "spread-cards":
            return (
              <SpreadCards
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                toolPrefix={block.toolPrefix}
                toolSuffix={block.toolSuffix}
                toolLink={block.toolLink}
                tabs={block.tabs}
                featuredId={block.featuredId}
                cards={block.cards}
                actionLabel={block.actionLabel}
                primaryCta={block.primaryCta}
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
          case "logo-marquee":
            return (
              <LogoMarquee
                key={index}
                title={block.title}
                subtitle={block.subtitle}
                providers={block.providers}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
