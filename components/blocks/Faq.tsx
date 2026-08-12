import { Container } from "@/components/ui/Container";
import { FaqItem } from "@/components/ui/FaqItem";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

type FaqProps = {
  title?: string;
  items: Array<{ question: string; answer: string }>;
  /** Open the first item by default (demo / important FAQ). */
  openFirst?: boolean;
};

/**
 * FAQ section block — Sections frame FAQ Desktop/Mobile.
 */
export function Faq({ title, items, openFirst = false }: FaqProps) {
  return (
    <Section id="faq">
      <Container>
        {title ? <Heading variant="section">{title}</Heading> : null}
        <div className="ui-faq-list">
          {items.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              defaultOpen={openFirst && index === 0}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
