"use client";
import { Play, Pause, RotateCcw, RotateCw, Maximize2, MessageSquare, ListVideo } from "lucide-react";

export default function WatchPage() {
  return (
    <div className="min-h-screen bg-[#060a14] text-white flex flex-col justify-between pb-20">
      {/* Video Screen Area */}
      <div className="w-full h-64 bg-black relative flex items-center justify-center border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        <div className="flex items-center gap-6 relative z-10 text-white">
          <RotateCcw size={22} className="cursor-pointer" />
          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer">
            <Pause size={22} fill="white" />
          </div>
          <RotateCw size={22} className="cursor-pointer" />
        </div>
        {/* Progress Bar & Controls */}
        <div className="absolute bottom-3 left-4 right-4 z-10 space-y-1">
          <div className="flex justify-between text-[10px] text-slate-300 font-mono"><span>42:18</span><span>2:49:00</span></div>
          <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden"><div className="w-1/3 h-full bg-blue-500"></div></div>
        </div>
      </div>

      {/* Details & Episodes */}
      <div className="p-4 space-y-3 flex-1">
        <h2 className="text-base font-black">John Wick 4</h2>
        <p className="text-[11px] text-slate-400">2023 • Action • Thriller • HD • 4K</p>
        <div className="flex gap-4 border-b border-slate-800 pb-2 text-xs font-semibold">
          <span className="text-slate-400">Maelezo</span>
          <span className="text-blue-500 border-b-2 border-blue-500 pb-2">Sura nyingine</span>
          <span className="text-slate-400">Maoni</span>
        </div>
        <div className="space-y-2 pt-1">
          <div className="bg-[#0f172a] border border-slate-800 p-2.5 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-16 h-10 bg-slate-900 rounded-lg"></div>
              <div><h4 className="text-xs font-bold">Sura ya 1</h4><p className="text-[10px] text-slate-400">Kuanza tena</p></div>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">1:12:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
