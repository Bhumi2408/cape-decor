import Link from "next/link";
import { categories, products, productsIn, whatsappHref } from "@/data/site";
import { PageHero, ProductCard, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";

export const metadata = {
  title: "Products",
  description:
    "Explore Cape Decor aluminium and uPVC doors & windows, window blinds, mosquito mesh, strip curtains and printed wallpapers.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        image="/products/home-glass-house.jpg"
        crumbs={[{ label: "Products" }]}
        eyebrow="Our products"
        title={<>Doors, Windows, Window Blinds <em>&amp; Printed Wallpapers</em></>}
        intro={`${products.length} products across four categories — every one made to measure and installed by our own team.`}
      >
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm backdrop-blur transition-all hover:border-brand-light hover:bg-brand-light hover:text-plum-deep"
            >
              {c.short}
              <span className="grid size-6 place-items-center rounded-full bg-white/15 text-xs group-hover:bg-plum-deep/15">
                {productsIn(c.id).length}
              </span>
            </a>
          ))}
        </div>
      </PageHero>

      {categories.map((c, ci) => {
        const items = productsIn(c.id);
        return (
          <section key={c.id} id={c.id} className={`scroll-mt-24 py-16 md:py-24 ${ci % 2 ? "bg-paper" : ""}`}>
            <div className="container-x">
              <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <SectionHeading eyebrow={`0${ci + 1} — ${c.tagline}`} title={c.name} intro={c.intro} />
                <div className="flex shrink-0 items-center gap-5">
                  {c.catalogues.length > 0 && (
                    <a href={c.catalogues[0].href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand">
                      Catalogue <ArrowUpRight width={15} height={15} />
                    </a>
                  )}
                  <span className="font-display text-7xl font-light text-sand italic md:text-8xl">{String(items.length).padStart(2, "0")}</span>
                </div>
              </div>
              <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p, i) => (
                  <ProductCard key={p.slug} product={p} delay={(i % 3) * 110} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="container-x pb-20 md:pb-28">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-brand-soft/60 p-8 md:flex-row md:items-center md:p-12">
            <div>
              <p className="font-display text-3xl font-light text-ink md:text-4xl">
                Not sure what <em className="text-brand">suits you?</em>
              </p>
              <p className="mt-2 text-ink-soft">Tell us about your space — we&apos;ll recommend the right product, material and finish.</p>
            </div>
            <a href={whatsappHref("Hello Cape Decor, I need help choosing the right product.")} target="_blank" rel="noreferrer" className="btn btn-primary shrink-0">
              Ask an expert <ArrowRight width={18} height={18} />
            </a>
          </div>
        </Reveal>
        <p className="mt-8 text-center text-ink-soft">
          Looking for catalogues?{" "}
          <Link href="/downloads" className="font-medium text-brand underline underline-offset-4">
            Browse all e-catalogues
          </Link>
        </p>
      </section>
    </>
  );
}
