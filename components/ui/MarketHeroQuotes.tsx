"use client";

import { useEffect, useMemo, useState } from "react";
import type { MarketHeroQuoteRow } from "@/lib/types";

const TICK_MS = 5000;
const TIMEFRAMES = ["1M", "15M", "1H", "1D", "1W"] as const;
const CHART_LEVELS = ["70.00", "50.00", "30.00"] as const;

type LiveRow = MarketHeroQuoteRow & {
  seedMid: number;
  tone: "up" | "down";
};

function roundTo(value: number, digits: number) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function midOf(row: Pick<MarketHeroQuoteRow, "bid" | "ask">) {
  return (row.bid + row.ask) / 2;
}

function nextQuote(row: LiveRow): LiveRow {
  const floor = 10 ** -row.digits;
  const spread = Math.max(row.ask - row.bid, floor);
  const mid = midOf(row);
  const direction = Math.random() > 0.48 ? 1 : -1;
  const nextMid = mid * (1 + direction * (0.00012 + Math.random() * 0.00045));
  return {
    ...row,
    bid: Math.max(roundTo(nextMid - spread / 2, row.digits), 0),
    ask: Math.max(roundTo(nextMid + spread / 2, row.digits), floor),
    tone: direction > 0 ? "up" : "down",
  };
}

function formatPrice(value: number, digits: number) {
  return value.toFixed(digits);
}

function formatSigned(value: number, digits: number) {
  const abs = formatPrice(Math.abs(value), Math.min(digits, 5));
  if (value > 0) return `+${abs}`;
  if (value < 0) return `-${abs}`;
  return abs;
}

export function MarketHeroQuotes({ rows }: { rows: MarketHeroQuoteRow[] }) {
  const initial = useMemo<LiveRow[]>(
    () =>
      rows.map((row) => {
        const mid = midOf(row);
        let hash = 0;
        for (const char of row.id) hash = (hash * 33 + char.charCodeAt(0)) >>> 0;
        const lift = ((hash % 80) + 18) / 10000;
        return {
          ...row,
          seedMid: mid / (1 + lift),
          tone: "up" as const,
        };
      }),
    [rows],
  );
  const [live, setLive] = useState(initial);
  const [activeId, setActiveId] = useState(initial[0]?.id ?? "");
  const [timeframe, setTimeframe] = useState<(typeof TIMEFRAMES)[number]>("1M");
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    setLive(initial);
    setActiveId(initial[0]?.id ?? "");
  }, [initial]);

  useEffect(() => {
    if (initial.length === 0) return;
    const id = window.setInterval(() => {
      setArmed(true);
      setLive((current) => current.map(nextQuote));
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [initial]);

  const active = live.find((row) => row.id === activeId) ?? live[0];
  if (!active) return null;

  const mid = midOf(active);
  const delta = mid - active.seedMid;
  const percent = active.seedMid === 0 ? 0 : (delta / active.seedMid) * 100;
  const tone = delta >= 0 ? "up" : "down";
  const currency = active.quoteCurrency ?? "USD";
  const period = active.period ?? "Past Month";
  const name = active.label ?? active.symbol;
  const chartVariant = Math.abs(live.findIndex((row) => row.id === active.id)) % 3;
  const priceKey = `${active.id}-${armed ? active.bid : "seed"}`;

  return (
    <div className="ui-tv-card">
      <div className="ui-tv-card__quote">
        <div className="ui-tv-card__pair">
          {active.iconSrc || active.iconSrcSecondary ? (
            <span className="ui-tv-card__marks" aria-hidden="true">
              {active.iconSrc ? (
                <img className="ui-tv-card__mark" src={active.iconSrc} alt="" width={24} height={24} />
              ) : null}
              {active.iconSrcSecondary ? (
                <img className="ui-tv-card__mark" src={active.iconSrcSecondary} alt="" width={24} height={24} />
              ) : null}
            </span>
          ) : null}
          <span className="ui-tv-card__name">{name}</span>
        </div>
        <p className={`ui-tv-card__price ui-tv-card__price--${tone}`} key={priceKey}>
          <strong>${formatPrice(mid, active.digits)}</strong>
          <span>{currency}</span>
        </p>
        <p className="ui-tv-card__meta">
          <span>{formatSigned(delta, Math.max(active.digits, 2))}</span>
          <span className={`ui-tv-card__change ui-tv-card__change--${tone}`}>
            {formatSigned(percent, 2)}%
          </span>
          <span className="ui-tv-card__period">{period}</span>
        </p>
      </div>

      <div className="ui-tv-card__tools">
        <div className="ui-tv-card__symbols" role="tablist" aria-label="Instruments">
          {live.map((row) => {
            const selected = row.id === active.id;
            return (
              <button
                key={row.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={selected ? "ui-tv-card__symbol ui-tv-card__symbol--on" : "ui-tv-card__symbol"}
                onClick={() => setActiveId(row.id)}
              >
                {row.symbol}
              </button>
            );
          })}
        </div>

        <div className="ui-tv-card__times" role="tablist" aria-label="Chart interval">
          {TIMEFRAMES.map((item) => {
            const selected = item === timeframe;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                className={selected ? "ui-tv-card__time ui-tv-card__time--on" : "ui-tv-card__time"}
                onClick={() => setTimeframe(item)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="ui-tv-card__chart" data-variant={chartVariant} data-frame={timeframe}>
          {CHART_LEVELS.map((level) => (
            <div key={level} className="ui-tv-card__axis">
              <span className="ui-tv-card__axis-line" />
              <span className="ui-tv-card__axis-label">{level}</span>
            </div>
          ))}
          <img
            className="ui-tv-card__spark"
            src="/brand/tv-card/chart-line.svg"
            alt=""
            width={470}
            height={127}
          />
        </div>

        <div className="ui-tv-card__badge">
          <img src="/brand/tv-card/tradingview-badge.svg" alt="TradingView" width={116} height={15} />
        </div>
      </div>
    </div>
  );
}
