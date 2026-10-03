"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "./Icons";

// Four category panels side by side; the hovered/focused one widens to show details.
export default function CategoryPanels({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 lg:h-[36rem] lg:flex-row lg:gap-4">
      {items.map((c, i) => {
        const on = active === i;
        return (
          <div
            key={c.id}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className={`group relative min-h-80 overflow-hidden rounded-[1.75rem] bg-plum text-white transition-[flex-grow] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] lg:min-h-0 ${
              on ? "lg:flex-[3.2]" : "lg:flex-1"
            }`}
          >
            <Image
              src={c.cover}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover transition-transform duration-[1.2s] ${on ? "scale-100" : "scale-110"}`}
            />
            <div className={`absolute inset-0 bg-linear-to-t from-plum-deep via-plum-deep/95 to-plum-deep/40 transition-opacity duration-700 ${on ? "opacity-90" : "lg:opacity-100"}`} />

            {/* Collapsed label (desktop) */}
            <div
              className={`absolute inset-x-0 bottom-0 hidden items-end justify-between p-6 transition-opacity duration-300 lg:flex ${
                on ? "pointer-events-none opacity-0" : "opacity-100 delay-300"
              }`}
            >
              <span className="font-display text-sm text-brand-light italic">0{i + 1}</span>
              <span className="font-display text-2xl leading-tight [writing-mode:vertical-rl] rotate-180">{c.short}</span>
            </div>

            {/* Expanded content */}
            <div
              className={`relative flex h-full flex-col justify-end p-7 transition-all duration-500 md:p-10 ${
                on ? "lg:translate-y-0 lg:opacity-100 lg:delay-200" : "lg:pointer-events-none lg:translate-y-6 lg:opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 text-sm text-white/70">
                <span className="font-display text-brand-light italic">0{i + 1}</span>
                <span className="h-px w-8 bg-white/30" />
                <span>{c.count} {c.count === 1 ? "product" : "products"}</span>
              </div>
              <h3 className="mt-3 max-w-lg font-display text-3xl leading-[1.05] font-light md:text-5xl">{c.name}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-white/75">{c.intro}</p>
              <ul className="mt-5 hidden max-w-xl flex-wrap gap-2 md:flex">
                {c.products.slice(0, 5).map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      tabIndex={on ? undefined : -1}
                      className="inline-block rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm backdrop-blur transition-colors hover:bg-white hover:text-plum"
                    >
                      {p.name.replace(/^(Aluminium|uPVC) /, "")}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/products#${c.id}`}
                tabIndex={on ? undefined : -1}
                className="mt-7 inline-flex w-fit items-center gap-3 font-medium"
              >
                Explore {c.short}
                <span className="grid size-11 place-items-center rounded-full bg-brand-light text-plum-deep transition-transform duration-500 hover:rotate-45">
                  <ArrowUpRight width={18} height={18} />
                </span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
