"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type FaqItemProps = {
  question: string;
  answer: string;
  /** First item open by default when useful for demos. */
  defaultOpen?: boolean;
};

/**
 * FAQ row — Website Redesign Sections frame 15313:11090.
 * Client accordion for smooth open/close (grid 0fr → 1fr).
 * Icons: Material expand_more / expand_less.
 */
export function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className={open ? "ui-faq ui-faq--open" : "ui-faq"}>
      <button
        type="button"
        id={buttonId}
        className="ui-faq__summary"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="ui-faq__question">{question}</span>
        <span className="ui-faq__icon" aria-hidden="true">
          <Icon name={open ? "expand_less" : "expand_more"} size={24} />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="ui-faq__panel"
        aria-hidden={!open}
      >
        <div className="ui-faq__panel-inner">
          <div className="ui-faq__answer">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
