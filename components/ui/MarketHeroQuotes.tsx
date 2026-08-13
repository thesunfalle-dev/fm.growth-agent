"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { blockDefaults } from "@/lib/block-defaults";
import type { MarketHeroQuoteRow } from "@/lib/types";

const TICK_MS = 5000;

type LiveRow = MarketHeroQuoteRow & {
  tone: "up" | "down";
  tick: number;
};

function roundTo(value: number, digits: number) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function formatPrice(value: number, digits: number) {
  return value.toFixed(digits);
}

function formatSpread(ask: number, bid: number) {
  const raw = Math.max(0, ask - bid);
  if (raw === 0) return "0.0";
  if (raw >= 1) return raw.toFixed(1);
  if (raw >= 0.1) return raw.toFixed(1);
  if (raw >= 0.01) return raw.toFixed(2);
  if (raw >= 0.001) return raw.toFixed(3);
  return raw.toFixed(4);
}

function nextQuote(row: LiveRow): LiveRow {
  if (Math.random() < 0.2) return row;
  const floor = 10 ** -row.digits;
  const spread = Math.max(row.ask - row.bid, floor);
  const mid = (row.bid + row.ask) / 2;
  const direction = Math.random() > 0.48 ? 1 : -1;
  const nextMid = mid * (1 + direction * (0.00012 + Math.random() * 0.00055));
  const nextSpread = Math.max(spread * (0.88 + Math.random() * 0.24), floor);
  return {
    ...row,
    bid: Math.max(roundTo(nextMid - nextSpread / 2, row.digits), 0),
    ask: Math.max(roundTo(nextMid + nextSpread / 2, row.digits), floor),
    tone: direction > 0 ? "up" : "down",
    tick: row.tick + 1,
  };
}

export function MarketHeroQuotes({ rows }: { rows: MarketHeroQuoteRow[] }) {
  const initial = useMemo<LiveRow[]>(
    () =>
      rows.map((row, index) => ({
        ...row,
        tone: index % 3 === 1 ? "up" : "down",
        tick: 0,
      })),
    [rows],
  );
  const [live, setLive] = useState(initial);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    setLive(initial);
  }, [initial]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setArmed(true);
      setLive((current) => current.map(nextQuote));
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <table className="ui-quote-table">
      <caption className="ui-table__sr-only">
        Indicative prices. Bid and ask update to illustrate market movement.
      </caption>
      <thead>
        <tr>
          <th scope="col">Instrument</th>
          <th scope="col">Bid</th>
          <th scope="col">Ask</th>
          <th scope="col" className="ui-quote-table__spread">Spread</th>
          <th scope="col" className="ui-quote-table__action">
            <span className="ui-table__sr-only">Trade</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {live.map((row, index) => {
          const href = row.action?.href ?? blockDefaults.marketHero.quoteAction.href;
          const label = row.action?.label ?? blockDefaults.marketHero.quoteAction.label;
          const tickClass = armed ? ` ui-quote-table__row--tick ui-quote-table__row--${row.tone}` : "";
          return (
            <tr
              key={row.id}
              className={`ui-quote-table__row ui-quote-table__row--${row.tone}${tickClass}`}
              style={{ "--quote-stagger": `${index * 70}ms` } as CSSProperties}
            >
              <th scope="row">{row.symbol}</th>
              <td>
                <QuotePrice
                  value={formatPrice(row.bid, row.digits)}
                  tone={row.tone}
                  tick={row.tick}
                  armed={armed}
                />
              </td>
              <td>
                <QuotePrice
                  value={formatPrice(row.ask, row.digits)}
                  tone={row.tone}
                  tick={row.tick}
                  armed={armed}
                />
              </td>
              <td className="ui-quote-table__spread">
                <QuotePrice
                  value={formatSpread(row.ask, row.bid)}
                  tone={row.tone}
                  tick={row.tick}
                  armed={armed}
                />
              </td>
              <td className="ui-quote-table__action">
                <Button href={href} variant="primaryLight" size="sm" className="ui-quote-table__trade">
                  {label}
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function QuotePrice({
  value,
  tone,
  tick,
  armed,
}: {
  value: string;
  tone: "up" | "down";
  tick: number;
  armed: boolean;
}) {
  return (
    <span className={`ui-quote-price ui-quote-price--${tone}`}>
      <span
        key={`${value}-${tick}`}
        className={armed ? `ui-quote-price__value ui-quote-price__value--${tone}` : "ui-quote-price__value"}
      >
        {value}
      </span>
    </span>
  );
}
