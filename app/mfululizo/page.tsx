"use client";
import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

export default function MfululizoPage() {
  const [activeTab, setActiveTab] = useState("Zote");
  const categories = ["Zote", "Action", "Drama", "Sci-Fi", "Comedy"];
  const series = [
    { title: "Game of Thrones", years: "2011 - 2019" },
    { title: "Breaking Bad", years: "2008 - 2013" },
    { title: "Stranger Things", years: "2016 - 2025" },
    { title: "The Last of Us", years: "2023 - 2025" },
  ];

  return (
    <div className="min-h-screen bg-[#060a14] text-white pb-28 pt-3">
      <div className="flex items-center justify-between px-4 mb-3">
        <h1 className="text-base font-bold text-white">Mfululizo</h1>
        <div className="flex items-center gap-3 text-slate-300"><Search size={20} /><SlidersHorizontal size={20} /></div>
      </div>
      <div className="flex gap-2 px-4 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActiveTab(cat)} className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap ${activeTab === cat ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30" : "bg-[#0f172a] text-slate-300 border border-slate-800"}`}>{cat}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 px-4 mt-4">
        {series.map((s, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="w-full h-44 bg-[#0f172a] border border-slate-800 rounded-2xl relative p-2"><span className="bg-black/70 px-1.5 py-0.5 rounded text-[9px] font-bold border border-slate-700">HD</span></div>
            <div><h3 className="text-xs font-bold text-white truncate">{s.title}</h3><p className="text-[10px] text-slate-400">{s.years}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}
