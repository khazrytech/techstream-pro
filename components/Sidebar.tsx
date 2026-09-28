"use client";

import { useState } from "react";

const items = [
  { name: "Nyumbani", icon: "⌂" },
  { name: "Filamu", icon: "🎬" },
  { name: "Series", icon: "▣" },
  { name: "Michezo", icon: "⚽" },
  { name: "Zangu", icon: "♡" },
  { name: "Mipangilio", icon: "⚙" },
];

export default function Sidebar() {
  const [active, setActive] = useState("Nyumbani");

  return (
    <aside className="hidden md:block sidebar">
      <div className="brand">
        <div className="brand-mark">T</div>

        <div>
          <strong>
            TECH<span>STREAM</span>
          </strong>
          <small>PREMIUM</small>
        </div>
      </div>

      <div className="sidebar-label">MENU</div>

      <nav className="sidebar-nav">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={active === item.name ? "active" : ""}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.name}</span>

            {item.name === "Zangu" && (
              <small className="nav-count">3</small>
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="upgrade-card">
          <div className="upgrade-icon">✦</div>

          <strong>TechStream Premium</strong>

          <p>
            Furahia streaming bila usumbufu.
          </p>

          <button>
            Explore Premium
          </button>
        </div>

        <div className="sidebar-profile">
          <div className="avatar">T</div>

          <div>
            <strong>Techboy</strong>
            <small>Free Account</small>
          </div>

          <span>•••</span>
        </div>
      </div>
    </aside>
  );
}
