// Server-safe, CSS-only animated pieces.

// "Blinds opening" overlay — place inside a relatively positioned box.
export function Blinds({ count = 9, color, delay = 150 }) {
  return (
    <div className="blinds" aria-hidden style={{ "--slat": color, "--d": `${delay}ms` }}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} style={{ "--i": i }} />
      ))}
    </div>
  );
}
