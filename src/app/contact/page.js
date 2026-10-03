import { company, telHref, whatsappHref } from "@/data/site";
import { PageHero } from "@/components/ui";
import { Reveal } from "@/components/motion";
import EnquiryForm from "@/components/EnquiryForm";
import { ArrowUpRight, Mail, MapPin, Phone, WhatsApp } from "@/components/Icons";

export const metadata = {
  title: "Contact Us",
  description: "Visit Cape Decor in Mundka, New Delhi, or call +91 99109 56666 for doors, windows, window blinds and printed wallpapers.",
};

export default function ContactPage() {
  const cards = [
    { Icon: Phone, title: "Call us", lines: company.phones.map((p) => ({ label: p, href: telHref(p) })) },
    { Icon: Mail, title: "Email", lines: company.emails.map((e) => ({ label: e, href: `mailto:${e}` })) },
    { Icon: WhatsApp, title: "WhatsApp", lines: [{ label: "Chat with our team", href: whatsappHref(), external: true }] },
  ];

  return (
    <>
      <PageHero
        image="/products/Roman6.jpg"
        crumbs={[{ label: "Contact" }]}
        eyebrow="Contact us"
        title={<>Let&apos;s talk about <em>your space</em></>}
        intro="Visit our studio, call, or send an enquiry — we usually reply within a few hours."
      >
        <div className="flex flex-wrap gap-3">
          <a href={telHref(company.phones[0])} className="btn btn-primary">
            <Phone width={17} height={17} /> {company.phones[0]}
          </a>
          <a href="#locate" className="btn btn-ghost-light">
            <MapPin width={17} height={17} /> Locate us
          </a>
        </div>
      </PageHero>

      <section className="container-x grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
        <div className="space-y-4">
          {cards.map(({ Icon, title, lines }, i) => (
            <Reveal key={title} variant="left" delay={i * 100}>
              <div className="lift group flex gap-5 rounded-[1.5rem] border border-line bg-paper p-6">
                <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-plum text-brand-light transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                  <Icon width={21} height={21} />
                </span>
                <div>
                  <p className="font-display text-2xl text-ink">{title}</p>
                  <ul className="mt-1 space-y-0.5">
                    {lines.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                          className="break-all text-ink-soft transition-colors hover:text-brand"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal variant="left" delay={300}>
            <div className="relative overflow-hidden rounded-[1.5rem] bg-plum p-6 text-white">
              <div aria-hidden className="absolute -top-12 -right-12 size-40 rounded-full bg-brand-light/20 blur-2xl" />
              <div className="relative flex gap-5">
                <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-brand-light text-plum-deep">
                  <MapPin width={21} height={21} />
                </span>
                <div>
                  <p className="font-display text-2xl">Visit the studio</p>
                  <address className="mt-1 leading-relaxed text-white/70 not-italic">
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                    <br />
                    {company.address.line3}
                    <br />
                    <span className="text-white/45">{company.address.landmark}</span>
                  </address>
                  <a
                    href={company.maps.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-light hover:text-white"
                  >
                    Get directions <ArrowUpRight width={15} height={15} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="right">
          <div className="rounded-[2rem] border border-line bg-paper p-6 shadow-[0_30px_60px_-40px_rgb(42_35_38/0.35)] sm:p-10">
            <p className="eyebrow">Enquiry</p>
            <h2 className="mt-4 font-display text-4xl font-light text-ink md:text-5xl">
              Send us a <em className="text-brand">message</em>
            </h2>
            <p className="mt-3 mb-8 text-ink-soft">Tell us what you&apos;re looking for and we&apos;ll get back with options and a quote.</p>
            <EnquiryForm />
          </div>
        </Reveal>
      </section>

      <section id="locate" className="container-x scroll-mt-28 pb-20 md:pb-28">
        <Reveal variant="zoom">
          <div className="overflow-hidden rounded-[2rem] border border-line">
            <iframe
              src={company.maps.embed}
              title="Cape Decor location on Google Maps"
              className="block h-[440px] w-full grayscale-[0.5] sepia-[0.15]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
