"use client";

import React, { useEffect, useState } from "react";
import { Play, Search, User, Tv, Film, Clapperboard, Bell, X, Flame } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function HomePage() {
  const [channels, setChannels] = useState<any[]>([]);
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);

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
    <div className="min-h-screen bg-[#050505] text-white pb-28 selection:bg-red-600 selection:text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#050505]/95 sticky top-0 z-40 backdrop-blur-md border-b border-zinc-900">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30">
            <Play size={16} fill="white" className="text-white ml-0.5" />
          </div>
          <span className="font-black text-sm tracking-wider text-white">TECHSTREAM</span>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setShowNotifications(true)}
            className="w-9 h-9 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-300 hover:text-white transition relative"
          >
            <Bell size={16} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
          </button>
          <Link href="/settings" className="w-9 h-9 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-300 hover:text-white transition">
            <User size={18} />
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 mt-3">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tafuta chaneli, filamu, au michezo..." 
            className="w-full bg-zinc-900/90 border border-zinc-800/80 rounded-2xl py-3 pl-10 pr-4 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-600 transition"
          />
        </div>
      </div>

      {/* Live Channels */}
      <div className="mt-5 px-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Tv size={14} className="text-red-600" /> Live Channels & Sports
          </h3>
          <span className="text-[11px] text-red-500 font-bold">{channels.length} Zipo</span>
        </div>

        {loading ? (
          <div className="text-center py-10 text-xs text-zinc-500">Inapakia kutoka Supabase...</div>
        ) : channels.length === 0 ? (
          <div className="bg-zinc-950 border border-zinc-900 p-5 rounded-2xl text-center space-y-1">
            <p className="text-xs text-zinc-400">Hakuna chaneli kwenye Database bado.</p>
            <p className="text-[10px] text-zinc-500">Weka taarifa kupitia Supabase ili zionekane hapa.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {channels.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())).map((ch, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-900 p-3 rounded-2xl space-y-2 hover:border-red-600/50 transition cursor-pointer group">
                <div className="w-full h-24 bg-zinc-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-2 left-2 bg-red-600 px-1.5 py-0.5 rounded text-[8px] font-black text-white flex items-center gap-1">
                    <Flame size={10} /> LIVE
                  </div>
                  {ch.logo_url ? (
                    <img src={ch.logo_url} alt={ch.name} className="w-full h-full object-cover" />
                  ) : (
                    <Tv size={28} className="text-zinc-700 group-hover:text-red-500 transition" />
                  )}
                </div>
                <h4 className="text-xs font-bold truncate text-white">{ch.name}</h4>
                <p className="text-[10px] text-zinc-500 uppercase">{ch.category || "Sports"}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Movies */}
      <div className="mt-6 px-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <Film size={14} className="text-red-600" /> Movies & Series (VOD)
          </h3>
        </div>
        {movies.length === 0 ? (
          <div className="bg-zinc-950 border border-zinc-900 p-5 rounded-2xl text-center">
            <p className="text-xs text-zinc-400">Hakuna filamu zilizowekwa bado kwenye database.</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2.5">
            {movies.map((m, idx) => (
              <div key={idx} className="bg-zinc-950 border border-zinc-900 p-2 rounded-xl space-y-1.5">
                <div className="w-full h-32 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-700 overflow-hidden">
                  {m.poster_url ? (
                    <img src={m.poster_url} alt={m.title} className="w-full h-full object-cover" />
                  ) : (
                    <Clapperboard size={20} />
                  )}
                </div>
                <h4 className="text-[11px] font-bold truncate text-white">{m.title}</h4>
                <p className="text-[9px] text-zinc-500">{m.quality || "HD"}</p>
              </div>
            ))}
          </div>
        )}
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
    </div>
  );
}
