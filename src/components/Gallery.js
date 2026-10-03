"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Close } from "./Icons";

// Lookbook mosaic: one large photo plus smaller tiles; any photo opens a lightbox.
const tiles = [
  "col-span-2 row-span-2 aspect-square md:aspect-auto",
  "aspect-square",
  "aspect-square",
  "aspect-square",
  "aspect-square",
  "col-span-2 aspect-[2/1] md:col-span-1 md:aspect-square",
];

export default function Gallery({ images, name }) {
  const [open, setOpen] = useState(null);

  const go = useCallback((dir) => setOpen((i) => (i + dir + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, go]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {images.slice(0, 6).map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Open ${name} photo ${i + 1}`}
            className={`group relative cursor-zoom-in overflow-hidden rounded-[1.25rem] bg-sand ${tiles[i]}`}
          >
            <Image
              src={src}
              alt={`${name} — photo ${i + 1}`}
              fill
              sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
              className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-plum-deep/0 transition-colors duration-500 group-hover:bg-plum-deep/25" />
            <span className="absolute right-3 bottom-3 grid size-10 scale-75 place-items-center rounded-full bg-paper/90 text-ink opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-plum-deep/95 p-4 backdrop-blur" role="dialog" aria-modal="true" aria-label={`${name} gallery`}>
          <button type="button" onClick={() => setOpen(null)} className="absolute top-4 right-4 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close gallery">
            <Close />
          </button>
          <button type="button" onClick={() => go(-1)} className="absolute left-3 z-10 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-8" aria-label="Previous photo">
            <ChevronLeft />
          </button>
          <div key={open} className="rise relative aspect-[4/3] w-full max-w-5xl">
            <Image src={images[open]} alt={`${name} — photo ${open + 1}`} fill sizes="100vw" className="rounded-xl object-contain" />
          </div>
          <button type="button" onClick={() => go(1)} className="absolute right-3 z-10 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-8" aria-label="Next photo">
            <ChevronRight />
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-display text-white/70 italic">
            {open + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
