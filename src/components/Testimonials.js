"use client";

import { useEffect, useRef, useState } from "react";
import { stats, testimonials } from "@/data/site";
import { Counter } from "./motion";
import { ChevronLeft, ChevronRight, Quote } from "./Icons";

const initials = (name) => name.split(" ").map((n) => n[0]).join("");
const cities = [...new Set(testimonials.map((t) => t.city))];

// Summary on the left, a clean card carousel on the right.
export default function Testimonials() {
  const track = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const measure = () => {
    const el = track.current;
    if (!el) return;
    setPages(Math.max(1, Math.round(el.scrollWidth / el.clientWidth)));
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const go = (dir) => {
    const el = track.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    const atStart = el.scrollLeft <= 8;
    if (dir > 0 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else if (dir < 0 && atStart) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="grid gap-12 lg:grid-cols-[22rem_1fr] lg:gap-16">
      {/* Summary */}
      <div className="flex flex-col">
        <p className="eyebrow">Client stories</p>
        <h2 className="mt-5 font-display text-[2.6rem] leading-[1.05] font-light text-ink md:text-5xl">
          Trusted by homes <em className="text-brand">&amp; businesses</em>
        </h2>
        <p className="mt-5 leading-relaxed text-ink-soft">
          Homeowners, dealers and designers across India and Nepal share their experience of working with CAPE.
        </p>

        <div className="mt-8 flex items-baseline gap-3 border-t border-line pt-6">
          <span className="font-display text-5xl font-light text-ink">
            <Counter value={stats[0].value} />
          </span>
          <span className="text-sm text-ink-soft">{stats[0].label.toLowerCase()}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{cities.join(" · ")}</p>

        <div className="mt-8 flex items-center gap-3 lg:mt-auto lg:pt-10">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonials"
            className="grid size-12 place-items-center rounded-full border border-line bg-paper text-ink transition-colors hover:border-plum hover:bg-plum hover:text-white"
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonials"
            className="grid size-12 place-items-center rounded-full border border-line bg-paper text-ink transition-colors hover:border-plum hover:bg-plum hover:text-white"
          >
            <ChevronRight />
          </button>
          <div className="ml-3 flex gap-1.5" aria-hidden>
            {Array.from({ length: pages }, (_, i) => (
              <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i === page ? "w-8 bg-brand" : "w-3 bg-line"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={track}
        onScroll={measure}
        className="-mx-5 flex snap-x snap-mandatory gap-5 self-center overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] md:mx-0 md:scroll-px-0 md:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex w-[88%] shrink-0 snap-start flex-col rounded-[1.5rem] border border-line bg-paper p-7 transition-shadow duration-500 hover:shadow-[0_24px_48px_-28px_rgb(42_35_38/0.35)] sm:w-[calc(50%-10px)] md:p-9"
          >
            <span className="grid size-11 place-items-center rounded-full bg-brand-soft text-brand">
              <Quote width={18} height={18} />
            </span>
            <blockquote className="mt-6 flex-1 font-display text-[1.3rem] leading-[1.55] font-light text-ink">{t.text}</blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-plum font-display text-lg text-white">
                {initials(t.name)}
              </span>
              <span>
                <span className="block font-medium text-ink">{t.name}</span>
                <span className="block text-sm text-ink-soft">{t.city}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
