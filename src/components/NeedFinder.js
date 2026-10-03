"use client";

import Link from "next/link";
import { useState } from "react";
import { getProduct, needs } from "@/data/site";
import { ArrowUpRight } from "./Icons";
import { ProductVisual } from "./ProductArt";

// "What does your window need?" — pick a need, get three matching products.
export default function NeedFinder() {
  const [active, setActive] = useState(needs[0].id);
  const need = needs.find((n) => n.id === active);
  const picks = need.slugs.map(getProduct);

  return (
    <div className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-14">
      <div role="tablist" aria-label="What your space needs" className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
        {needs.map((n, i) => (
          <button
            key={n.id}
            type="button"
            role="tab"
            aria-selected={active === n.id}
            onClick={() => setActive(n.id)}
            className={`group flex items-center gap-4 rounded-full border px-5 py-2.5 text-left transition-all duration-300 lg:rounded-2xl lg:border-transparent lg:px-5 lg:py-4 ${
              active === n.id
                ? "border-plum bg-plum text-white lg:shadow-[0_20px_40px_-20px_rgb(42_35_38/0.6)]"
                : "border-line bg-paper text-ink-soft hover:text-ink lg:bg-transparent lg:hover:bg-sand/60"
            }`}
          >
            <span className={`hidden font-display text-sm italic lg:inline ${active === n.id ? "text-brand-light" : "text-brand"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[0.95rem] font-medium lg:font-display lg:text-xl lg:font-normal">{n.label}</span>
          </button>
        ))}
      </div>

      <div>
        <p key={`t-${active}`} className="rise font-display text-2xl font-light text-ink md:text-3xl">
          {need.text}
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {picks.map((p, i) => (
            <Link
              key={`${active}-${p.slug}`}
              href={`/products/${p.slug}`}
              className="rise group block"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-sand sm:aspect-[3/4]">
                <ProductVisual
                  product={p}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 100vw"
                  className="transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-plum-deep/85 via-plum-deep/10 to-transparent" />
                {i === 0 && (
                  <span className="absolute top-4 left-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-medium text-brand backdrop-blur">
                    Best match
                  </span>
                )}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-white">
                  <span className="font-display text-2xl leading-tight">{p.name}</span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:bg-brand-light group-hover:text-plum-deep">
                    <ArrowUpRight width={17} height={17} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
