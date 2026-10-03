"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { categories, company, nav, productsIn, telHref, whatsappHref } from "@/data/site";
import { ProductVisual } from "./ProductArt";
import { ArrowRight, ArrowUpRight, ChevronDown, Close, Facebook, Instagram, Mail, Menu, Phone, Youtube } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-plum-deep text-[0.8rem] text-white/70 md:block">
        <div className="container-x flex h-10 items-center justify-between">
          <p className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-brand-light" />
            Doors, Windows, Window Blinds &amp; Printed Wallpapers — crafted in New Delhi since {company.founded}
          </p>
          <div className="flex items-center gap-6">
            <a href={telHref(company.phones[0])} className="flex items-center gap-2 transition-colors hover:text-brand-light">
              <Phone width={14} height={14} /> {company.phones[0]}
            </a>
            <a href={`mailto:${company.emails[0]}`} className="flex items-center gap-2 transition-colors hover:text-brand-light">
              <Mail width={14} height={14} /> {company.emails[0]}
            </a>
            <span className="h-4 w-px bg-white/20" />
            <a href={company.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-brand-light">
              <Instagram width={15} height={15} />
            </a>
            <a href={company.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-colors hover:text-brand-light">
              <Facebook width={15} height={15} />
            </a>
            <a href={company.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="transition-colors hover:text-brand-light">
              <Youtube width={16} height={16} />
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-paper/85 shadow-[0_10px_40px_-20px_rgb(42_35_38/0.3)] backdrop-blur-xl" : "bg-ivory"
        }`}
      >
        <div className={`container-x flex items-center justify-between gap-6 transition-[height] duration-500 ${scrolled ? "h-16 md:h-18" : "h-18 md:h-22"}`}>
          <Link href="/" className="shrink-0" aria-label="Cape Decor home">
            <Image
              src="/logo.webp"
              alt="Cape Grade Decor"
              width={2546}
              height={688}
              priority
              className={`w-auto transition-[height] duration-500 ${scrolled ? "h-9 md:h-10" : "h-10 md:h-12"}`}
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((item) =>
              item.href === "/products" ? (
                <div key={item.href} className="group relative">
                  <NavLink href={item.href} active={isActive(item.href)}>
                    {item.label}
                    <ChevronDown width={15} height={15} className="transition-transform duration-300 group-hover:rotate-180" />
                  </NavLink>
                  <ProductsMenu />
                </div>
              ) : (
                <NavLink key={item.href} href={item.href} active={isActive(item.href)}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappHref("Hello Cape Decor, I'd like a free quote.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark hidden py-2.5! sm:inline-flex"
            >
              Free Quote <ArrowUpRight width={16} height={16} />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid size-11 place-items-center rounded-full border border-line bg-paper lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-plum-deep/60 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`slats-light absolute inset-y-0 right-0 flex w-[90%] max-w-sm flex-col bg-plum text-white transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="rounded-lg bg-white px-3 py-2">
              <Image src="/logo.webp" alt="Cape Grade Decor" width={2546} height={688} className="h-7 w-auto" />
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-full border border-white/20"
              aria-label="Close menu"
            >
              <Close />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-6" onClick={(e) => e.target.closest("a") && setOpen(false)}>
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <li
                  key={item.href}
                  className={`transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                  style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl px-3 py-3 font-display text-[1.7rem] ${
                      isActive(item.href) ? "text-brand-light italic" : "text-white"
                    }`}
                  >
                    {item.label}
                    <ArrowRight width={18} height={18} className="opacity-40" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 mb-3 px-3 text-xs font-semibold tracking-[0.25em] text-brand-light uppercase">Products</p>
            <ul className="space-y-1">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/products#${c.id}`}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[0.95rem] text-white/75 hover:bg-white/5 hover:text-white"
                  >
                    {c.name}
                    <span className="text-xs text-white/40">{productsIn(c.id).length}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2 border-t border-white/10 p-5">
            <a href={whatsappHref("Hello Cape Decor, I'd like a free quote.")} target="_blank" rel="noreferrer" className="btn btn-primary w-full">
              Get a Free Quote
            </a>
            <a href={telHref(company.phones[0])} className="btn btn-ghost-light w-full">
              <Phone width={16} height={16} /> {company.phones[0]}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`group/nav relative flex items-center gap-1 px-4 py-2 text-[0.97rem] transition-colors ${
        active ? "text-plum" : "text-ink-soft hover:text-ink"
      }`}
    >
      {children}
      <span
        className={`absolute right-4 bottom-0.5 left-4 h-px origin-left bg-brand transition-transform duration-500 ${
          active ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
        }`}
      />
    </Link>
  );
}

