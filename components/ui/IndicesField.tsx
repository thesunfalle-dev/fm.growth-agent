const TICKER = [
  { symbol: "US500", change: "+0.42%" },
  { symbol: "NAS100", change: "+0.61%" },
  { symbol: "AUS200", change: "+0.18%" },
  { symbol: "GER40", change: "−0.12%" },
  { symbol: "HK50", change: "+0.27%" },
  { symbol: "JPN225", change: "+0.33%" },
  { symbol: "FRA40", change: "+0.09%" },
  { symbol: "CA60", change: "−0.08%" },
] as const;

/**
 * Decorative equity-indices atmosphere.
 * Bottom ticker + globe mesh. Not a live feed.
 */
export function IndicesField() {
  return (
    <div className="ui-indices-field" aria-hidden="true">
      <span className="ui-indices-field__orb ui-indices-field__orb--a" />
      <span className="ui-indices-field__orb ui-indices-field__orb--b" />
      <div className="ui-indices-field__grid" />
      <img
        className="ui-indices-field__globe"
        src="/images/indices/globe.svg"
        alt=""
        width={720}
        height={480}
        draggable={false}
      />
      <div className="ui-indices-field__tape">
        <div className="ui-indices-ticker">
          <TickerTrack />
          <TickerTrack />
        </div>
      </div>
    </div>
  );
}

function TickerTrack() {
  const items = [...TICKER, ...TICKER, ...TICKER];
  return (
    <div className="ui-indices-ticker__track">
      {items.map((item, index) => (
        <span
          key={`${item.symbol}-${index}`}
          className={
            item.change.startsWith("−") || item.change.startsWith("-")
              ? "ui-indices-ticker__item ui-indices-ticker__item--down"
              : "ui-indices-ticker__item"
          }
        >
          <b>{item.symbol}</b>
          <em>{item.change}</em>
        </span>
      ))}
    </div>
  );
}
