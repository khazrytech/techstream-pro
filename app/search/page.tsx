"use client";
import { Search, X } from "lucide-react";

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-[#060a14] text-white p-4 pb-28">
      <div className="relative mb-4">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
        <input type="text" defaultValue="the" className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl py-3 pl-10 pr-10 text-xs text-white" />
        <X className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
      </div>
      <div className="space-y-2 mb-6">
        <h3 className="text-xs font-bold text-slate-400">Mapendekezo</h3>
        <div className="flex flex-wrap gap-2">
          {["The Batman", "The Last of Us", "The Witcher", "The Equalizer"].map((t) => (
            <span key={t} className="bg-[#0f172a] border border-slate-800 px-3 py-1.5 rounded-full text-xs text-slate-200">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
