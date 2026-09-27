"use client";

import { useState } from "react";

export default function SettingsPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [autoplay, setAutoplay] = useState(true);
  const [dataSaver, setDataSaver] = useState(false);

  if (!open) return null;

  return (
    <div className="settings-overlay">

      <div className="settings-panel">

        <div className="settings-header">

          <div>
            <span className="section-kicker">
              PREFERENCES
            </span>

            <h2>Settings</h2>
          </div>

          <button onClick={onClose}>
            ×
          </button>

        </div>

        <div className="settings-group">

          <h3>Playback</h3>

          <div className="setting-row">

            <div>
              <strong>Autoplay</strong>

              <small>
                Cheza content inayofuata automatically
              </small>
            </div>

            <button
              className={
                autoplay
                  ? "toggle on"
                  : "toggle"
              }
              onClick={() =>
                setAutoplay(!autoplay)
              }
            >
              <span />
            </button>

          </div>

          <div className="setting-row">

            <div>
              <strong>Data Saver</strong>

              <small>
                Punguza matumizi ya data
              </small>
            </div>

            <button
              className={
                dataSaver
                  ? "toggle on"
                  : "toggle"
              }
              onClick={() =>
                setDataSaver(!dataSaver)
              }
            >
              <span />
            </button>

          </div>

        </div>

        <div className="settings-group">

          <h3>Video Quality</h3>

          <select className="quality-select">
            <option>Auto</option>
            <option>1080p</option>
            <option>720p</option>
            <option>480p</option>
            <option>360p</option>
          </select>

        </div>

        <div className="settings-group">

          <h3>Subtitles</h3>

          <select className="quality-select">
            <option>Off</option>
            <option>English</option>
            <option>Swahili</option>
          </select>

        </div>

      </div>

    </div>
  );
}
