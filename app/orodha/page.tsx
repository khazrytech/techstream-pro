"use client";
import { Play, MoreVertical } from "lucide-react";

export default function OrodhaPage() {
  const items = [
    { title: "Dune: Part Two", info: "2024 • Action • Sci-Fi" },
    { title: "John Wick 4", info: "2023 • Action • Thriller" },
    { title: "The Batman", info: "2022 • Action • Crime" },
  ];

  return (
    <div className="min-h-screen bg-[#060a14] text-white pb-28 pt-3 px-4">
      <h1 className="text-base font-bold mb-4">Orodha Yangu</h1>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx} className="bg-[#0f172a] border border-slate-800/80 p-3 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-16 bg-slate-900 rounded-xl border border-slate-800"></div>
              <div>
                <h3 className="text-xs font-bold text-white">{item.title}</h3>
                <p className="text-[10px] text-slate-400 mt-1">{item.info}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white"><Play size={14} fill="currentColor" /></button>
              <button className="text-slate-400"><MoreVertical size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
