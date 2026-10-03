import Image from "next/image";
import Link from "next/link";
import { categories, company, partners, productsIn, stats, team } from "@/data/site";
import { PageHero, SectionHeading } from "@/components/ui";
import { Counter, Reveal } from "@/components/motion";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import TeamPhoto from "@/components/TeamPhoto";

export const metadata = {
  title: "About Us",
  description: "Since 2011, CAPE DÉCOR has made custom doors, windows, window blinds and printed wallpapers in New Delhi.",
};

const services = [
  { title: "Residential", text: "Doors, windows, window blinds and printed wallpapers that make every room of your home quieter, brighter and more beautiful.", img: "/products/aluminium-sliding-door.jpg" },
  { title: "Commercial", text: "Durable systems for retail, hospitality, healthcare and warehouses — from sliding doors to strip curtains.", img: "/products/upvc-french-door.jpg" },
  { title: "Office", text: "Light control, privacy, acoustic comfort and glare reduction for productive, good-looking workplaces.", img: "/products/vertical3.jpg" },
];

const pillars = [
  { k: "Our mission", v: "To provide the best quality products to our valued customers within a reasonable time frame and price range." },
  { k: "Our vision", v: "CAPE DÉCOR is a professionally managed company, committed to total satisfaction and enhancing market value." },
  { k: "Our promise", v: "We use internationally acclaimed, recognised and affordable products — and our prompt service puts us ahead." },
];

