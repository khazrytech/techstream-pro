"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "The Last Horizon",
    description:
      "Safari ya kusisimua kuelekea ulimwengu ambao hakuna mtu aliwahi kufika.",
    meta: "2026 • 2h 14m • 4K",
    genre: "Sci-Fi",
    rating: "8.9",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Beyond The Night",
    description:
      "Hadithi mpya yenye mystery, action na adventure katika jiji lisilolala.",
    meta: "2026 • 1h 52m • HD",
    genre: "Action",
    rating: "8.5",
    image:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90",
  },
  {
    title: "Into The Wild",
    description:
      "Safari ya kipekee yenye mazingira makubwa na story isiyosahaulika.",
    meta: "2026 • 2h 05m • 4K",
    genre: "Adventure",
    rating: "8.2",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=90",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url("${slide.image}")`,
      }}
    >
      <div className="hero-overlay" />

      <div className="hero-content">

        <div className="hero-badge">
          <span />
          FEATURED
        </div>

        <h1>{slide.title}</h1>

        <p>{slide.description}</p>

        <div className="hero-meta">
          <span>★ {slide.rating}</span>
          <span>{slide.meta}</span>
          <span>{slide.genre}</span>
        </div>

        <div className="hero-actions">
          <button className="primary-button">
            ▶ Watch Now
          </button>

          <button className="secondary-button">
            ＋ My List
          </button>
        </div>

      </div>

      <div className="hero-controls">

        <button
          onClick={() =>
            setCurrent(
              (current - 1 + slides.length) %
                slides.length
            )
          }
        >
          ‹
        </button>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={
                index === current ? "active" : ""
              }
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

        <button
          onClick={() =>
            setCurrent(
              (current + 1) % slides.length
            )
          }
        >
          ›
        </button>

      </div>
    </section>
  );
}
