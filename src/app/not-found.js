import Link from "next/link";
import { Blinds } from "@/components/effects";

export default function NotFound() {
  return (
    <section className="slats-light relative isolate flex min-h-[70vh] items-center overflow-hidden bg-plum-deep text-white">
      <Blinds count={12} color="var(--color-plum)" />
      <div aria-hidden className="absolute top-1/2 left-1/2 -z-10 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-light/15 blur-3xl" />
      <div className="container-x relative z-10 py-24 text-center">
        <p className="rise font-display text-[8rem] leading-none font-light text-accent italic md:text-[12rem]" style={{ animationDelay: "400ms" }}>
          404
        </p>
        <h1 className="rise mt-4 font-display text-4xl font-light md:text-6xl" style={{ animationDelay: "550ms" }}>
          This window is closed.
        </h1>
        <p className="rise mx-auto mt-5 max-w-md text-lg text-white/65" style={{ animationDelay: "700ms" }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="rise mt-9 flex justify-center gap-3" style={{ animationDelay: "850ms" }}>
          <Link href="/" className="btn btn-primary">Back home</Link>
          <Link href="/products" className="btn btn-ghost-light">Our products</Link>
        </div>
      </div>
    </section>
  );
}
