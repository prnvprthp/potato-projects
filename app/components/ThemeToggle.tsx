"use client";

import { useEffect, useState } from "react";

const SUN =
  "M12 3v2M12 19v2M5 5l1.5 1.5M17.5 17.5L19 19M3 12h2M19 12h2M5 19l1.5-1.5M17.5 6.5L19 5";
const MOON = "M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr) setDark(attr === "dark");
    else setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
  }

  return (
    <button
      className="icon-btn"
      onClick={toggle}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Render moon before mount to avoid a hydration flash. */}
        <path d={mounted && dark ? SUN : MOON} />
      </svg>
    </button>
  );
}
