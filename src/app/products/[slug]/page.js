import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { company, getCategory, getProduct, products, productsIn, telHref, whatsappHref } from "@/data/site";
import Gallery from "@/components/Gallery";
import { PageHero, ProductCard, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { ProductVisual } from "@/components/ProductArt";
import { ArrowRight, ArrowUpRight, Phone, WhatsApp } from "@/components/Icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.short,
    openGraph: { images: [product.cover ?? getCategory(product.category).cover] },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const siblings = productsIn(product.category);
  const index = siblings.findIndex((p) => p.slug === slug);
  const related = [
    ...[1, 2, 3].map((n) => siblings[(index + n) % siblings.length]).filter((p) => p.slug !== slug),
    ...products.filter((p) => p.category !== product.category && p.cover),
  ]
    .filter((p, i, arr) => arr.findIndex((q) => q.slug === p.slug) === i)
    .slice(0, 3);
  const catalogueAnchor = product.catalogues.length ? product.slug : category.catalogues.length ? category.id : null;
  const enquire = whatsappHref(`Hello Cape Decor, I'm interested in ${product.name}. Please share details and pricing.`);
  const [lead, ...rest] = product.description;

  return (
    <>
      <PageHero
        image={product.images[1] ?? product.cover ?? category.hero}
        crumbs={[{ label: "Products", href: "/products" }, { label: category.short, href: `/products#${category.id}` }, { label: product.name }]}
        eyebrow={category.name}
        title={product.name}
        intro={product.short}
      >
        <div className="flex flex-wrap gap-3">
          <a href={enquire} target="_blank" rel="noreferrer" className="btn btn-primary">
            <WhatsApp width={18} height={18} /> Enquire now
          </a>
          {catalogueAnchor && (
            <Link href={`/downloads#${catalogueAnchor}`} className="btn btn-ghost-light">
              Browse catalogues <ArrowUpRight width={16} height={16} />
            </Link>
          )}
        </div>
      </PageHero>

      {/* Intro: statement + portrait image */}
      <section className="container-x py-16 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">The story</p>
            </Reveal>
            <Reveal delay={100}>
              <p
                className={`mt-8 font-display text-[1.9rem] leading-[1.3] font-light text-ink md:text-[2.4rem] ${
                  /^[A-Z]/.test(lead)
                    ? "first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-display first-letter:text-[4.6rem] first-letter:leading-[0.8] first-letter:text-brand"
                    : ""
                }`}
              >
                {lead}
              </p>
            </Reveal>
          </div>
          <div className="relative">
            <Reveal variant="blind">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <ProductVisual product={product} sizes="(min-width: 1024px) 40vw, 100vw" />
              </div>
            </Reveal>
            <span className="absolute -bottom-5 -left-3 rounded-full bg-plum px-5 py-2.5 font-display text-sm text-white italic shadow-xl md:-left-8">
              {product.cover ? "Made to measure" : "Photos coming soon"}
            </span>
          </div>
        </div>
      </section>

      {/* Options & systems */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="Options & systems"
              title={<>Tailored to <em>how you live</em></>}
              intro="Choose the system and finish that suit your space — every option is made to your exact size."
            />
          </div>
          <ol className="border-t border-line">
            {product.options.map((o, i) => (
              <Reveal as="li" key={o} delay={i * 70} className="group border-b border-line">
                <div className="flex items-center gap-6 py-6 transition-all duration-500 group-hover:pl-3">
                  <span className="font-display text-lg text-brand italic">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 font-display text-2xl font-light text-ink md:text-3xl">{o}</span>
                  <span className="h-px w-0 bg-brand transition-all duration-500 group-hover:w-12" />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Technical specifications */}
      {product.specs && (
        <section className="container-x pt-16 md:pt-28">
          <SectionHeading eyebrow="Technical information" title={<>Built to <em>spec</em></>} />
          <Reveal className="mt-10 overflow-x-auto rounded-[1.5rem] border border-line bg-paper">
            <table className="w-full min-w-[34rem] text-left">
              <thead>
                <tr className="border-b border-line bg-sand/50 text-xs tracking-[0.18em] text-ink-soft uppercase">
                  <th scope="col" className="px-6 py-4 font-semibold">Feature</th>
                  {product.specs.columns.map((c) => (
                    <th key={c} scope="col" className="px-6 py-4 font-semibold">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {product.specs.rows.map(([label, ...values]) => (
                  <tr key={label} className="border-b border-line transition-colors last:border-b-0 hover:bg-brand-soft/40">
                    <th scope="row" className="px-6 py-4 font-medium text-ink">{label}</th>
                    {values.map((v, i) => (
                      <td key={i} className="px-6 py-4 text-ink-soft">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </section>
      )}

      {/* Lookbook */}
      {product.images.length >= 3 && (
      <section className="container-x py-16 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Lookbook" title={<>{product.name} <em>in real rooms</em></>} />
          <Reveal delay={150}>
            <p className="max-w-xs text-ink-soft">Tap any photo to view it full screen.</p>
          </Reveal>
        </div>
        <Reveal>
          <Gallery images={product.images} name={product.name} />
        </Reveal>
      </section>
      )}

      {/* More detail + pull quote */}
      {(rest.length > 0 || product.highlight) && (
        <section className={`container-x pb-16 md:pb-28 ${product.images.length >= 3 ? "" : "pt-16 md:pt-28"}`}>
          <div className={product.highlight ? "grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20" : ""}>
            {rest.length > 0 && (
              <div>
                <Reveal>
                  <p className="eyebrow">Good to know</p>
                </Reveal>
                <div
                  className={`mt-8 text-[1.1rem] leading-[1.9] text-ink-soft ${
                    product.highlight || rest.length === 1 ? "max-w-3xl space-y-6" : "gap-14 md:columns-2 [&>p]:mb-6 [&>p]:break-inside-avoid"
                  }`}
                >
                  {rest.map((para, i) => (
                    <Reveal as="p" key={i} delay={i * 100}>
                      {para}
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
            {product.highlight && (
              <Reveal variant="right" className="lg:self-center">
                <figure className="relative rounded-[2rem] bg-brand-soft/70 p-8 md:p-10">
                  <span aria-hidden className="absolute -top-6 left-8 font-display text-8xl leading-none text-brand/40">&ldquo;</span>
                  <figcaption className="text-xs font-semibold tracking-[0.25em] text-brand uppercase">Pro tip</figcaption>
                  <p className="mt-4 font-display text-2xl text-ink">{product.highlight.title}</p>
                  <p className="mt-3 leading-relaxed text-ink-soft">{product.highlight.text}</p>
                </figure>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Consultation */}
      <section className={`container-x pb-16 md:pb-28 ${product.images.length < 3 && product.description.length < 2 && !product.highlight ? "pt-16 md:pt-28" : ""}`}>
        <Reveal variant="zoom">
          <div className="relative isolate grid overflow-hidden rounded-[2rem] bg-plum text-white lg:grid-cols-2">
            <div aria-hidden className="absolute -top-24 -left-24 -z-10 size-80 rounded-full bg-brand/30 blur-3xl" />
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="eyebrow text-brand-light!">Free consultation</p>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] font-light md:text-5xl">
                Picture it in <em className="text-accent">your space</em>
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
                Share your sizes and a photo of the space — we&apos;ll suggest the right system, finish and a quote.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={enquire} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <WhatsApp width={18} height={18} /> WhatsApp us
                </a>
                <a href={telHref(company.phones[0])} className="btn btn-ghost-light">
                  <Phone width={16} height={16} /> {company.phones[0]}
                </a>
              </div>
            </div>
            <div className="relative min-h-72">
              <Image src={product.images[2] ?? category.hero} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-r from-plum via-plum/20 to-transparent max-lg:bg-linear-to-b" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Continue exploring */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between gap-4">
            <SectionHeading eyebrow="Continue exploring" title={<>More from <em>{category.short}</em></>} />
            <Link href={`/products#${category.id}`} className="hidden items-center gap-2 font-medium text-ink hover:text-brand sm:inline-flex">
              View all <ArrowRight width={18} height={18} />
            </Link>
          </div>
          <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i * 110} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
