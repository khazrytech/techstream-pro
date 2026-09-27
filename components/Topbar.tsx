"use client";

import Link from "next/link";
import { useState } from "react";

export default function Topbar() {
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [profile, setProfile] = useState(false);

  const closeMenus = () => {
    setNotifications(false);
    setProfile(false);
  };

  return (
    <header className="topbar">
      {/* Mobile Brand */}
      <div className="mobile-brand">
        <div className="brand-mark">T</div>
        <strong>
          TECH<span>STREAM</span>
        </strong>
      </div>

      {/* Search */}
      <div className="search-box">
        <span>⌕</span>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tafuta movie, series, sport..."
        />

        {search && (
          <button
            className="clear-search"
            onClick={() => setSearch("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}

        <kbd>⌘ K</kbd>
      </div>

      {/* Actions */}
      <div className="top-actions">

        {/* Notifications */}
        <button
          className="icon-button notification-button"
          aria-label="Notifications"
          onClick={() => {
            setNotifications(!notifications);
            setProfile(false);
          }}
        >
          ♢
          <span className="notification-dot" />
        </button>

        {notifications && (
          <div className="dropdown notification-menu">
            <div className="dropdown-title">
              <strong>Notifications</strong>
              <span>3 mpya</span>
            </div>

            <div className="notification-item">
              <div className="notification-icon">🎬</div>

              <div>
                <strong>New Movie</strong>
                <p>Movie mpya imeongezwa.</p>
                <small>dakika 5 zilizopita</small>
              </div>
            </div>

            <div className="notification-item">
              <div className="notification-icon">⚽</div>

              <div>
                <strong>Live Sport</strong>
                <p>Stream mpya ipo LIVE.</p>
                <small>dakika 18 zilizopita</small>
              </div>
            </div>

            <Link
              href="/settings"
              className="dropdown-view-all"
              onClick={closeMenus}
            >
              Fungua Settings
            </Link>
          </div>
        )}

        {/* Profile */}
        <button
          className="profile-button"
          aria-label="Profile"
          onClick={() => {
            setProfile(!profile);
            setNotifications(false);
          }}
        >
          <div className="avatar">T</div>

          <span>Techboy</span>

          <small>⌄</small>
        </button>

        {profile && (
          <div className="dropdown profile-menu">

            <div className="profile-head">
              <div className="avatar large">T</div>

              <div>
                <strong>Techboy</strong>
                <small>TechStream User</small>
              </div>
            </div>

            <Link href="/settings" onClick={closeMenus}>
              👤 Profile
            </Link>

            <Link href="/settings" onClick={closeMenus}>
              ⚙ Settings
            </Link>

            <Link href="/settings" onClick={closeMenus}>
              ♡ My List
            </Link>

            <hr />

            <button className="logout">
              ↪ Logout
            </button>

          </div>
        )}

      </div>
    </header>
  );
}
