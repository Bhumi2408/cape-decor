import Image from "next/image";
import Link from "next/link";
import { getCategory, products, whatsappHref } from "@/data/site";
import { PageHero } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { ArrowUpRight, Download, WhatsApp } from "@/components/Icons";

export const metadata = {
  title: "E-Catalogues",
  description: "Download Cape Decor e-catalogues for uPVC & Aluminium System Doors & Windows and every CAPE blind collection.",
};

export default function DownloadsPage() {
  const doorsWindows = getCategory("aluminium").catalogues[0];
  const withCatalogues = products.filter((p) => p.catalogues.length);
  const withoutCatalogues = products.filter((p) => !p.catalogues.length && !["aluminium", "upvc"].includes(p.category));
  const total = withCatalogues.reduce((n, p) => n + p.catalogues.length, 1);

  return (
    <>
      <PageHero
        image="/products/Roman7.jpg"
        crumbs={[{ label: "E-Catalogues" }]}
        eyebrow="Downloads"
        title={<>E-Catalogues &amp; <em>collections</em></>}
        intro={`${total} downloadable e-catalogues covering doors, windows and every blind fabric, pattern and design. Tap any one to open the PDF.`}
      />

      <section className="container-x space-y-6 py-16 md:py-24">
        {/* Doors & windows */}
        <Reveal id="doors-windows" className="scroll-mt-28">
          <span id="aluminium" className="block scroll-mt-28" />
          <span id="upvc" className="block scroll-mt-28" />
          <article className="grid overflow-hidden rounded-[1.75rem] bg-plum text-white md:grid-cols-[1fr_1.2fr]">
            <div className="relative min-h-64">
              <Image src="/products/home-villa.jpg" alt="Modern home with aluminium system doors and windows" fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="p-7 md:p-12">
              <p className="eyebrow text-brand-light!">New catalogue</p>
              <h2 className="mt-4 font-display text-4xl font-light md:text-5xl">
                uPVC &amp; Aluminium <em className="text-accent">Doors &amp; Windows</em>
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-white/70">
                Fixed, casement, French, sliding and tilt &apos;n&apos; turn systems — with full technical specifications for every series.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={doorsWindows.href} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <Download width={17} height={17} /> Download PDF
                </a>
                <Link href="/products#aluminium" className="btn btn-ghost-light">
                  View products <ArrowUpRight width={16} height={16} />
                </Link>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Blinds */}
        {withCatalogues.map((p, i) => (
          <Reveal key={p.slug} id={p.slug} delay={(i % 2) * 80} className="scroll-mt-28">
            <article className="lift group grid overflow-hidden rounded-[1.75rem] border border-line bg-paper md:grid-cols-[18rem_1fr]">
              <Link href={`/products/${p.slug}`} className="relative block aspect-[16/9] overflow-hidden md:aspect-auto">
                <Image src={p.cover} alt={p.name} fill sizes="(min-width: 768px) 18rem, 100vw" className="object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              </Link>
              <div className="p-6 md:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-display text-3xl font-light text-ink md:text-4xl">{p.name}</h2>
                  <Link href={`/products/${p.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-brand">
                    View product <ArrowUpRight width={15} height={15} />
                  </Link>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.catalogues.map((c) => (
                    <li key={c.href}>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-plum hover:bg-plum hover:text-brand-light"
                      >
                        <Download width={15} height={15} /> {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}

        {/* Everything else */}
        <Reveal>
          <div className="rounded-[1.75rem] bg-brand-soft/60 p-7 md:p-10">
            <h2 className="font-display text-3xl font-light text-ink">
              Looking for <em className="text-brand">something else?</em>
            </h2>
            <p className="mt-3 max-w-2xl text-ink-soft">
              We&apos;ll send swatches, designs and prices for these on WhatsApp:
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {withoutCatalogues.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`} className="inline-block rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-ink hover:border-plum">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={whatsappHref("Hello Cape Decor, please share catalogues and designs.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-7"
            >
              <WhatsApp width={18} height={18} /> Request designs
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
