import Image from "next/image";
import Link from "next/link";
import { Blinds } from "./effects";
import { ProductVisual } from "./ProductArt";
import { Reveal } from "./motion";
import { ArrowUpRight, ChevronRight } from "./Icons";

export function SectionHeading({ eyebrow, title, intro, align = "left", dark = false, className = "" }) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow ${dark ? "text-brand-light!" : ""} ${centered ? "justify-center" : ""}`}>{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`mt-5 font-display text-[2.6rem] leading-[1.02] font-light tracking-[-0.01em] md:text-6xl ${
            dark ? "text-white [&_em]:text-accent" : "text-ink [&_em]:text-brand"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p className={`mt-6 text-[1.1rem] leading-relaxed ${dark ? "text-white/65" : "text-ink-soft"}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

// Full-bleed image hero used at the top of every inner page.
export function PageHero({ eyebrow, title, intro, crumbs = [], image, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-plum-deep text-white">
      {image && (
        <Image src={image} alt="" fill priority sizes="100vw" className="kenburns -z-20 object-cover opacity-70" />
      )}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-plum-deep via-plum-deep/85 to-plum-deep/30" />
      <div className="slats-light absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -bottom-32 -left-24 -z-10 size-[28rem] rounded-full bg-brand-light/15 blur-3xl" />
      <Blinds count={12} color="var(--color-plum-deep)" />

      <div className="container-x relative z-10 pt-12 pb-24 md:pt-20 md:pb-32 lg:pb-36">
        <nav
          aria-label="Breadcrumb"
          className="rise inline-flex flex-wrap items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur-md"
          style={{ animationDelay: "300ms" }}
        >
          <Link href="/" className="transition-colors hover:text-brand-light">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight width={13} height={13} className="opacity-50" />
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-brand-light">{c.label}</Link>
              ) : (
                <span className="text-brand-light">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        {eyebrow && (
          <div className="mt-10">
            <p className="rise eyebrow text-brand-light!" style={{ animationDelay: "450ms" }}>
              {eyebrow}
            </p>
          </div>
        )}
        <h1
          className="rise mt-5 max-w-4xl font-display text-5xl leading-[0.98] font-light tracking-[-0.01em] md:text-7xl lg:text-[5.5rem] [&_em]:text-accent"
          style={{ animationDelay: "550ms" }}
        >
          {title}
        </h1>
        {intro && (
          <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-white/70" style={{ animationDelay: "700ms" }}>
            {intro}
          </p>
        )}
        {children && (
          <div className="rise mt-9" style={{ animationDelay: "850ms" }}>
            {children}
          </div>
        )}
      </div>

      {/* Scroll cue */}
      <div aria-hidden className="absolute right-8 bottom-16 z-10 hidden flex-col items-center gap-3 text-[0.65rem] tracking-[0.3em] text-white/50 uppercase md:flex">
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <span className="relative h-14 w-px overflow-hidden bg-white/20">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_2s_ease-in-out_infinite] bg-brand-light" />
        </span>
      </div>

      {/* Curved bottom edge */}
      <div aria-hidden className="absolute inset-x-0 -bottom-px z-10 h-8 rounded-t-[2rem] bg-ivory md:h-12 md:rounded-t-[3rem]" />
    </section>
  );
}

export function ProductCard({ product, index, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/products/${product.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-sand">
          <ProductVisual
            product={product}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110"
          />
          {/* Slat sweep on hover */}
          <div className="absolute inset-0 flex flex-col">
            {Array.from({ length: 6 }, (_, i) => (
              <span
                key={i}
                className="flex-1 origin-top scale-y-0 bg-plum-deep/35 transition-transform duration-500 group-hover:scale-y-100"
                style={{ transitionDelay: `${i * 40}ms` }}
              />
            ))}
          </div>
          {index !== undefined && (
            <span className="absolute top-4 left-4 rounded-full bg-paper/90 px-3 py-1 font-display text-sm text-ink italic backdrop-blur">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between p-5 text-white transition-transform duration-500 group-hover:translate-y-0">
            <span className="text-sm font-medium tracking-wide">View details</span>
            <span className="grid size-11 place-items-center rounded-full bg-brand-light text-plum-deep transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight width={18} height={18} />
            </span>
          </span>
        </div>
        <div className="mt-5">
          <h3 className="font-display text-[1.7rem] leading-tight text-ink">
            <span className="bg-linear-to-r from-brand to-brand bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
              {product.name}
            </span>
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{product.short}</p>
        </div>
      </Link>
    </Reveal>
  );
}
