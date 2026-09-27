"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", icon: "⌂" },
  { label: "Movies", icon: "🎬" },
  { label: "Sports", icon: "⚽" },
  { label: "Series", icon: "▣" },
  { label: "My List", icon: "♡" },
];

export default function MobileNav() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="mobile-nav">
      {navItems.map((item) => (
        <button
          key={item.label}
          className={
            active === item.label
              ? "mobile-nav-item active"
              : "mobile-nav-item"
          }
          onClick={() => setActive(item.label)}
        >
          <span className="mobile-nav-icon">
            {item.icon}
          </span>

          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
