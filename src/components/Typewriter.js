"use client";

import { useEffect, useState } from "react";

// Types each word, pauses, deletes it and moves on — like the original site's hero.
export default function Typewriter({ words, typeSpeed = 90, deleteSpeed = 45, pause = 1800, className = "" }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;
    if (deleting && text === "") delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className={className}>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden>
        {text}
        <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] animate-[blink_1s_steps(1)_infinite] bg-current align-baseline" />
      </span>
    </span>
  );
}
