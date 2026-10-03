import { whatsappHref } from "@/data/site";
import { WhatsApp } from "./Icons";

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Cape Decor on WhatsApp"
      className="fixed right-5 bottom-5 z-30 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.7)] transition-transform hover:scale-105"
    >
      <WhatsApp width={28} height={28} />
    </a>
  );
}
