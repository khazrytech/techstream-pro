"use client";

import React, { useEffect, useState } from "react";
import { Play, Search, User, Tv, Film, Clapperboard, Bell, X, Flame, Star, ChevronRight, Bookmark, Volume2, VolumeX, Radio } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function HomePage() {
  const [channels, setChannels] = useState<any[]>([]);
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const categories = ["All", "Trending", "Action", "Adventure", "Comedy", "Drama", "Football", "Basketball", "Series"];

  useEffect(() => {
    async function initData() {
      try {
        setLoading(true);
        const { data: chData } = await supabase.from("channels").select("*");
        const { data: mvData } = await supabase.from("movies").select("*");

        if (chData) setChannels(chData);
        if (mvData) setMovies(mvData);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    }
    initData();
  }, []);

  return (
    <div className="min-h-screen bg-[#060911] text-white pb-32 selection:bg-red-600 selection:text-white">
      {/* Top Header Bar */}
      <header className="flex items-center justify-between px-4 py-3.5 bg-[#060911]/95 sticky top-0 z-40 backdrop-blur-md border-b border-zinc-900">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
            <Play size={16} fill="white" className="text-white ml-0.5" />
          </div>
          <span className="font-black text-sm tracking-wider text-white">TECHSTREAM</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowNotifications(true)}
            className="w-9 h-9 bg-zinc-900 border border-zinc-800/80 rounded-full flex items-center justify-center text-zinc-300 hover:text-white transition relative"
          >
            <Bell size={16} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
          </button>
          <Link href="/settings" className="w-9 h-9 bg-zinc-900 border border-zinc-800/80 rounded-full flex items-center justify-center text-zinc-300 hover:text-white transition">
            <User size={18} />
          </Link>
        </div>
      </header>

      {/* Search Bar */}
      <div className="px-4 mt-3.5">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tafuta chaneli, filamu, au michezo..." 
            className="w-full bg-zinc-900/90 border border-zinc-800/80 rounded-2xl py-3 pl-10 pr-4 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-red-600 transition shadow-inner"
          />
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex gap-2 px-4 mt-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition border ${
              activeCategory === cat 
                ? "bg-red-600 border-red-500 text-white shadow-lg shadow-red-600/30" 
                : "bg-zinc-900/80 border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Hero Featured Section */}
      <div className="px-4 mt-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800/80 p-5 sm:p-8 flex flex-col justify-end min-h-[220px]">
          <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-black tracking-wider flex items-center gap-1 shadow">
            <Flame size={10} /> FEATURED
          </div>
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2 text-[10px] text-amber-400 font-bold">
              <span className="flex items-center gap-1"><Star size={12} fill="currentColor" /> 4.9</span>
              <span>•</span>
              <span className="text-zinc-400">Live Sports & Movies</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">Karibu TechStream Pro</h1>
            <p className="text-xs text-zinc-300 max-w-md line-clamp-2">
              Tazama chaneli za live za michezo, tamthilia kali, na filamu mpya kila siku kwa ubora wa hali ya juu.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <button className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 shadow-lg shadow-red-600/30 transition">
                <Play size={14} fill="currentColor" /> Anza Kutazama
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Channels */}
      <div className="mt-6 px-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Radio size={14} className="text-red-600 animate-pulse" /> Live Channels & Sports
          </h3>
          <span className="text-[11px] text-red-500 font-bold">{channels.length} Zipo</span>
        </div>

        {loading ? (
          <div className="text-center py-10 text-xs text-zinc-500">Inapakia chaneli kutoka Supabase...</div>
        ) : channels.length === 0 ? (
          <div className="bg-zinc-950/80 border border-zinc-900 p-6 rounded-2xl text-center space-y-2">
            <p className="text-xs text-zinc-400 font-medium">Hakuna chaneli kwenye Database bado.</p>
            <p className="text-[10px] text-zinc-600">Ongeza taarifa kwenye table ya channels ya Supabase.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {channels.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())).map((ch, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-900/80 p-3 rounded-2xl space-y-2.5 hover:border-red-600/50 transition cursor-pointer group shadow-lg">
                <div className="w-full h-24 bg-zinc-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-2 left-2 bg-red-600 px-1.5 py-0.5 rounded text-[8px] font-black text-white flex items-center gap-1 shadow">
                    <Flame size={10} /> LIVE
                  </div>
                  {ch.logo_url ? (
                    <img src={ch.logo_url} alt={ch.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  ) : (
                    <Tv size={28} className="text-zinc-700 group-hover:text-red-500 transition" />
                  )}
                </div>
                <div>
                  <h4 className="text-xs font-bold truncate text-white">{ch.name}</h4>
                  <p className="text-[10px] text-zinc-500 uppercase mt-0.5">{ch.category || "Sports & Live"}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Movies & Series */}
      <div className="mt-7 px-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Film size={14} className="text-red-600" /> Movies & Series (VOD)
          </h3>
          <span className="text-[11px] text-zinc-500 font-bold">{movies.length} Zipo</span>
        </div>

        {movies.length === 0 ? (
          <div className="bg-zinc-950/80 border border-zinc-900 p-6 rounded-2xl text-center space-y-1">
            <p className="text-xs text-zinc-400 font-medium">Hakuna filamu zilizowekwa bado kwenye database.</p>
            <p className="text-[10px] text-zinc-600">Weka maudhui kupitia Supabase table ya movies.</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2.5">
            {movies.map((m, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedMovie(m)}
                className="bg-zinc-950 border border-zinc-900 p-2 rounded-2xl space-y-2 hover:border-red-600/50 transition cursor-pointer group shadow"
              >
                <div className="w-full h-32 bg-zinc-900 rounded-xl flex items-center justify-center text-zinc-700 overflow-hidden relative">
                  {m.poster_url ? (
                    <img src={m.poster_url} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  ) : (
                    <Clapperboard size={22} className="text-zinc-600" />
                  )}
                  <span className="absolute bottom-1.5 right-1.5 bg-black/80 px-1.5 py-0.5 rounded text-[8px] font-extrabold text-amber-400">
                    {m.quality || "HD"}
                  </span>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold truncate text-white">{m.title}</h4>
                  <p className="text-[9px] text-zinc-500 mt-0.5">{m.genre || "Action"}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#060911]/95 backdrop-blur-xl border-t border-zinc-900 px-4 py-2.5 flex justify-around items-center">
        <Link href="/" className="flex flex-col items-center gap-1 text-red-500">
          <Play size={18} fill="currentColor" />
          <span className="text-[9px] font-bold">Home</span>
        </Link>
        <Link href="/football" className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition">
          <Tv size={18} />
          <span className="text-[9px] font-medium">Football</span>
        </Link>
        <Link href="/series" className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition">
          <Clapperboard size={18} />
          <span className="text-[9px] font-medium">Series</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition">
          <User size={18} />
          <span className="text-[9px] font-medium">More</span>
        </Link>
      </div>

      {/* NOTIFICATIONS MODAL */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-md rounded-3xl p-5 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center">
              <h3 className="font-black text-sm text-white">Arifa & Taarifa</h3>
              <button onClick={() => setShowNotifications(false)} className="text-zinc-400 hover:text-white bg-zinc-900 p-1.5 rounded-full">
                <X size={16} />
              </button>
            </div>
            <div className="space-y-2.5">
              <div className="bg-zinc-900 border border-zinc-800 p-3.5 rounded-2xl space-y-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-xs text-white">New Live Stream</h4>
                  <span className="text-[9px] text-zinc-500">Muda huu</span>
                </div>
                <p className="text-[11px] text-zinc-400">Azam Sports HD imewashwa sasa hivi. Ingia utazame mechi mubashara.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-3.5 rounded-2xl space-y-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-xs text-white">Subscription Alert</h4>
                  <span className="text-[9px] text-zinc-500">Saa 2 zilizopita</span>
                </div>
                <p className="text-[11px] text-zinc-400">Jaribu kifurushi chetu cha 4K bure kwa siku 3. Usipitwe!</p>
              </div>
            </div>
            <button onClick={() => setShowNotifications(false)} className="w-full bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl text-xs font-bold text-white transition">
              Funga
            </button>
          </div>
        </div>
      )}

      {/* MOVIE DETAIL MODAL */}
      {selectedMovie && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-48 bg-zinc-900">
              {selectedMovie.poster_url && (
                <img src={selectedMovie.poster_url} alt={selectedMovie.title} className="w-full h-full object-cover" />
              )}
              <button 
                onClick={() => setSelectedMovie(null)} 
                className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white p-2 rounded-full hover:bg-black transition"
              >
                <X size={16} />
              </button>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="font-black text-base text-white">{selectedMovie.title}</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">{selectedMovie.description || "Hakuna maelezo ya ziada kwa filamu hii."}</p>
              <div className="flex gap-2 pt-2">
                <a 
                  href={selectedMovie.video_url || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition"
                >
                  <Play size={14} fill="currentColor" /> Tazama Sasa
                </a>
                <button 
                  onClick={() => setSelectedMovie(null)}
                  className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 px-5 py-3 rounded-xl text-xs font-bold transition"
                >
                  Funga
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
