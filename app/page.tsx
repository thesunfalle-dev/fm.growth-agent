import { getListedLandings } from "@/lib/landings";

export default function HomePage() {
  const landings = getListedLandings();

  return (
    <div className="index">
      <div className="container">
        <h1>FM landing previews</h1>
        <p className="index__intro">
          Internal index for Fusion Markets campaign landings. Share specific
          slug URLs with marketing — this list is only a convenience for you.
        </p>
        <ul className="landing-list">
          {landings.map((landing) => (
            <li key={landing.slug}>
              <a href={`/${landing.slug}/`}>
                <span className="landing-list__slug">/{landing.slug}</span>
                <span className="status">{landing.status}</span>
                <span className="landing-list__meta">
                  {landing.name}
                  {landing.note ? ` — ${landing.note}` : ""}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
