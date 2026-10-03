// Small inline icon set (stroke icons, 24px grid).
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const ArrowRight = (p) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUpRight = (p) => (
  <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Phone = (p) => (
  <svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
);
export const Mail = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const MapPin = (p) => (
  <svg {...base} {...p}><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const Download = (p) => (
  <svg {...base} {...p}><path d="M12 4v11M7 10l5 5 5-5M5 20h14" /></svg>
);
export const Menu = (p) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h10" /></svg>
);
export const Close = (p) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const ChevronDown = (p) => (
  <svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
);
export const ChevronLeft = (p) => (
  <svg {...base} {...p}><path d="m15 6-6 6 6 6" /></svg>
);
export const ChevronRight = (p) => (
  <svg {...base} {...p}><path d="m9 6 6 6-6 6" /></svg>
);
export const Check = (p) => (
  <svg {...base} {...p}><path d="m5 12 5 5 9-10" /></svg>
);
export const Home = (p) => (
  <svg {...base} {...p}><path d="M4 11 12 4l8 7v9h-5v-6H9v6H4z" /></svg>
);
export const Shield = (p) => (
  <svg {...base} {...p}><path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const Sparkle = (p) => (
  <svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" /></svg>
);
export const Tag = (p) => (
  <svg {...base} {...p}><path d="M3 12V4h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.3" /></svg>
);
export const Ruler = (p) => (
  <svg {...base} {...p}><rect x="2" y="8" width="20" height="8" rx="1" /><path d="M6 8v3M10 8v4M14 8v3M18 8v4" /></svg>
);
export const Scissors = (p) => (
  <svg {...base} {...p}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" /></svg>
);
export const Wrench = (p) => (
  <svg {...base} {...p}><path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 1.3-1.3a4 4 0 0 0-5-5L3 9l3-3z" /></svg>
);
export const Chat = (p) => (
  <svg {...base} {...p}><path d="M4 5h16v11H8l-4 4z" /><path d="M8 10h8M8 13h5" /></svg>
);
export const Quote = (p) => (
  <svg viewBox="0 0 32 32" width={32} height={32} fill="currentColor" aria-hidden {...p}>
    <path d="M13 8C7.5 9.5 4 13.6 4 19.2V24h8v-8H8.3c.4-3 2.3-5.2 5.4-6.3zM28 8c-5.5 1.5-9 5.6-9 11.2V24h8v-8h-3.7c.4-3 2.3-5.2 5.4-6.3z" />
  </svg>
);
export const WhatsApp = (p) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden {...p}>
    <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.9L0 24l6.3-1.7A11.8 11.8 0 0 0 24 12c0-3.2-1.2-6.1-3.6-8.4z" />
  </svg>
);
export const Instagram = (p) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>
);
export const Facebook = (p) => (
  <svg {...base} {...p}><path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z" /></svg>
);
export const Youtube = (p) => (
  <svg {...base} {...p}>
    <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8z" />
    <path d="m10 15 5-3-5-3z" fill="currentColor" />
  </svg>
);
