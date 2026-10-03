"use client";

import { useEffect, useRef, useState } from "react";

// Reveals its children once they scroll into view.
export function Reveal({ as: Tag = "div", variant = "up", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Chrome treats a fully clipped element as not intersecting, so the blind
  // variant observes an unclipped wrapper and clips an inner element instead.
  if (variant === "blind") {
    return (
      <Tag ref={ref} className={className} {...rest}>
        <div style={{ transitionDelay: `${delay}ms` }} className={`reveal reveal-blind h-full ${shown ? "is-in" : ""}`}>
          {children}
        </div>
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal reveal-${variant} ${shown ? "is-in" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Counts up to a value like "30,000+" when scrolled into view.
export function Counter({ value, className = "" }) {
  const ref = useRef(null);
  const match = String(value).match(/^([\d,]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, "")) : 0;
  const suffix = match ? match[2] : "";
  const valid = Boolean(match);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !valid) return;
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1800;
        const tick = (t) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(target * (1 - Math.pow(1 - p, 4))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target, valid]);

  if (!match) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

// Thin gold bar at the top of the viewport showing scroll progress.
export function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]">
      <div ref={bar} className="h-full origin-left scale-x-0 bg-linear-to-r from-brand-light to-brand" />
    </div>
  );
}
