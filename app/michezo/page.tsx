"use client";
import React, { useState } from "react";
import { Search, SlidersHorizontal, Radio } from "lucide-react";

export default function MichezoPage() {
  const [tab, setTab] = useState("Soka");
  return (
    <div className="min-h-screen bg-[#060a14] text-white pb-28 pt-3">
      <div className="flex items-center justify-between px-4 mb-3">
        <h1 className="text-base font-bold text-white">Michezo</h1>
        <div className="flex items-center gap-3 text-slate-300"><Search size={20} /><SlidersHorizontal size={20} /></div>
      </div>
      <div className="flex gap-2 px-4 overflow-x-auto pb-2">
        {["Soka", "Mpira wa Kikapu", "Tenisi", "UFC"].map((t) => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${tab === t ? "bg-blue-600 text-white shadow-lg" : "bg-[#0f172a] text-slate-300 border border-slate-800"}`}>{t}</button>
        ))}
      </div>
      {/* Live Match Featured */}
      <div className="px-4 mt-4">
        <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-4 space-y-3 shadow-xl">
          <div className="flex justify-between items-center text-xs text-slate-400"><span className="font-semibold text-white">La Liga</span><span className="flex items-center gap-1 text-red-500 font-bold"><Radio size={12} className="animate-pulse" /> LIVE</span></div>
          <div className="flex justify-between items-center py-2">
            <span className="font-bold text-sm">Real Madrid</span>
            <span className="text-xs bg-slate-900 border border-slate-800 px-3 py-1 rounded-xl font-mono">VS</span>
            <span className="font-bold text-sm">Barcelona</span>
          </div>
          <p className="text-[10px] text-slate-400">Leo • 10:00 PM</p>
        </div>
      </div>
    </div>
  );
}
