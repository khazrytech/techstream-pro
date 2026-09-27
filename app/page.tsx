"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Topbar from "@/components/Topbar";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryChips from "@/components/CategoryChips";
import ContinueWatching from "@/components/ContinueWatching";
import ContentSection from "@/components/ContentSection";
import PlayerModal from "@/components/PlayerModal";
import SettingsPanel from "@/components/SettingsPanel";

const movies = [
  {
    id: 1,
    title: "The Last Horizon",
    type: "MOVIE" as const,
    rating: "8.9",
    year: "2026",
    duration: "2h 14m",
    badge: "4K",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 2,
    title: "Beyond The Night",
    type: "MOVIE" as const,
    rating: "8.5",
    year: "2026",
    duration: "1h 52m",
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 3,
    title: "Into The Wild",
    type: "MOVIE" as const,
    rating: "8.2",
    year: "2026",
    duration: "2h 05m",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 4,
    title: "Dark Horizon",
    type: "MOVIE" as const,
    rating: "9.0",
    year: "2026",
    duration: "2h 20m",
    badge: "4K",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=85",
  },
];

const sports = [
  {
    id: 10,
    title: "Football Live",
    type: "SPORT" as const,
    badge: "LIVE",
    image:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 11,
    title: "Basketball Live",
    type: "SPORT" as const,
    badge: "LIVE",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 12,
    title: "Tennis Championship",
    type: "SPORT" as const,
    badge: "HD",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 13,
    title: "Formula Racing",
    type: "SPORT" as const,
    badge: "LIVE",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=700&q=85",
  },
];

const series = [
  {
    id: 20,
    title: "The Last Kingdom",
    type: "SERIES" as const,
    rating: "9.1",
    year: "2026",
    duration: "S02",
    badge: "S02",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 21,
    title: "Dark City",
    type: "SERIES" as const,
    rating: "8.8",
    year: "2026",
    duration: "S01",
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 22,
    title: "Into Space",
    type: "SERIES" as const,
    rating: "8.7",
    year: "2026",
    duration: "S03",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=700&q=85",
  },
  {
    id: 23,
    title: "The Unknown",
    type: "SERIES" as const,
    rating: "8.4",
    year: "2026",
    duration: "S01",
    badge: "4K",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=700&q=85",
  },
];

export default function Home() {
  const [playerOpen, setPlayerOpen] =
    useState(false);

  const [settingsOpen, setSettingsOpen] =
    useState(false);

  return (
    <main className="app">

      <Sidebar />

      <div className="main">

        <Topbar />

        <div className="page-content">

          <HeroCarousel />

          <CategoryChips />

          <ContinueWatching />

          <ContentSection
            title="Filamu Maarufu"
            kicker="TRENDING NOW"
            items={movies}
          />

          <ContentSection
            title="Sports Streaming"
            kicker="WATCH LIVE"
            items={sports}
          />

          <ContentSection
            title="Series Zinazoendelea"
            kicker="KEEP WATCHING"
            items={series}
          />

          <section className="premium-banner">

            <div>

              <span className="section-kicker">
                TECHSTREAM PREMIUM
              </span>

              <h2>
                Burudani yako.
                <br />
                Sehemu moja.
              </h2>

              <p>
                Movies, Series na Sports katika
                experience moja ya kisasa.
              </p>

              <button
                className="primary-button"
                onClick={() =>
                  setPlayerOpen(true)
                }
              >
                Explore TechStream
              </button>

            </div>

            <div className="premium-orb">
              ✦
            </div>

          </section>

        </div>

      </div>

      <MobileNav />

      <button
        className="floating-settings"
        onClick={() =>
          setSettingsOpen(true)
        }
      >
        ⚙
      </button>

      <PlayerModal
        open={playerOpen}
        title="TechStream Preview"
        onClose={() =>
          setPlayerOpen(false)
        }
      />

      <SettingsPanel
        open={settingsOpen}
        onClose={() =>
          setSettingsOpen(false)
        }
      />

    </main>
  );
}
