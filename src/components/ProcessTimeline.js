"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Chat, Ruler, Scissors, Wrench } from "./Icons";

const icons = { chat: Chat, ruler: Ruler, scissors: Scissors, wrench: Wrench };

// Sticky photo on the left that changes with the step in view; the line on the
// right fills as you scroll through the steps.
export default function ProcessTimeline({ steps }) {
  const list = useRef(null);
  const line = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const items = [...list.current.querySelectorAll("[data-step]")];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number(e.target.dataset.step));
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    items.forEach((el) => io.observe(el));

    let raf = 0;
    const update = () => {
      raf = 0;
      if (!list.current) return;
      const r = list.current.getBoundingClientRect();
      const p = (window.innerHeight * 0.5 - r.top) / r.height;
      if (line.current) line.current.style.transform = `scaleY(${Math.min(1, Math.max(0, p))})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
      <div className="hidden lg:block">
        <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand">
          {steps.map((s, i) => (
            <Image
              key={s.title}
              src={s.img}
              alt=""
              fill
              sizes="45vw"
              className={`object-cover transition-all duration-1000 ${active === i ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-t from-plum-deep/70 via-transparent to-transparent" />
          <div className="absolute inset-x-8 bottom-8 flex items-end justify-between text-white">
            <span key={active} className="rise font-display text-4xl font-light">{steps[active].title}</span>
            <span className="font-display text-7xl leading-none font-light text-white/30 italic">0{active + 1}</span>
          </div>
        </div>
      </div>

      <ol ref={list} className="relative pl-12 md:pl-16">
        <span aria-hidden className="absolute top-2 bottom-2 left-[1.1rem] w-px bg-line md:left-[1.47rem]" />
        <span
          ref={line}
          aria-hidden
          className="absolute top-2 bottom-2 left-[1.1rem] w-px origin-top scale-y-0 bg-brand md:left-[1.47rem]"
        />
        {steps.map(({ icon, title, text, points }, i) => {
          const Icon = icons[icon];
          return (
          <li key={title} data-step={i} className="relative pb-16 last:pb-0 md:pb-24">
            <span
              className={`absolute top-0 -left-12 grid size-9 place-items-center rounded-full border transition-all duration-500 md:-left-16 md:size-12 ${
                active >= i ? "border-brand bg-brand text-white" : "border-line bg-paper text-ink-soft"
              }`}
            >
              <Icon width={18} height={18} />
            </span>
            <p className="text-xs font-semibold tracking-[0.25em] text-brand uppercase">Step 0{i + 1}</p>
            <h3 className={`mt-3 font-display text-4xl font-light transition-colors duration-500 md:text-5xl ${active === i ? "text-ink" : "text-ink/40"}`}>
              {title}
            </h3>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">{text}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {points.map((pt) => (
                <li key={pt} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-ink-soft">
                  {pt}
                </li>
              ))}
            </ul>
          </li>
          );
        })}
      </ol>
    </div>
  );
}
