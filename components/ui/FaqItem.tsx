import { Icon } from "@/components/ui/Icon";

type FaqItemProps = {
  question: string;
  answer: string;
  /** First item open by default when useful for demos. */
  defaultOpen?: boolean;
};

/**
 * FAQ row — Website Redesign Sections frame 15313:11090.
 * Static-export friendly: native details/summary (no client JS).
 * Icons: Material expand_more / expand_less.
 */
export function FaqItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  return (
    <details className="ui-faq" open={defaultOpen || undefined}>
      <summary className="ui-faq__summary">
        <span className="ui-faq__question">{question}</span>
        <span className="ui-faq__icon ui-faq__icon--closed" aria-hidden="true">
          <Icon name="expand_more" size={24} />
        </span>
        <span className="ui-faq__icon ui-faq__icon--open" aria-hidden="true">
          <Icon name="expand_less" size={24} />
        </span>
      </summary>
      <div className="ui-faq__answer">
        <p>{answer}</p>
      </div>
    </details>
  );
}
