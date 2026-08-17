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

const CHIPS = [
  { symbol: "US500", change: "+0.42%", icon: "/brand/flags/us.svg", x: "57%", y: "20%" },
  { symbol: "NAS100", change: "+0.61%", icon: "/brand/flags/us.svg", x: "76%", y: "12%" },
  { symbol: "AUS200", change: "+0.18%", icon: "/brand/flags/au.svg", x: "84%", y: "32%" },
  { symbol: "GER40", change: "−0.12%", icon: "/brand/flags/de.svg", x: "84%", y: "60%" },
  { symbol: "HK50", change: "+0.27%", icon: "/brand/flags/hk.svg", x: "72%", y: "80%" },
  { symbol: "JPN225", change: "+0.33%", icon: "/brand/flags/jp.svg", x: "54%", y: "72%" },
] as const;

/**
 * Decorative equity-indices atmosphere.
 * Globe + equator spark + index chips + bottom ticker. Not a live feed.
 */
export function IndicesField() {
  return (
    <div className="ui-indices-field" aria-hidden="true">
      <span className="ui-indices-field__orb ui-indices-field__orb--a" />
      <span className="ui-indices-field__orb ui-indices-field__orb--b" />
      <span className="ui-indices-field__orb ui-indices-field__orb--c" />
      <div className="ui-indices-field__grid" />
      <div className="ui-indices-field__planet">
        <img
          className="ui-indices-field__globe"
          src="/images/indices/globe-v2.png"
          alt=""
          width={1004}
          height={866}
          draggable={false}
        />
        <svg
          className="ui-indices-field__orbit"
          viewBox="0 0 1004 866"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="ui-indices-dot-glow" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            id="ui-indices-eq"
            d="M 56 377 C 220 445 400 500 560 534 C 680 552 780 554 828 548"
            fill="none"
          />
          <g opacity="0.35">
            <circle r="9" fill="var(--primitive-color-purple300)" />
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              calcMode="linear"
              keyPoints="0;1;0"
              keyTimes="0;0.5;1"
              begin="-0.9s"
              rotate="0"
            >
              <mpath href="#ui-indices-eq" />
            </animateMotion>
          </g>
          <g filter="url(#ui-indices-dot-glow)">
            <circle r="11" fill="var(--primitive-color-purple400)" />
            <circle r="4.5" fill="var(--primitive-color-gray0)" />
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              calcMode="linear"
              keyPoints="0;1;0"
              keyTimes="0;0.5;1"
              rotate="0"
            >
              <mpath href="#ui-indices-eq" />
            </animateMotion>
          </g>
        </svg>
      </div>
      {CHIPS.map((chip, index) => (
        <span
          key={chip.symbol}
          className={
            chip.change.startsWith("−") || chip.change.startsWith("-")
              ? "ui-indices-field__chip ui-indices-field__chip--down"
              : "ui-indices-field__chip"
          }
          style={{
            ["--chip-x" as string]: chip.x,
            ["--chip-y" as string]: chip.y,
            ["--enter-delay" as string]: `${index * 90}ms`,
          }}
        >
          <img src={chip.icon} alt="" width={20} height={20} />
          <b>{chip.symbol}</b>
          <em>{chip.change}</em>
        </span>
      ))}
    </div>
  );
}

export function IndicesTicker() {
  return (
    <div className="ui-indices-field__tape" aria-hidden="true">
      <div className="ui-indices-ticker">
        <TickerTrack />
        <TickerTrack />
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
