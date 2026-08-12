export default function NotFound() {
  return (
    <div className="index">
      <div className="container">
        <h1>Landing not found</h1>
        <p className="index__intro">
          This slug is not registered. Check{" "}
          <a href="/" style={{ color: "var(--color-accent)" }}>
            the index
          </a>{" "}
          or add it under <code>landings/</code>.
        </p>
      </div>
    </div>
  );
}
