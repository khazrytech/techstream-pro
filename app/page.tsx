"use client";

import React, { useEffect, useState } from "react";
import { Play, Search, Bell, User, Tv, Film, Clapperboard, X } from "lucide-react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

// Supabase Setup
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "WEKA_URL_YAKO_HAPA";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "WEKA_KEY_YAKO_HAPA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function HomePage() {
  const [channels, setChannels] = useState<any[]>([]);
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  // State ya Modal ya Notifications
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: chData } = await supabase.from("channels").select("*").eq("is_active", true);
        const { data: mvData } = await supabase.from("movies").select("*");
        if (chData) setChannels(chData);
        if (mvData) setMovies(mvData);
      } catch (err) {
        console.error("Error fetching database:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#060a14] text-white pb-28 font-sans selection:bg-blue-600">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#060a14]/95 sticky top-0 z-40 backdrop-blur-md border-b border-slate-800/60">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
            <Play size={16} fill="white" className="text-white ml-0.5" />
          </div>
          <span className="font-black text-sm tracking-wider text-white">TECHSTREAM</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/settings" className="w-9 h-9 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white transition">
            <User size={18} />
          </Link>
        </div>
      </div>

      {/* Search Bar & Notifications (Pembeni ya Search) */}
      <div className="px-4 mt-4 flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tafuta chaneli au filamu..." 
            className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-10 pr-4 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>
        
        {/* Kitufe cha Notifications Kimekaa Hapa Kulia */}
        <button 
          onClick={() => setShowNotifications(true)}
          className="w-[46px] h-[46px] bg-[#0f172a] border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition relative shrink-0 shadow-sm"
        >
          <Bell size={18} />
          <span className="absolute top-3 right-3 w-2 h-2 bg-red-600 rounded-full animate-pulse border border-[#0f172a]"></span>
        </button>
      </div>

      {/* Live Channels Section */}
      <div className="mt-6 px-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-white flex items-center gap-2">
            <Tv size={16} className="text-blue-500" /> Live Channels
          </h3>
          <span className="text-xs text-blue-400 font-semibold cursor-pointer">Tazama Zote</span>
        </div>

        {loading ? (
          <div className="text-center py-10 text-xs text-slate-400 flex flex-col items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            Inapakia...
          </div>
        ) : channels.length === 0 ? (
          <div className="bg-[#0f172a] border border-slate-800 p-5 rounded-2xl text-center space-y-2">
            <p className="text-xs font-bold text-white">Hakuna chaneli bado.</p>
          </div>
        ) : (
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {channels.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase())).map((ch, idx) => (
              <div key={idx} className="flex-shrink-0 w-32 space-y-2 group cursor-pointer">
                <div className="w-full h-40 bg-[#0f172a] border border-slate-800 rounded-2xl p-3 flex flex-col justify-between relative group-hover:border-blue-500 transition shadow-md">
                  <span className="absolute top-2 left-2 bg-red-600 px-1.5 py-0.5 rounded text-[8px] font-bold text-white">LIVE</span>
                  <div className="my-auto flex items-center justify-center">
                    <Tv size={30} className="text-slate-500 group-hover:text-blue-400 transition" />
                  </div>
                  <span className="text-[10px] text-slate-400 text-center bg-slate-900 py-1 rounded-lg">HD Stream</span>
                </div>
                <h4 className="text-xs font-bold truncate text-white">{ch.name}</h4>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Movies Section */}
      <div className="mt-6 px-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm text-white flex items-center gap-2">
            <Film size={16} className="text-purple-500" /> Movies & Series
          </h3>
        </div>
        {movies.length === 0 ? (
          <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-2xl text-center text-xs text-slate-400">
            Hakuna filamu bado.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {movies.map((m, idx) => (
              <div key={idx} className="bg-[#0f172a] border border-slate-800 p-2.5 rounded-2xl space-y-2">
                <div className="w-full h-40 bg-slate-800 rounded-xl flex items-center justify-center text-slate-500">
                  <Clapperboard size={24} />
                </div>
                <h4 className="text-xs font-bold truncate text-white">{m.title}</h4>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL YA NOTIFICATIONS (Inafunguka hapa hapa Home) */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-md rounded-3xl p-5 space-y-4 shadow-2xl relative">
            <button 
              onClick={() => setShowNotifications(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-900 p-1.5 rounded-full transition"
            >
              <X size={16} />
            </button>
            <h3 className="font-black text-sm text-white flex items-center gap-2">
              <Bell size={16} className="text-red-500" /> Arifa Mpya
            </h3>
            
            <div className="space-y-3 mt-4 max-h-[60vh] overflow-y-auto">
              {/* Mfano wa Notification 1 */}
              <div className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-2xl space-y-1 hover:border-zinc-700 transition cursor-pointer">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-xs text-white">New Live Stream</h4>
                  <span className="text-[9px] text-zinc-500">Muda huu</span>
                </div>
                <p className="text-[11px] text-zinc-400">Azam Sports HD imewashwa sasa hivi. Ingia utazame mechi mubashara.</p>
              </div>

              {/* Mfano wa Notification 2 */}
              <div className="bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-2xl space-y-1 hover:border-zinc-700 transition cursor-pointer">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-xs text-white">Subscription Alert</h4>
                  <span className="text-[9px] text-zinc-500">Saa 2 zilizopita</span>
                </div>
                <p className="text-[11px] text-zinc-400">Jaribu kifurushi chetu cha 4K bure kwa siku 3. Usipitwe!</p>
              </div>
            </div>

            <button 
              onClick={() => setShowNotifications(false)}
              className="w-full bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl text-xs font-bold text-white mt-2 transition"
            >
              Funga
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
