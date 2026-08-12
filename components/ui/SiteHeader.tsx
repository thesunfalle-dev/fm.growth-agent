import { Pill } from "@/components/ui/Pill";

export function SiteHeader() {
  return (
    <header className="ui-site-header">
      <div className="ui-container ui-site-header__inner">
        <a className="ui-brand" href="/">
          FM <span>previews</span>
        </a>
        <Pill>internal · noindex</Pill>
      </div>
    </header>
  );
}
