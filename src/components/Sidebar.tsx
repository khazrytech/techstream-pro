export default function Sidebar() {
  return (
    <div className="w-64 bg-[#060911] border-r border-zinc-900 min-h-screen p-4 flex flex-col justify-between shrink-0">
      <div className="space-y-6">
        <div className="flex items-center gap-2.5 px-2">
          <div className="w-7 h-7 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">T</span>
          </div>
          <span className="font-extrabold text-xs tracking-wider text-white">TECHSTREAM</span>
        </div>

        <div className="space-y-1">
          <p className="px-2 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Menu</p>
          <a href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-red-600 text-white text-xs font-semibold shadow-lg shadow-red-600/20">
            <span>🏠</span> Nyumbani
          </a>
          <a href="/movies" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 text-xs font-medium transition">
            <span>🎬</span> Filamu
          </a>
          <a href="/series" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 text-xs font-medium transition">
            <span>📺</span> Series
          </a>
          <a href="/sports" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 text-xs font-medium transition">
            <span>⚽</span> Michezo
          </a>
          <a href="/my-list" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 text-xs font-medium transition">
            <span>⭐</span> Zangu
          </a>
          <a href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 text-xs font-medium transition">
            <span>⚙️</span> Mipangilio
          </a>
        </div>
      </div>
    </div>
  );
}
