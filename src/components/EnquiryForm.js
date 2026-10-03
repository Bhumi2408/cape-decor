"use client";

import { useState } from "react";
import { categories, productsIn, whatsappHref } from "@/data/site";
import { Check, WhatsApp } from "./Icons";

const businessTypes = ["Furnishing Dealer", "Blinds Retailer", "Doors & Windows Dealer", "Freelancer", "Interior Designer", "Architect", "Wholesaler / Distributor"];
const showroomLocations = ["On main road", "Main market", "Inside the street", "Others"];

// The site has no backend, so enquiries are handed off to WhatsApp with the
// form contents pre-filled as the message.
export default function EnquiryForm({ variant = "contact", defaultProduct = "" }) {
  const [sent, setSent] = useState(false);
  const partner = variant === "partner";

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      partner ? "*New Sales Partner enquiry*" : "*New enquiry from website*",
      ...[...data.entries()].filter(([, v]) => String(v).trim()).map(([k, v]) => `${k}: ${v}`),
    ];
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener");
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Full name" name="Name" required autoComplete="name" />
      <Field label="Phone" name="Phone" type="tel" required autoComplete="tel" />
      {partner && <Field label="Email" name="Email" type="email" autoComplete="email" />}
      <Field label="City" name="City" required autoComplete="address-level2" />

      {partner ? (
        <>
          <Field label="Firm / business name" name="Business" />
          <fieldset className="sm:col-span-2">
            <legend className="mb-2 text-sm font-semibold text-ink">Present business</legend>
            <div className="flex flex-wrap gap-2">
              {businessTypes.map((b) => (
                <label key={b} className="cursor-pointer">
                  <input type="radio" name="Business type" value={b} className="peer sr-only" required />
                  <span className="inline-block rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-soft transition-colors peer-checked:border-brand peer-checked:bg-brand-soft peer-checked:text-brand peer-focus-visible:ring-2 peer-focus-visible:ring-brand">
                    {b}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <Select label="Showroom location" name="Showroom location" options={showroomLocations} className="sm:col-span-2" />
        </>
      ) : (
        <Select
          label="Interested in"
          name="Product"
          groups={categories.map((c) => ({ label: c.name, options: productsIn(c.id).map((p) => p.name) }))}
          defaultValue={defaultProduct}
        />
      )}

      <label className="block sm:col-span-2">
        <span className="mb-1.5 block text-sm font-semibold text-ink">Message</span>
        <textarea name="Message" rows={4} className="field resize-none" placeholder={partner ? "Tell us about your business…" : "Window sizes, rooms, timelines…"} />
      </label>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary">
          <WhatsApp width={18} height={18} /> {partner ? "Submit application" : "Send enquiry"}
        </button>
        {sent ? (
          <p className="flex items-center gap-2 text-sm text-ink-soft" role="status">
            <Check width={16} height={16} className="text-brand" /> WhatsApp opened — just hit send.
          </p>
        ) : (
          <p className="text-sm text-ink-soft">Your details open in WhatsApp, ready to send.</p>
        )}
      </div>
    </form>
  );
}

function Field({ label, className = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {props.required && <span className="text-brand">*</span>}
      </span>
      <input type="text" className="field" {...props} />
    </label>
  );
}

function Select({ label, options, groups, className = "", defaultValue = "", ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-semibold text-ink">{label}</span>
      <select className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22%235e5550%22 stroke-width=%221.6%22 viewBox=%220 0 24 24%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[position:right_1rem_center] bg-no-repeat pr-10" defaultValue={defaultValue} {...props}>
        <option value="">Select…</option>
        {options?.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
        {groups?.map((g) => (
          <optgroup key={g.label} label={g.label}>
            {g.options.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </label>
  );
}
