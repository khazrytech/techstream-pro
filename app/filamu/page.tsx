"use client";
import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

export default function FilamuPage() {
  const [activeTab, setActiveTab] = useState("Zote");
  const categories = ["Zote", "Action", "Drama", "Comedy", "Horror"];
  const movies = [
    { title: "Dune: Part Two", year: "2024", quality: "4K" },
    { title: "The Batman", year: "2022", quality: "HD" },
    { title: "John Wick 4", year: "2023", quality: "4K" },
    { title: "Oppenheimer", year: "2023", quality: "4K" },
  ];

  return (
    <div className="min-h-screen bg-[#060a14] text-white pb-28 pt-3">
      <div className="flex items-center justify-between px-4 mb-3">
        <h1 className="text-base font-bold text-white">Filamu</h1>
        <div className="flex items-center gap-3 text-slate-300"><Search size={20} /><SlidersHorizontal size={20} /></div>
      </div>
      <div className="flex gap-2 px-4 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActiveTab(cat)} className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${activeTab === cat ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-[#0f172a] text-slate-300 border border-slate-800"}`}>{cat}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 px-4 mt-4">
        {movies.map((m, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="w-full h-52 bg-[#0f172a] border border-slate-800 rounded-2xl relative p-2"><span className="bg-black/70 px-1.5 py-0.5 rounded text-[9px] font-bold border border-slate-700">{m.quality}</span></div>
            <div><h3 className="text-xs font-bold text-white truncate">{m.title}</h3><p className="text-[10px] text-slate-400">{m.year}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}
