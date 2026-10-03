"use client";

import Image from "next/image";
import { useState } from "react";

// Photo with numbered pins; each pin is linked to a row in the list beside it.
// Hovering (or tapping) either one highlights both.
export default function DetailExplorer({ src, alt, spots }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-plum-deep/15" />

        {spots.map((s, i) => {
          const on = active === i;
          const flip = s.x > 55;
          return (
            <div key={s.title} className="absolute z-10" style={{ left: `${s.x}%`, top: `${s.y}%` }}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={on}
                aria-label={`Show detail: ${s.title}`}
                className="relative -translate-x-1/2 -translate-y-1/2"
              >
                <span className="absolute inset-0 animate-[ping-soft_2s_ease-out_infinite] rounded-full bg-brand-light" />
                <span
                  className={`relative grid size-10 place-items-center rounded-full border-2 border-white font-display text-sm shadow-lg transition-all duration-300 ${
                    on ? "scale-110 bg-white text-brand" : "bg-brand text-white"
                  }`}
                >
                  {i + 1}
                </span>
              </button>
              <span
                className={`pointer-events-none absolute top-1/2 hidden w-max max-w-52 -translate-y-1/2 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink shadow-xl transition-all duration-300 sm:block ${
                  flip ? "right-8" : "left-8"
                } ${on ? "opacity-100" : `opacity-0 ${flip ? "translate-x-2" : "-translate-x-2"}`}`}
              >
                {s.title}
              </span>
            </div>
          );
        })}
      </div>

      <ol className="border-t border-white/10">
        {spots.map((s, i) => {
          const on = active === i;
          return (
            <li key={s.title} className="border-b border-white/10">
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group grid w-full grid-cols-[2.5rem_1fr] gap-4 py-5 text-left"
              >
                <span
                  className={`grid size-9 place-items-center rounded-full border font-display text-sm transition-all duration-300 ${
                    on ? "border-brand bg-brand text-white" : "border-white/25 text-white/60"
                  }`}
                >
                  {i + 1}
                </span>
                <span>
                  <span className={`block font-display text-2xl transition-colors duration-300 ${on ? "text-brand-light" : "text-white"}`}>
                    {s.title}
                  </span>
                  <span
                    className={`grid transition-all duration-500 ${on ? "mt-2 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <span className="overflow-hidden leading-relaxed text-white/65">{s.text}</span>
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
