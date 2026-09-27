"use client";

import { useState } from "react";

export default function Topbar() {
  const [search, setSearch] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <header className="topbar">

      <div className="mobile-brand">
        <div className="brand-mark">T</div>

        <strong>
          TECH<span>STREAM</span>
        </strong>
      </div>

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
          >
            ×
          </button>
        )}

        <kbd>⌘ K</kbd>
      </div>

      <div className="top-actions">

        <button
          className="icon-button notification-button"
          onClick={() =>
            setNotifications(!notifications)
          }
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
              <div className="notification-icon">
                🎬
              </div>

              <div>
                <strong>New Movie</strong>
                <p>Movie mpya imeongezwa.</p>
                <small>dakika 5 zilizopita</small>
              </div>
            </div>

            <div className="notification-item">
              <div className="notification-icon">
                ⚽
              </div>

              <div>
                <strong>Live Sport</strong>
                <p>Stream mpya ipo LIVE.</p>
                <small>dakika 18 zilizopita</small>
              </div>
            </div>

          </div>
        )}

        <button
          className="profile-button"
          onClick={() => setProfile(!profile)}
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

            <button>👤 Profile</button>
            <button>⚙ Settings</button>
            <button>♡ My List</button>

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
