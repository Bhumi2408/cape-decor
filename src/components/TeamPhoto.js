"use client";

import { useState } from "react";

// Founder portrait; falls back to initials until the photo file is added.
export default function TeamPhoto({ src, name }) {
  const [failed, setFailed] = useState(false);
  const initials = name.replace("Mr. ", "").split(" ").map((n) => n[0]).join("");

  if (failed) {
    return (
      <div className="slats grid size-full place-items-center bg-sand">
        <span className="font-display text-7xl font-light text-brand/60 italic">{initials}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- plain img so a missing file can fall back gracefully
    <img
      src={src}
      alt={name}
      // The error can fire before hydration, so also check once mounted.
      ref={(el) => {
        if (el && el.complete && el.naturalWidth === 0) setFailed(true);
      }}
      onError={() => setFailed(true)}
      className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
    />
  );
}
