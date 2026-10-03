import Image from "next/image";

// Architectural line drawing used for products that don't have photos yet.
// Opening symbols follow drawing convention: the triangle's point is on the hinge side.
export default function ProductArt({ type = "fixed", door = false, className = "" }) {
  const f = door ? { x: 66, y: 22, w: 68, h: 156 } : { x: 42, y: 40, w: 116, h: 112 };
  const { x, y, w, h } = f;
  const r = x + w;
  const b = y + h;
  const inset = 7;
  const px = x + inset;
  const py = y + inset;
  const pw = w - inset * 2;
  const ph = h - inset * 2;
  const pr = px + pw;
  const pb = py + ph;
  const mx = x + w / 2;
  const my = py + ph / 2;

  const pane = (x1, y1, w1, h1, key) => (
    <g key={key}>
      <rect x={x1} y={y1} width={w1} height={h1} className="fill-brand-soft/70 stroke-plum" strokeWidth="1.6" />
      <path d={`M${x1 + w1 * 0.18} ${y1 + h1 * 0.28} l${w1 * 0.22} ${-h1 * 0.18} M${x1 + w1 * 0.18} ${y1 + h1 * 0.42} l${w1 * 0.34} ${-h1 * 0.28}`} className="stroke-white" strokeWidth="2.2" strokeLinecap="round" />
    </g>
  );
  const dash = { className: "stroke-brand", strokeWidth: 1.4, strokeDasharray: "5 4", fill: "none" };

  let body = null;
  switch (type) {
    case "casement":
      body = (
        <>
          {pane(px, py, pw, ph)}
          <path d={`M${px} ${py} L${pr} ${my} L${px} ${pb}`} {...dash} />
          <rect x={pr - 7} y={my - 9} width="3.5" height="18" rx="1.5" className="fill-plum" />
        </>
      );
      break;
    case "french": {
      const half = pw / 2;
      body = (
        <>
          {pane(px, py, half - 2, ph, "l")}
          {pane(mx + 2, py, half - 2, ph, "r")}
          <path d={`M${px} ${py} L${mx - 2} ${my} L${px} ${pb} M${pr} ${py} L${mx + 2} ${my} L${pr} ${pb}`} {...dash} />
          <rect x={mx - 7} y={my - 9} width="3" height="18" rx="1.5" className="fill-plum" />
          <rect x={mx + 4} y={my - 9} width="3" height="18" rx="1.5" className="fill-plum" />
        </>
      );
      break;
    }
    case "sliding": {
      const half = pw / 2 + 6;
      body = (
        <>
          {pane(px, py, half, ph, "l")}
          {pane(pr - half, py + 3, half, ph - 6, "r")}
          <path d={`M${mx - 30} ${b + 14} h60 M${mx + 22} ${b + 9} l8 5 -8 5 M${mx - 22} ${b + 9} l-8 5 8 5`} className="stroke-brand" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      );
      break;
    }
    case "tophung":
      body = (
        <>
          {pane(px, py, pw, ph)}
          <path d={`M${px} ${pb} L${mx} ${py} L${pr} ${pb}`} {...dash} />
          <rect x={mx - 9} y={pb - 7} width="18" height="3.5" rx="1.5" className="fill-plum" />
        </>
      );
      break;
    case "tiltturn":
      body = (
        <>
          {pane(px, py, pw, ph)}
          <path d={`M${px} ${pb} L${mx} ${py} L${pr} ${pb}`} {...dash} />
          <path d={`M${px} ${py} L${pr} ${my} L${px} ${pb}`} {...dash} className="stroke-plum-soft" />
          <rect x={pr - 7} y={my - 9} width="3.5" height="18" rx="1.5" className="fill-plum" />
        </>
      );
      break;
    case "bifold": {
      const n = 4;
      const pwEach = pw / n;
      body = (
        <>
          {Array.from({ length: n }, (_, i) => pane(px + i * pwEach + 1, py, pwEach - 2, ph, i))}
          <path
            d={`M${px} ${b + 18} ${Array.from({ length: n }, (_, i) => `L${px + (i + 0.5) * pwEach} ${b + (i % 2 ? 18 : 8)} L${px + (i + 1) * pwEach} ${b + 18}`).join(" ")}`}
            className="stroke-brand"
            strokeWidth="1.6"
            fill="none"
            strokeLinejoin="round"
          />
        </>
      );
      break;
    }
    case "blind": {
      const slats = 9;
      const drop = ph * 0.72;
      body = (
        <>
          {pane(px, py, pw, ph)}
          <rect x={x - 4} y={y - 6} width={w + 8} height="8" rx="2" className="fill-plum" />
          {Array.from({ length: slats }, (_, i) => (
            <rect key={i} x={px - 2} y={py + (i * drop) / slats} width={pw + 4} height={drop / slats - 2.5} rx="1.5" className="fill-paper stroke-plum/40" strokeWidth="0.8" />
          ))}
          <path d={`M${pr - 8} ${py} v${drop + 14}`} className="stroke-plum" strokeWidth="1.2" />
          <circle cx={pr - 8} cy={py + drop + 17} r="3" className="fill-brand" />
        </>
      );
      break;
    }
    case "mesh":
      body = (
        <>
          <rect x={px} y={py} width={pw} height={ph} className="fill-brand-soft/50 stroke-plum" strokeWidth="1.6" />
          {Array.from({ length: 13 }, (_, i) => (
            <path key={`v${i}`} d={`M${px + ((i + 1) * pw) / 14} ${py} V${pb}`} className="stroke-plum/30" strokeWidth="0.8" />
          ))}
          {Array.from({ length: 13 }, (_, i) => (
            <path key={`h${i}`} d={`M${px} ${py + ((i + 1) * ph) / 14} H${pr}`} className="stroke-plum/30" strokeWidth="0.8" />
          ))}
          <rect x={pr - 6} y={my - 12} width="3.5" height="24" rx="1.5" className="fill-plum" />
        </>
      );
      break;
    case "strip": {
      const n = 8;
      return (
        <Frame className={className}>
          <rect x="40" y="36" width="120" height="7" rx="2" className="fill-plum" />
          {Array.from({ length: n }, (_, i) => (
            <rect
              key={i}
              x={42 + i * (116 / n) - 2}
              y="43"
              width={116 / n + 4}
              height="118"
              rx="2"
              className={i % 2 ? "fill-brand-soft/80 stroke-plum/40" : "fill-white/80 stroke-plum/40"}
              strokeWidth="0.9"
            />
          ))}
          <path d="M40 166 H160" className="stroke-plum/40" strokeWidth="1.4" />
        </Frame>
      );
    }
    default:
      body = pane(px, py, pw, ph);
  }

  return (
    <Frame className={className}>
      <rect x={x} y={y} width={w} height={h} rx="2" className="fill-paper stroke-plum" strokeWidth="2.4" />
      {body}
      {door ? (
        <path d={`M${x - 30} ${b} H${r + 30}`} className="stroke-plum/40" strokeWidth="1.4" />
      ) : (
        <rect x={x - 8} y={b} width={w + 16} height="5" rx="1.5" className="fill-sand stroke-plum/40" strokeWidth="0.8" />
      )}
    </Frame>
  );
}

function Frame({ className, children }) {
  return (
    <div className={`slats relative grid size-full place-items-center bg-linear-to-br from-paper via-ivory to-sand ${className}`}>
      <svg viewBox="0 0 200 200" className="h-[78%] w-auto max-w-[88%]" aria-hidden>
        {children}
      </svg>
    </div>
  );
}

// Product photo if there is one, otherwise the drawing. Fills its (relative) parent.
export function ProductVisual({ product, sizes, className = "", priority }) {
  if (product.cover) {
    return <Image src={product.cover} alt={product.name} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />;
  }
  return (
    <div className="absolute inset-0">
      <ProductArt type={product.art} door={product.door} />
    </div>
  );
}
