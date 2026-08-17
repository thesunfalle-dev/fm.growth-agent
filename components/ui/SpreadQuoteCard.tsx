import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { blockDefaults } from "@/lib/block-defaults";
import type { LandingCta } from "@/lib/types";

export type SpreadQuoteView = {
  id: string;
  symbol: string;
  bid: number;
  ask: number;
  spread: number;
  digits: number;
  trend: number;
  iconSrc?: string;
  iconSrcSecondary?: string;
  action: LandingCta;
};

function formatPrice(value: number, digits: number) {
  return value.toFixed(digits);
}

function Marks({
  primary,
  secondary,
  size,
}: {
  primary?: string;
  secondary?: string;
  size: number;
}) {
  if (!primary && !secondary) return null;
  return (
    <span className="ui-spread-quote__marks" aria-hidden="true">
      {primary ? (
        <img className="ui-spread-quote__mark" src={primary} alt="" width={size} height={size} />
      ) : null}
      {secondary ? (
        <img className="ui-spread-quote__mark" src={secondary} alt="" width={size} height={size} />
      ) : null}
    </span>
  );
}

function Metric({
  label,
  value,
  tone,
  trend,
}: {
  label: string;
  value: string;
  tone?: "up" | "down" | "flat";
  trend?: boolean;
}) {
  return (
    <div className="ui-spread-quote__metric">
      <span className="ui-spread-quote__label">{label}</span>
      <span
        className={[
          "ui-spread-quote__value",
          tone === "up" ? "ui-spread-quote__value--up" : "",
          tone === "down" ? "ui-spread-quote__value--down" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {value}
        {trend && tone && tone !== "flat" ? (
          <Icon name={tone === "down" ? "trending_down" : "trending_up"} size={20} />
        ) : null}
      </span>
    </div>
  );
}

export function SpreadQuoteCard({
  quote,
  variant,
  actionLabel = blockDefaults.spreadCards.actionLabel,
}: {
  quote: SpreadQuoteView;
  variant: "desktop" | "mobile";
  actionLabel?: string;
}) {
  const trendTone = quote.trend < 0 ? "down" : quote.trend > 0 ? "up" : "flat";
  const signedTrend = `${quote.trend < 0 ? "−" : ""}${Math.abs(quote.trend).toFixed(2)}%`;
  const iconSize = variant === "desktop" ? 32 : 24;

  return (
    <article
      className={
        variant === "desktop" ? "ui-spread-quote ui-spread-quote--desktop" : "ui-spread-quote ui-spread-quote--mobile"
      }
    >
      <header className="ui-spread-quote__head">
        <div className="ui-spread-quote__pair">
          <Marks primary={quote.iconSrc} secondary={quote.iconSrcSecondary} size={iconSize} />
          <p className="ui-spread-quote__symbol">{quote.symbol}</p>
        </div>
        {variant === "mobile" ? (
          <Button href={quote.action.href} variant="secondary" size="sm">
            {actionLabel}
          </Button>
        ) : null}
      </header>

      <div className="ui-spread-quote__grid">
        <Metric label="Bid" value={formatPrice(quote.bid, quote.digits)} tone="up" />
        <Metric label="Ask" value={formatPrice(quote.ask, quote.digits)} tone="up" />
        <Metric label="Spread" value={formatPrice(quote.spread, Math.min(quote.digits, 2))} />
        <Metric label="Trend" value={signedTrend} tone={trendTone} trend />
      </div>

      {variant === "desktop" ? (
        <Button href={quote.action.href} variant="secondary" size="md" className="ui-spread-quote__trade">
          {actionLabel}
        </Button>
      ) : null}
    </article>
  );
}
