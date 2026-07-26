"use client";

import { useEffect, useRef } from "react";

/** Four soft colour washes drifting near the top, behind frosted glass. */
const WASHES = [
  { c: "#F5A623", x: 8, y: -6, s: 520 },
  { c: "#E8688E", x: 70, y: -12, s: 560 },
  { c: "#3E8EF7", x: 92, y: 24, s: 460 },
  { c: "#8C7BF0", x: 34, y: 18, s: 420 },
];

export function Field() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const anims: Animation[] = [];
    el.querySelectorAll<HTMLElement>(".orb").forEach((orb, i) => {
      anims.push(
        orb.animate(
          [
            { transform: "translate(0,0)" },
            {
              transform: `translate(${(i % 2 ? 1 : -1) * 26}px, ${(i % 2 ? -1 : 1) * 20}px)`,
            },
            { transform: "translate(0,0)" },
          ],
          { duration: 18000 + i * 2500, iterations: Infinity, easing: "ease-in-out" }
        )
      );
    });
    return () => anims.forEach((a) => a.cancel());
  }, []);

  return (
    <div className="field" ref={ref} aria-hidden="true">
      {WASHES.map((w, i) => (
        <div
          key={i}
          className="orb"
          style={{
            width: w.s,
            height: w.s,
            background: w.c,
            left: `${w.x}%`,
            top: `${w.y}%`,
          }}
        />
      ))}
    </div>
  );
}
