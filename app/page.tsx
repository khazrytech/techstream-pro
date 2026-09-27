"use client";

import React, { useState, useEffect } from "react";
import { 
  Play, Search, Bell, Tv, Film, 
  User, X 
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function HomePage() {
  const [channels, setChannels] = useState<any[]>([]);
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { data: chanData } = await supabase.from("channels").select("*");
        if (chanData) setChannels(chanData);

        const { data: movData } = await supabase.from("movies").select("*");
        if (movData) setMovies(movData);
      } catch (err) {
        console.log("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#060911] text-white pb-24 font-sans selection:bg-red-600 selection:text-white">
      
      {/* Top Header */}
      <div className="sticky top-0 z-40 bg-[#060911]/90 backdrop-blur-xl border-b border-zinc-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30">
            <Play size={18} fill="white" className="text-white ml-0.5" />
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
            <User size={16} />
          </Link>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-6">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3.5 text-zinc-500" size={16} />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tafuta chaneli au filamu..." 
            className="w-full bg-zinc-900/80 border border-zinc-800/80 rounded-2xl pl-10 pr-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-red-600/65 transition shadow-inner"
          />
        </div>

        {/* LIVE CHANNELS SECTION */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-zinc-200 font-black text-xs uppercase tracking-wider">
              <Tv size={16} className="text-red-600" /> Live Channels
            </div>
            <span className="text-[10px] text-zinc-500 font-semibold">Tazama Zote</span>
          </div>

          {loading ? (
            <div className="py-10 text-center space-y-2">
              <div className="w-6 h-6 border-2 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-[11px] text-zinc-500">Inapakia...</p>
            </div>
          ) : channels.length === 0 ? (
            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 text-center space-y-2">
              <p className="text-xs text-zinc-400">Hakuna chaneli bado zilizowekwa Supabase.</p>
              <p className="text-[10px] text-zinc-500">Ongeza kwenye table ya channels.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {channels.filter(c => c.name?.toLowerCase().includes(searchQuery.toLowerCase())).map((chan) => (
                <div key={chan.id} className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-3 space-y-2 hover:border-zinc-700 transition cursor-pointer group">
                  <div className="aspect-video bg-black/60 rounded-xl overflow-hidden relative flex items-center justify-center">
                    {chan.logo_url ? (
                      <img src={chan.logo_url} alt={chan.name} className="w-full h-full object-cover" />
                    ) : (
                      <Tv size={24} className="text-zinc-600 group-hover:text-red-500 transition" />
                    )}
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-[8px] font-black px-1.5 py-0.5 rounded">LIVE</span>
                  </div>
                  <h4 className="font-bold text-xs text-white truncate">{chan.name}</h4>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MOVIES & SERIES SECTION */}
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-zinc-200 font-black text-xs uppercase tracking-wider">
              <Film size={16} className="text-amber-500" /> Movies & Series
            </div>
            <span className="text-[10px] text-zinc-500 font-semibold">Maktaba</span>
          </div>

          {loading ? (
            <div className="py-10 text-center space-y-2">
              <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          ) : movies.length === 0 ? (
            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 text-center space-y-2">
              <p className="text-xs text-zinc-400">Hakuna filamu bado.</p>
              <p className="text-[10px] text-zinc-500">Weka maudhui kupitia Supabase table ya movies.</p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {movies.filter(m => m.title?.toLowerCase().includes(searchQuery.toLowerCase())).map((mov) => (
                <div key={mov.id} className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-3 flex items-center gap-3 hover:border-zinc-700 transition cursor-pointer">
                  <div className="w-14 h-16 bg-black rounded-xl overflow-hidden flex-shrink-0">
                    {mov.poster_url ? (
                      <img src={mov.poster_url} alt={mov.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-[10px] text-zinc-500">Poster</div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs text-white truncate">{mov.title}</h4>
                    <p className="text-[11px] text-zinc-400 truncate mt-0.5">{mov.description || "Maudhui bora ya kipekee"}</p>
                    <span className="inline-block text-[9px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded mt-1 font-semibold">HD</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

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
