"use client";
import React, { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import { Play, Tv } from "lucide-react";

export default function Home() {
  // Hapa tunaweka link ya kuanzia (Default stream) kabla hajachagua chaneli
  const [activeStream, setActiveStream] = useState("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8");
  const [activeTitle, setActiveTitle] = useState("Chaneli ya Majaribio");

  // Orodha ya muda ya muonekano (Tutaivuta kutoka Supabase kwenye hatua ijayo)
  const mockChannels = [
    { id: "1", name: "Azam Sports 1 HD", category: "Michezo", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { id: "2", name: "SuperSport PL", category: "Michezo", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { id: "3", name: "TBC 1", category: "Tanzania", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { id: "4", name: "Wasafi TV", category: "Tanzania", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Sehemu ya Video Player (Juu) */}
      <section className="space-y-3">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <h2 className="text-lg font-bold text-white uppercase tracking-wider">{activeTitle}</h2>
        </div>
        
        <VideoPlayer src={activeStream} />
      </section>

      {/* Sehemu ya Orodha ya Chaneli (Chini) */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Tv className="w-5 h-5 text-red-500" />
            Chaneli Maarufu
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {mockChannels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => {
                setActiveStream(channel.url);
                setActiveTitle(channel.name);
              }}
              className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
                activeTitle === channel.name 
                  ? "bg-red-600/20 border-red-500 shadow-lg shadow-red-900/20 scale-95" 
                  : "bg-zinc-900 border-zinc-800 hover:bg-zinc-800"
              }`}
            >
              <div className="w-12 h-12 mb-3 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-700 shadow-inner">
                <Play className={`w-5 h-5 pl-1 ${activeTitle === channel.name ? "text-red-500" : "text-zinc-400"}`} />
              </div>
              <span className="text-sm font-semibold text-center text-white line-clamp-1">{channel.name}</span>
              <span className="text-xs text-zinc-500 mt-1">{channel.category}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
