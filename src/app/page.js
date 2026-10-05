import Image from "next/image";
import Link from "next/link";
import { categories, company, hero, partners, products, productsIn, stats } from "@/data/site";
import { SectionHeading } from "@/components/ui";
import { Counter, Reveal } from "@/components/motion";
import Typewriter from "@/components/Typewriter";
import CategoryPanels from "@/components/CategoryPanels";
import NeedFinder from "@/components/NeedFinder";
import DetailExplorer from "@/components/DetailExplorer";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, ArrowUpRight, Check, Home as HomeIcon, Shield, Sparkle, Tag } from "@/components/Icons";

const pillars = [
  { title: "Research", text: "We study materials, mechanisms and how people live, to bring the right products to Indian homes and offices." },
  { title: "Technology", text: "Ultra-modern machinery and in-house fabrication give every door, window and blind a precise fit and a lasting finish." },
  { title: "Experience", text: `Since ${company.founded}, customisation, installation and technical support stand behind everything we make.` },
];

const details = [
  { x: 46, y: 9, title: "Slim headrail", text: "Classic or decorative Fascia style, mounted inside or outside the window recess." },
  { x: 25, y: 25, title: "Hundreds of fabrics", text: "Prints, textures and solids — from soft light-filtering to full blackout." },
  { x: 50, y: 48, title: "Evenly stacking folds", text: "Stiffener rods keep the fabric smooth and stack it neatly every time it is raised." },
  { x: 22, y: 63, title: "Light where you want it", text: "Top-down/bottom-up and wireless motorised options give privacy without losing daylight." },
];

const materials = [
  {
    id: "upvc",
    title: "uPVC",
    lead: "Quiet, insulated & low-maintenance",
    img: "/products/upvc-sliding-door.jpg",
    facts: [
      "20-year warranty",
      "Up to 25 dB sound insulation (double glazed)",
      "U-value 0.63 – 1.6 W/m²K",
      "60 mm profiles with G.I. reinforcement",
      "Glass from 4 mm to 24 mm",
    ],
  },
  {
    id: "aluminium",
    title: "Aluminium",
    lead: "Slim, strong & made for big glass",
    img: "/products/aluminium-sliding-window.jpg",
    facts: [
      "40 mm & 50 mm casement · 29 mm & 40 mm sliding series",
      "Fixed glazing up to 3000 × 3000 mm",
      "Sash heights up to 3650 mm",
      "Single point or multipoint locking",
      "Powder, wood-grain or anodized finishes",
    ],
  },
];

const values = [
  { Icon: HomeIcon, title: "One partner, every opening", text: "Doors, windows, window blinds and printed wallpapers — designed to work together." },
  { Icon: Shield, title: "Trusted by thousands", text: "Homeowners, architects and dealers across India and Nepal rely on CAPE." },
  { Icon: Sparkle, title: "Quality products", text: "Individually tested before delivery, with leading profile and hardware brands." },
  { Icon: Tag, title: "Fair pricing", text: "Premium, custom-made products — direct from the manufacturer." },
];

const steps = [
  {
    icon: "chat",
    title: "Consult",
    text: "Tell us about your space and how you live in it. We help you choose the right doors, windows, window blinds or printed wallpapers.",
    points: ["Free consultation", "Samples & swatches", "Studio or site visit"],
    img: "/products/home-interior.jpg",
  },
  {
    icon: "ruler",
    title: "Measure",
    text: "Our team takes precise measurements on site, so every product is made for a perfect fit.",
    points: ["On-site measurement", "Technical advice"],
    img: "/products/vertical2.jpg",
  },
  {
    icon: "scissors",
    title: "Craft",
    text: "Everything is fabricated in-house with ultra-modern machinery and checked before it leaves.",
    points: ["In-house fabrication", "Individually tested"],
    img: "/products/aluminium-french-door.jpg",
  },
  {
    icon: "wrench",
    title: "Install",
    text: "Professional installation, a walkthrough of how everything works, and technical support long after.",
    points: ["Professional fitting", "After-sales support"],
    img: "/products/Trinity4.jpg",
  },
];

