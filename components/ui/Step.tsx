type StepProps = {
  number: number | string;
  title: string;
  description: string;
  /** Active (filled purple) vs inactive (muted). */
  active?: boolean;
  /** Hide trailing connector (last vertical step). */
  last?: boolean;
  className?: string;
};

/**
 * Single step — Sections frame Step by Steps (vertical light foundation).
 * Dark / horizontal variants use layout parent classes.
 */
export function Step({
  number,
  title,
  description,
  active = true,
  last = false,
  className = "",
}: StepProps) {
  const classes = [
    "ui-step",
    active ? "ui-step--active" : "ui-step--inactive",
    last ? "ui-step--last" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={classes}>
      <div className="ui-step__indicator" aria-hidden="true">
        <span className="ui-step__number">{number}</span>
        {!last ? <span className="ui-step__connector" /> : null}
      </div>
      <div className="ui-step__body">
        <p className="ui-step__title">{title}</p>
        <p className="ui-step__desc">{description}</p>
      </div>
    </li>
  );
}
