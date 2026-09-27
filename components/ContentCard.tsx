"use client";

import { useState } from "react";

export type Content = {
  id: number;
  title: string;
  type: "MOVIE" | "SERIES" | "SPORT";
  image: string;
  rating?: string;
  year?: string;
  duration?: string;
  badge?: string;
};

export default function ContentCard({
  item,
}: {
  item: Content;
}) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="content-card">

      <div className="poster">

        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
        />

        {item.badge && (
          <span className="card-badge">
            {item.badge}
          </span>
        )}

        <button
          className={
            saved
              ? "save-button saved"
              : "save-button"
          }
          onClick={() => setSaved(!saved)}
          aria-label="Add to My List"
        >
          {saved ? "♥" : "♡"}
        </button>

        <div className="poster-overlay">
          <button className="card-play">
            ▶
          </button>
        </div>

        <div className="card-bottom">
          {item.type}
        </div>

      </div>

      <div className="card-info">

        <h3>{item.title}</h3>

        <div className="card-meta">

          {item.rating && (
            <span>★ {item.rating}</span>
          )}

          {item.year && (
            <span>{item.year}</span>
          )}

          {item.duration && (
            <span>{item.duration}</span>
          )}

        </div>

      </div>

    </article>
  );
}