const inspiration = [
  { src: "/products/home-glass-house.jpg", label: "Aluminium System Doors & Windows", href: "/products#aluminium", aspect: "aspect-[3/4]" },
  { src: "/products/Roller1.jpg", label: "Roller Blinds", href: "/products/roller-blinds", aspect: "aspect-[4/3]" },
  { src: "/products/wallpaper-4.jpg", label: "Printed Wallpapers", href: "/products/customised-printed-wallpapers", aspect: "aspect-square" },
  { src: "/products/upvc-french-window.jpg", label: "uPVC French Windows", href: "/products/upvc-french-windows", aspect: "aspect-[3/4]" },
  { src: "/products/combi4.jpg", label: "Combi Blinds", href: "/products/combi-blinds", aspect: "aspect-[4/3]" },
  { src: "/products/aluminium-casement-window.jpg", label: "Aluminium Casement Windows", href: "/products/aluminium-casement-windows", aspect: "aspect-square" },
  { src: "/products/wooden3.jpg", label: "Wooden Venetian Blinds", href: "/products/wooden-venetian-blinds", aspect: "aspect-[3/4]" },
  { src: "/products/home-villa.jpg", label: "Doors & Windows", href: "/products#upvc", aspect: "aspect-square" },
];

export default function HomePage() {
  const panels = categories.map((c) => ({ ...c, products: productsIn(c.id), count: productsIn(c.id).length }));
  const blindPicks = productsIn("blinds").filter((p) => p.cover);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative isolate flex min-h-[min(calc(100svh-6rem),52rem)] items-center overflow-hidden bg-plum-deep text-white">
        <Image src={hero.image} alt="" fill priority sizes="100vw" className="kenburns -z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-plum-deep/90 via-plum-deep/60 to-plum-deep/15" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-plum-deep/70 via-transparent to-transparent" />

        <div className="container-x relative z-10 py-24 md:py-32">
          <p className="rise eyebrow text-brand-light!" style={{ animationDelay: "200ms" }}>
            {company.tagline}
          </p>
          <h1 className="rise mt-6 max-w-4xl font-display text-[3.1rem] leading-[1.02] font-light sm:text-7xl xl:text-[5.6rem]" style={{ animationDelay: "350ms" }}>
            {hero.lead}
            <br />
            <Typewriter words={hero.words} className="text-accent italic" />
          </h1>
          <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-white/80" style={{ animationDelay: "550ms" }}>
            {hero.intro}
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "700ms" }}>
            <Link href="/products" className="btn btn-primary">
              Explore products <ArrowRight width={18} height={18} />
            </Link>
            <Link href="/contact" className="btn btn-ghost-light">
              Contact us
            </Link>
          </div>

          <ul className="rise mt-14 hidden max-w-4xl grid-cols-4 gap-3 md:grid" style={{ animationDelay: "850ms" }}>
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/products#${c.id}`}
                  className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm backdrop-blur-md transition-colors hover:bg-white hover:text-plum"
                >
                  {c.short}
                  <ArrowUpRight width={15} height={15} className="shrink-0 transition-transform duration-300 group-hover:rotate-45" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div aria-hidden className="absolute inset-x-0 -bottom-px z-10 h-10 rounded-t-[2.5rem] bg-ivory md:h-14 md:rounded-t-[3.5rem]" />
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="container-x pt-10 pb-20 md:pb-28">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we make"
            title={<>Everything your <em>openings & walls</em> need</>}
            intro="Doors, windows, window blinds and printed wallpapers from one team — designed to work together, made to measure and installed by us."
          />
          <Reveal delay={200}>
            <Link href="/products" className="btn btn-outline">
              All {products.length} products <ArrowRight width={18} height={18} />
            </Link>
          </Reveal>
        </div>
        <Reveal>
          <CategoryPanels items={panels} />
        </Reveal>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative pr-8 pb-10 sm:pr-16 sm:pb-16">
            <Reveal variant="blind">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image src="/products/aluminium-french-door.jpg" alt="Aluminium French doors opening into a bedroom" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={300} className="absolute right-0 bottom-0 w-[48%]">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border-[6px] border-paper shadow-[0_30px_60px_-30px_rgb(42_35_38/0.5)]">
                <Image src="/products/combi1.jpg" alt="Combi blinds" fill sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={450} className="absolute top-8 -left-3 sm:-left-6">
              <span className="block rounded-full bg-plum px-5 py-2.5 text-sm text-white shadow-xl">Since {company.founded} · New Delhi</span>
            </Reveal>
          </div>

          <div>
            <SectionHeading
              eyebrow="Our philosophy"
              title={<>Be inspired. Be innovative. <em>Buy with confidence.</em></>}
              intro="It began with a simple curiosity — a desire to transform a window into a fashion statement with innovative function and impressive style. Today that idea shapes every door, window, window blind and wall we create."
            />
            <ol className="mt-10 border-t border-line">
              {pillars.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 110} className="border-b border-line">
                  <div className="grid grid-cols-[3rem_1fr] gap-4 py-6 md:grid-cols-[3rem_10rem_1fr]">
                    <span className="font-display text-lg text-brand italic">0{i + 1}</span>
                    <span className="font-display text-2xl text-ink">{p.title}</span>
                    <span className="col-start-2 leading-relaxed text-ink-soft md:col-start-3">{p.text}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={300}>
              <Link href="/about" className="group mt-10 inline-flex items-center gap-3 font-medium text-ink">
                Read our story
                <span className="grid size-11 place-items-center rounded-full bg-brand text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight width={18} height={18} />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= DOORS & WINDOWS: uPVC vs ALUMINIUM ================= */}
      <section className="relative isolate overflow-hidden bg-plum text-white">
        <div className="slats-light absolute inset-0 -z-10" />
        <div aria-hidden className="absolute -top-40 -left-40 -z-10 size-[36rem] rounded-full bg-brand/25 blur-3xl" />
        <div className="container-x py-20 md:py-28">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              dark
              eyebrow="New · Doors & Windows"
              title={<>Engineered for comfort. <em>Trusted for life.</em></>}
              intro="After 15 years of dressing windows, CAPE now makes the windows too — in uPVC and aluminium system profiles. Here's how the two compare."
            />
            <Reveal delay={200}>
              <a href="/catalogues/doors-windows/uPVC_Aluminium_Doors_Windows_Catalogue.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
                Download catalogue <ArrowUpRight width={18} height={18} />
              </a>
            </Reveal>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {materials.map((m, i) => (
              <Reveal key={m.id} delay={i * 150}>
                <article className="group grid h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-56">
                    <Image src={m.img} alt={`${m.title} doors and windows`} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col p-7 md:p-8">
                    <p className="font-display text-4xl font-light">{m.title}</p>
                    <p className="mt-1 text-brand-light">{m.lead}</p>
                    <ul className="mt-6 space-y-3 text-[0.95rem] text-white/80">
                      {m.facts.map((f) => (
                        <li key={f} className="flex gap-3">
                          <Check width={17} height={17} className="mt-0.5 shrink-0 text-brand-light" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/products#${m.id}`} className="mt-8 inline-flex items-center gap-2 font-medium text-white hover:text-brand-light">
                      View {m.id === "upvc" ? "uPVC" : "aluminium"} range <ArrowRight width={17} height={17} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center">
              <p className="shrink-0 text-xs font-semibold tracking-[0.25em] text-brand-light uppercase">In association with</p>
              <ul className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-4">
                {partners.map((p) => (
                  <li key={p.name} className="grid h-24 place-items-center rounded-2xl bg-white px-6 py-4 transition-transform duration-300 hover:-translate-y-1">
                    <Image src={p.logo} alt={`${p.name} — ${p.role}`} width={200} height={100} className="max-h-16 w-auto object-contain" />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= BLINDS (bento) ================= */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Window blinds"
              title={<>Blinds, <em>made to measure</em></>}
              intro="Every blind is made to your window's exact size, in the fabric and operating system you choose."
            />
            <Reveal delay={200}>
              <Link href="/products#blinds" className="btn btn-outline">
                All {productsIn("blinds").length} blinds <ArrowRight width={18} height={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid auto-rows-[13rem] grid-cols-2 gap-3 md:auto-rows-[16rem] md:gap-4 lg:grid-cols-4">
            {blindPicks.map((p, i) => {
              const big = i === 0;
              return (
                <Reveal key={p.slug} variant="zoom" delay={(i % 4) * 80} className={big ? "col-span-2 row-span-2" : ""}>
                  <Link href={`/products/${p.slug}`} className="group relative block size-full overflow-hidden rounded-[1.5rem] bg-sand">
                    <Image
                      src={p.cover}
                      alt={p.name}
                      fill
                      sizes={big ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                      className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-plum-deep/85 via-plum-deep/15 to-transparent" />
                    <span className="absolute top-4 right-4 grid size-10 scale-75 place-items-center rounded-full bg-paper text-ink opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:rotate-45 group-hover:opacity-100">
                      <ArrowUpRight width={16} height={16} />
                    </span>
                    <div className={`absolute inset-x-0 bottom-0 text-white ${big ? "p-6 md:p-9" : "p-4 md:p-5"}`}>
                      <span className="font-display text-sm text-brand-light italic">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className={`font-display leading-tight ${big ? "mt-1 text-3xl md:text-5xl" : "text-lg md:text-2xl"}`}>{p.name}</h3>
                      <p
                        className={`text-white/75 ${
                          big
                            ? "mt-3 max-w-md text-[0.95rem] leading-relaxed"
                            : "hidden max-h-0 overflow-hidden text-sm leading-snug opacity-0 transition-all duration-500 md:block md:group-hover:mt-1.5 md:group-hover:max-h-16 md:group-hover:opacity-100"
                        }`}
                      >
                        {p.short}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= DETAILS (pins) ================= */}
      <section className="relative isolate overflow-hidden bg-plum text-white">
        <div className="slats-light absolute inset-0 -z-10" />
        <div aria-hidden className="absolute top-1/2 -right-40 -z-10 size-[36rem] -translate-y-1/2 rounded-full bg-brand/25 blur-3xl" />
        <div className="container-x py-20 md:py-28">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              dark
              eyebrow="In the details"
              title={<>Crafted in <em>every detail</em></>}
              intro="Tap the numbers to see what goes into a CAPE Roman blind — and every product we make."
            />
            <Reveal delay={200}>
              <Link href="/products/roman-blinds" className="btn btn-primary">
                Explore Roman Blinds <ArrowRight width={18} height={18} />
              </Link>
            </Reveal>
          </div>
          <Reveal variant="blind">
            <DetailExplorer src="/products/Roman4.jpg" alt="Patterned Roman blind in a white kitchen" spots={details} />
          </Reveal>
        </div>
      </section>

      {/* ================= NEED FINDER ================= */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading
          eyebrow="Find the right fit"
          title={<>What does your <em>space need?</em></>}
          intro="Pick what matters most and we'll point you to the best doors, windows, window blinds or printed wallpapers for it."
          className="mb-14"
        />
        <Reveal>
          <NeedFinder />
        </Reveal>
      </section>

      {/* ================= WHY CAPE ================= */}
      <section className="container-x pb-20 md:pb-28">
        <Reveal className="grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ Icon, title, text }) => (
            <div key={title} className="group bg-paper p-8 transition-colors duration-500 hover:bg-brand-soft/60 md:p-10">
              <span className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand transition-all duration-500 group-hover:rotate-[10deg] group-hover:bg-brand group-hover:text-white">
                <Icon width={24} height={24} />
              </span>
              <h3 className="mt-8 font-display text-2xl text-ink">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{text}</p>
            </div>
          ))}
        </Reveal>
        <dl className="mt-6 grid grid-cols-3 rounded-[2rem] border border-line bg-paper">
          {stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col px-5 py-7 text-center md:py-9 ${i ? "border-l border-line" : ""}`}>
              <dt className="order-2 mt-1 text-xs tracking-[0.16em] text-ink-soft uppercase">{s.label}</dt>
              <dd className="order-1 font-display text-3xl font-light text-ink md:text-5xl">
                <Counter value={s.value} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="border-t border-line bg-paper py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="How it works"
            title={<>From first call <em>to final fit</em></>}
            intro="A simple, fully managed process — so all you have to do is enjoy the result."
            className="mb-16"
          />
          <ProcessTimeline steps={steps} />
        </div>
      </section>

      {/* ================= INSPIRATION ================= */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Inspiration"
            title={<>Spaces we&apos;ve <em>shaped</em></>}
            intro="Doors, windows, window blinds and printed wallpapers in real spaces. Tap any photo to explore the product."
            className="mb-14"
          />
          <div className="columns-2 gap-4 md:columns-3 md:gap-5 lg:columns-4">
            {inspiration.map((g, i) => (
              <Reveal key={g.src} delay={(i % 4) * 90} className="mb-4 break-inside-avoid md:mb-5">
                <Link href={g.href} className={`group relative block overflow-hidden rounded-[1.4rem] bg-sand ${g.aspect}`}>
                  <Image
                    src={g.src}
                    alt={g.label}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-plum-deep/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between gap-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="font-display text-lg leading-tight md:text-xl">{g.label}</span>
                    <ArrowUpRight width={18} height={18} className="shrink-0" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="border-y border-line bg-sand/50 py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* ================= PARTNER CTA ================= */}
      <section className="container-x py-20 md:py-28">
        <Reveal variant="zoom">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-plum-deep text-white">
            <Image src="/products/panel5.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-45" />
            <div className="absolute inset-0 -z-10 bg-linear-to-r from-plum-deep via-plum-deep/90 to-plum-deep/20" />
            <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:p-20">
              <div>
                <p className="eyebrow text-brand-light!">Channel Partner Programme</p>
                <h2 className="mt-5 font-display text-4xl leading-[1.02] font-light md:text-6xl">
                  Grow with CAPE as a <em className="text-accent">Sales Partner</em>
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
                  Since 2012 we have helped entrepreneurs build their own business with our wide, up-to-date range of wall & window products — at a budgeted investment.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <Link href="/sales-partner" className="btn btn-primary">
                  Apply now <ArrowRight width={18} height={18} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