function ProductsMenu() {
  const [active, setActive] = useState(categories[0].id);
  const [hovered, setHovered] = useState(null);
  const cat = categories.find((c) => c.id === active);
  const items = productsIn(active);
  const preview = hovered && hovered.category === active ? hovered : null;

  // Doors & windows are split into two groups; other categories are one list.
  const groups = ["aluminium", "upvc"].includes(active)
    ? [
        { label: "Windows", items: items.filter((p) => !p.door) },
        { label: "Doors", items: items.filter((p) => p.door) },
      ]
    : [{ label: null, items }];

  const switchTo = (id) => {
    setActive(id);
    setHovered(null);
  };

  return (
    <div className="invisible absolute top-full left-1/2 w-[64rem] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="grid grid-cols-[15rem_1fr_16rem] gap-6 rounded-3xl border border-line bg-paper p-6 shadow-[0_40px_80px_-30px_rgb(42_35_38/0.35)]">
        <ul className="space-y-1 border-r border-line pr-5">
          {categories.map((c, i) => (
            <li key={c.id}>
              <Link
                href={`/products#${c.id}`}
                onMouseEnter={() => switchTo(c.id)}
                onFocus={() => switchTo(c.id)}
                className={`flex items-start gap-3 rounded-xl px-3 py-3 transition-colors ${active === c.id ? "bg-plum text-white" : "text-ink hover:bg-sand/60"}`}
              >
                <span className={`font-display text-xs italic ${active === c.id ? "text-brand-light" : "text-brand"}`}>0{i + 1}</span>
                <span>
                  <span className="block text-[0.95rem] leading-snug font-medium">{c.short}</span>
                  <span className={`text-xs ${active === c.id ? "text-white/60" : "text-ink-soft"}`}>{productsIn(c.id).length} {productsIn(c.id).length === 1 ? "product" : "products"}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div onMouseLeave={() => setHovered(null)}>
          <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.25em] text-brand uppercase">{cat.name}</p>
          <div className={groups.length > 1 ? "grid grid-cols-2 gap-6" : ""}>
            {groups.map((g) => (
              <div key={g.label ?? "all"}>
                {g.label && (
                  <p className="mb-1.5 flex items-center gap-3 px-2 text-xs font-semibold tracking-[0.15em] text-ink uppercase">
                    {g.label}
                    <span className="h-px flex-1 bg-line" />
                  </p>
                )}
                <ul className={`grid gap-x-4 ${!g.label && g.items.length > 8 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {g.items.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/products/${p.slug}`}
                        onMouseEnter={() => setHovered(p)}
                        onFocus={() => setHovered(p)}
                        className={`group/item flex items-center justify-between rounded-lg px-2 py-1.5 text-[0.92rem] transition-all ${
                          preview?.slug === p.slug ? "bg-sand/70 pl-3 text-ink" : "text-ink-soft hover:text-ink"
                        }`}
                      >
                        {g.label ? p.name.replace(/^(Aluminium|uPVC) /, "") : p.name}
                        <ArrowRight width={13} height={13} className={`transition-opacity ${preview?.slug === p.slug ? "opacity-60" : "opacity-0"}`} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Link href={preview ? `/products/${preview.slug}` : `/products#${cat.id}`} className="relative min-h-72 overflow-hidden rounded-2xl bg-plum">
          <div key={preview?.slug ?? cat.id} className="absolute inset-0 animate-[menu-fade_0.5s_ease-out]">
            {preview ? (
              <ProductVisual product={preview} sizes="16rem" />
            ) : (
              <Image src={cat.cover} alt="" fill sizes="16rem" className="object-cover" />
            )}
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-plum-deep/90 via-plum-deep/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 text-white">
            <p className="font-display text-xl leading-tight">{preview ? preview.name : cat.tagline}</p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/80">
              {preview ? "View product" : "View all"} <ArrowUpRight width={14} height={14} />
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