const timeline = [
  { year: "2011", text: "CAPE DÉCOR is established as a small-scale registered industry of door & window fashions." },
  { year: "2012", text: "Launch of the Channel Partner Programme, helping entrepreneurs build their own business with CAPE." },
  { year: "Growth", text: "Motorised blinds, mosquito mesh, industrial blinds and printed wallpapers join the range." },
  { year: "2026", text: "With 15 years of experience, CAPE expands its presence in the field of uPVC & aluminium system doors and windows." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/products/home-glass-house.jpg"
        crumbs={[{ label: "About" }]}
        eyebrow="Be inspired · Be innovative · Buy with confidence"
        title={<>Framing <em>happy homes</em></>}
        intro={`Since ${company.founded}, CAPE DÉCOR has combined research, technology and experience to create doors, windows, window blinds and printed wallpapers — because your home deserves the best.`}
      />

      {/* Story */}
      <section className="container-x py-16 md:py-28">
        <div className="grid items-end gap-8 border-b border-line pb-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:pb-16">
          <SectionHeading eyebrow="Our story" title={<>Where research <em>meets craft</em></>} />
          <Reveal as="p" delay={150} className="font-display text-2xl leading-snug font-light text-ink md:text-[1.9rem]">
            It began with a simple curiosity — an inquiring desire to transform a window into a fashion statement with innovative
            functionality and impressive style. That desire grew into a vision to create wall &amp; window solutions without limitations.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal variant="blind" className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:aspect-auto lg:h-full lg:min-h-[36rem]">
              <Image src="/products/Skylight1.jpg" alt="Honeycomb skylight blinds in a bright room" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </Reveal>

          <div className="flex flex-col lg:col-span-7">
            <div className="grid gap-6 text-[1.05rem] leading-[1.85] text-ink-soft md:grid-cols-2 md:gap-10">
              <Reveal as="p">
                CAPE DÉCOR was established in 2011 as a small-scale registered industry specialising in door and window fashions. Our range covers all types of window blinds, motorised blinds, sliding mosquito meshes, industrial blinds, motorised curtain tracks and customised printed wallpapers — and, with 15 years of industry experience, we also offer uPVC & aluminium system doors and windows.
              </Reveal>
              <Reveal as="p" delay={100}>
                Expertise in customisation, fabrication, installation and technical support delivers outstanding products with our hallmarks
                of design, performance and exceptional durability — for offices as well as homes. Our products solve everyday needs, from
                privacy to safety, while giving your space a stylish finish.
              </Reveal>
            </div>

            <dl className="mt-10 grid grid-cols-3 border-y border-line">
              {stats.map((s, i) => (
                <div key={s.label} className={`flex flex-col py-6 ${i ? "border-l border-line pl-5 md:pl-8" : "pr-5"}`}>
                  <dt className="order-2 mt-1 text-xs tracking-[0.16em] text-ink-soft uppercase">{s.label}</dt>
                  <dd className="order-1 font-display text-3xl font-light text-ink md:text-5xl">
                    <Counter value={s.value} />
                  </dd>
                </div>
              ))}
            </dl>

            <Reveal className="mt-10">
              <p className="text-xs font-semibold tracking-[0.25em] text-brand uppercase">What we make</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {categories.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/products#${c.id}`}
                      className="flex h-full items-center justify-between gap-3 rounded-2xl border border-line bg-paper px-5 py-4 text-ink transition-colors hover:border-plum hover:bg-plum hover:text-white"
                    >
                      <span>{c.name}</span>
                      <span className="text-sm opacity-60">{productsIn(c.id).length}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="blind" className="mt-10 lg:mt-auto lg:pt-10">
              <div className="relative aspect-[16/7] overflow-hidden rounded-[1.5rem]">
                <Image src="/products/aluminium-casement-window.jpg" alt="Aluminium casement window opening onto a garden" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission, vision, strengths */}
      <section className="relative isolate overflow-hidden bg-plum py-20 text-white md:py-28">
        <div className="slats-light absolute inset-0 -z-10" />
        <div className="container-x">
          <SectionHeading dark align="center" eyebrow="What drives us" title={<>Mission, vision <em>&amp; promise</em></>} />
          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.k} delay={i * 130} className="group bg-plum p-8 transition-colors duration-500 hover:bg-plum-soft md:p-10">
                <span className="font-display text-6xl font-light text-brand-light/40 italic transition-colors group-hover:text-brand-light">0{i + 1}</span>
                <h3 className="mt-6 font-display text-3xl">{p.k}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{p.v}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mx-auto mt-16 max-w-3xl text-center">
              <p className="eyebrow justify-center text-brand-light!">Our strengths</p>
              <p className="mt-5 font-display text-3xl leading-snug font-light md:text-4xl">
                Ultra-modern machinery, in-house manufacturing and <em className="text-accent">every product individually tested</em> before it
                reaches your door.
              </p>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/65">
                A self-imposed high standard of quality, adequate stock levels and strict service parameters — with constant investment in
                R&amp;D so our products combine design with function for years to come.
              </p>
            </div>
          </Reveal>

          <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-10 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 mt-2 text-xs tracking-[0.18em] text-white/50 uppercase">{s.label}</dt>
                <dd className="order-1 font-display text-4xl font-light text-brand-light md:text-6xl">
                  <Counter value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Journey + partners */}
      <section className="container-x py-20 md:py-28">
        <SectionHeading eyebrow="Our journey" title={<>Fifteen years, <em>one vision</em></>} />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden className="absolute top-[1.35rem] right-0 left-0 hidden h-px bg-line md:block" />
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.year} delay={i * 120} className="relative">
              <span className={`relative grid size-11 place-items-center rounded-full border-4 border-ivory ${i === timeline.length - 1 ? "bg-brand" : "bg-plum"}`}>
                <span className="size-2 rounded-full bg-white" />
              </span>
              <p className="mt-5 font-display text-4xl font-light text-ink">{t.year}</p>
              <p className="mt-2 leading-relaxed text-ink-soft">{t.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={150}>
          <div className="mt-20 grid items-center gap-6 rounded-[2rem] border border-line bg-paper p-7 md:grid-cols-[16rem_1fr] md:p-10">
            <div>
              <p className="eyebrow">Our partners</p>
              <p className="mt-3 font-display text-3xl font-light text-ink">
                Aligned with the <em className="text-brand">finest</em>
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {partners.map((p) => (
                <li key={p.name} className="grid h-24 place-items-center rounded-2xl bg-white px-6 py-4 transition-transform duration-300 hover:-translate-y-1">
                  <Image src={p.logo} alt={`${p.name} — ${p.role}`} width={200} height={100} className="max-h-16 w-auto object-contain" />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Services */}
      <section className="container-x pb-20 md:pb-28">
        <SectionHeading eyebrow="Professional services" title={<>Spaces we <em>transform</em></>} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 130}>
              <article className="group relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-plum text-white">
                <Image src={s.img} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-plum-deep via-plum-deep/40 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="mb-4 grid size-11 place-items-center rounded-full bg-brand-light text-plum-deep transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight width={18} height={18} />
                  </span>
                  <h3 className="font-display text-4xl font-light">{s.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden leading-relaxed text-white/75 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                    {s.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      {/* <section className="bg-paper py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Team power"
            title={<>The people <em>behind CAPE</em></>}
            intro="Our people are our greatest strength. Over the years we have built a team with deep expertise in wall & window solutions."
          />
          <ul className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-3">
            {team.map((m, i) => (
              <Reveal as="li" key={m.name} delay={i * 130} className={i === 1 ? "sm:mt-12" : ""}>
                <figure className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-sand">
                    <TeamPhoto src={m.photo} name={m.name} />
                    <div className="absolute inset-0 bg-linear-to-t from-plum-deep/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <figcaption className="mt-5 flex items-baseline justify-between gap-3 border-b border-line pb-4">
                    <span className="font-display text-2xl text-ink">{m.name}</span>
                    <span className="text-xs font-semibold tracking-[0.22em] text-brand uppercase">{m.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-14 text-center">
            <Link href="/products" className="btn btn-dark">
              Explore our products <ArrowRight width={18} height={18} />
            </Link>
          </Reveal>
        </div>
      </section> */}
    </>
  );
}
