"use client";

import { useEffect, useMemo, useState } from "react";
import { SpreadQuoteCard, type SpreadQuoteView } from "@/components/ui/SpreadQuoteCard";
import { blockDefaults } from "@/lib/block-defaults";
import type { LandingCta, SpreadQuoteCard as SpreadQuoteCardSpec } from "@/lib/types";

const TICK_MS = 5000;
const POPULAR = "Popular";

type LiveCard = SpreadQuoteCardSpec & {
  seedBid: number;
  seedAsk: number;
};

function roundTo(value: number, digits: number) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function nextCard(card: LiveCard): LiveCard {
  const floor = 10 ** -card.digits;
  const spread = Math.max(card.ask - card.bid, card.spread ?? floor);
  const mid = (card.bid + card.ask) / 2;
  const direction = Math.random() > 0.48 ? 1 : -1;
  const nextMid = mid * (1 + direction * (0.00008 + Math.random() * 0.00035));
  const nextBid = Math.max(roundTo(nextMid - spread / 2, card.digits), 0);
  const nextAsk = Math.max(roundTo(nextMid + spread / 2, card.digits), floor);
  const trendBase = card.trend ?? 0.2;
  const nextTrend = roundTo(trendBase + direction * (0.02 + Math.random() * 0.08), 2);
  return {
    ...card,
    bid: nextBid,
    ask: nextAsk,
    trend: nextTrend,
  };
}

function toView(card: LiveCard, fallbackAction: LandingCta): SpreadQuoteView {
  const spread = card.spread ?? Math.max(card.ask - card.bid, 0);
  return {
    id: card.id,
    symbol: card.symbol,
    bid: card.bid,
    ask: card.ask,
    spread,
    digits: card.digits,
    trend: card.trend ?? 0.2,
    iconSrc: card.iconSrc,
    iconSrcSecondary: card.iconSrcSecondary,
    action: card.action ?? fallbackAction,
  };
}

export function SpreadQuotes({
  cards,
  tabs,
  actionLabel = blockDefaults.spreadCards.actionLabel,
}: {
  cards: SpreadQuoteCardSpec[];
  tabs?: string[];
  featuredId?: string;
  actionLabel?: string;
}) {
  const initial = useMemo<LiveCard[]>(
    () =>
      cards.map((card) => ({
        ...card,
        seedBid: card.bid,
        seedAsk: card.ask,
      })),
    [cards],
  );
  const [live, setLive] = useState(initial);
  const [tab, setTab] = useState(tabs?.[0] ?? POPULAR);

  useEffect(() => {
    setLive(initial);
  }, [initial]);

  useEffect(() => {
    if (initial.length === 0) return;
    const id = window.setInterval(() => {
      setLive((current) => current.map(nextCard));
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [initial]);

  const fallbackAction = blockDefaults.spreadCards.action;
  const visible = live.filter((card) => {
    if (!tabs?.length || tab === POPULAR) return true;
    return card.tab === tab;
  });

  if (visible.length === 0) return null;

  return (
    <div className="ui-spread-quotes">
      {tabs?.length ? (
        <div className="ui-spread-tabs" role="tablist" aria-label="Instruments">
          {tabs.map((item) => {
            const on = item === tab;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={on}
                className={on ? "ui-spread-tabs__tab ui-spread-tabs__tab--on" : "ui-spread-tabs__tab"}
                onClick={() => setTab(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      ) : null}
      <div className="ui-spread-quotes__desktop">
        {visible.map((card) => (
          <SpreadQuoteCard
            key={card.id}
            quote={toView(card, fallbackAction)}
            variant="desktop"
            actionLabel={actionLabel}
          />
        ))}
      </div>
      <div className="ui-spread-quotes__mobile">
        <div className="ui-spread-quotes__stack">
          {visible.map((card) => (
            <SpreadQuoteCard
              key={card.id}
              quote={toView(card, fallbackAction)}
              variant="mobile"
              actionLabel={actionLabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
