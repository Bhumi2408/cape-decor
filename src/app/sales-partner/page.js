import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/motion";
import EnquiryForm from "@/components/EnquiryForm";
import { Check } from "@/components/Icons";

export const metadata = {
  title: "Become a Sales Partner",
  description: "Join the Cape Decor network of sales partners — furnishing dealers, retailers, interior designers, architects and distributors.",
};

const perks = [
  "Doors, Windows, Window Blinds & Printed Wallpapers — one supplier",
  "Hundreds of fabrics and ready e-catalogues",
  "Custom fabrication & manufacturer pricing",
  "Installation guidance and technical support",
];

export default function SalesPartnerPage() {
  return (
    <>
      <PageHero
        image="/products/Trinity2.jpg"
        crumbs={[{ label: "Become a Partner" }]}
        eyebrow="Dealership"
        title={<>Become a CAPE <em>Sales Partner</em></>}
        intro="We cultivate trust in every endeavour. If you have strong entrepreneurial skills, we would love to hear from you."
      >
        <a href="#apply" className="btn btn-primary">Apply now</a>
      </PageHero>

      <section className="container-x grid gap-14 py-16 md:py-24 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Why partner with us" title={<>A lifestyle in <em>every room</em></>} />
          <div className="mt-8 space-y-5 leading-[1.85] text-ink-soft">
            <Reveal as="p" className="font-display text-2xl leading-snug font-light text-ink">
              Since 2012, our Channel Partner Programme has helped entrepreneurs build their own business with CAPE.
            </Reveal>
            <Reveal as="p" delay={100}>
              Join a growing network across India and offer your customers our vast, up-to-date range of wall & window products — at a budgeted investment. CAPE combines the latest
              materials, finishes and designs with prompt service and technical support.
            </Reveal>
          </div>
          <ul className="mt-9 space-y-3">
            {perks.map((p, i) => (
              <Reveal as="li" key={p} variant="left" delay={i * 90}>
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 transition-colors hover:border-brand-light">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-plum text-brand-light">
                    <Check width={16} height={16} />
                  </span>
                  <span className="text-ink">{p}</span>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal variant="blind" className="mt-10">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.75rem]">
              <Image src="/products/panel2.jpg" alt="Panel blinds in a living space" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" id="apply" className="scroll-mt-28 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[2rem] border border-line bg-paper p-6 shadow-[0_30px_60px_-40px_rgb(42_35_38/0.35)] sm:p-10">
            <p className="eyebrow">Dealership form</p>
            <h2 className="mt-4 font-display text-4xl font-light text-ink md:text-5xl">
              Let&apos;s <em className="text-brand">grow together</em>
            </h2>
            <p className="mt-3 mb-8 text-ink-soft">Share a few details and our team will reach out.</p>
            <EnquiryForm variant="partner" />
          </div>
        </Reveal>
      </section>
    </>
  );
}
