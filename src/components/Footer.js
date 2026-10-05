import Image from "next/image";
import Link from "next/link";
import { categories, company, nav, telHref, whatsappHref } from "@/data/site";
import { Reveal } from "./motion";
import { ArrowUpRight, Facebook, Instagram, Youtube, Mail, MapPin, Phone, WhatsApp } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-plum text-white/65">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-brand-light/10 blur-3xl" />

      {/* CTA band */}
      <div className="container-x relative">
        <div className="grid items-end gap-10 border-b border-white/10 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="eyebrow text-brand-light!">Let&apos;s transform your space</p>
            <h2 className="mt-5 font-display text-5xl leading-[1] font-light text-white md:text-7xl">
              Made to measure. <em className="text-accent">Made to last.</em>
            </h2>
          </Reveal>
          <Reveal delay={150} className="flex flex-wrap gap-3 lg:justify-end">
            <a href={whatsappHref()} target="_blank" rel="noreferrer" className="btn btn-primary">
              <WhatsApp width={18} height={18} /> Chat on WhatsApp
            </a>
            <Link href="/contact" className="btn btn-ghost-light">
              Visit our studio
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="container-x relative grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <div className="inline-block">
            <Image src="/white-logo.webp" alt="Cape Grade Decor" width={2546} height={688} className="h-16 w-auto" />
          </div>
          <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed">
            Since {company.founded}, CAPE has combined research, technology and experience to create custom doors, windows,
            blinds and wallpapers for homes and offices across India.
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { href: company.social.instagram, label: "Instagram", Icon: Instagram },
              { href: company.social.facebook, label: "Facebook", Icon: Facebook },
              { href: company.social.youtube, label: "YouTube", Icon: Youtube },
              { href: whatsappHref(), label: "WhatsApp", Icon: WhatsApp },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-brand-light hover:bg-brand-light hover:text-plum-deep"
              >
                <Icon width={17} height={17} />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Company">
          {nav.map((n) => (
            <FooterLink key={n.href} href={n.href}>{n.label}</FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Products">
          {categories.map((c) => (
            <FooterLink key={c.id} href={`/products#${c.id}`}>{c.short}</FooterLink>
          ))}
          <FooterLink href="/downloads">E-catalogues</FooterLink>
        </FooterCol>

        <FooterCol title="Get in touch">
          <li className="flex gap-3">
            <MapPin width={18} height={18} className="mt-0.5 shrink-0 text-brand-light" />
            <a href={company.maps.link} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              {company.address.line1}, {company.address.line2}, {company.address.line3}
              <span className="block text-white/40">{company.address.landmark}</span>
            </a>
          </li>
          <li className="flex gap-3">
            <Phone width={18} height={18} className="mt-0.5 shrink-0 text-brand-light" />
            <span className="flex flex-col">
              {company.phones.map((p) => (
                <a key={p} href={telHref(p)} className="transition-colors hover:text-white">{p}</a>
              ))}
            </span>
          </li>
          <li className="flex gap-3">
            <Mail width={18} height={18} className="mt-0.5 shrink-0 text-brand-light" />
            <span className="flex flex-col">
              {company.emails.map((e) => (
                <a key={e} href={`mailto:${e}`} className="break-all transition-colors hover:text-white">{e}</a>
              ))}
            </span>
          </li>
        </FooterCol>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden className="container-x relative select-none">
        <p
          className="font-display text-[19vw] leading-[0.95] font-light tracking-tight text-transparent lg:text-[15rem]"
          style={{ WebkitTextStroke: "1px rgb(232 180 201 / 0.25)" }}
        >
          Cape Decor
        </p>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>Powered by {company.poweredBy}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }) {
  return (
    <div>
      <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-brand-light uppercase">{title}</p>
      <ul className="space-y-3 text-[0.95rem]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="group inline-flex items-center gap-1 transition-all duration-300 hover:translate-x-1 hover:text-white">
        {children}
        <ArrowUpRight width={13} height={13} className="text-brand-light opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
    </li>
  );
}
