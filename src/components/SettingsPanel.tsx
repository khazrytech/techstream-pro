"use client";

interface SettingsPanelProps {
  open: boolean;
  onClose: () => void;
}

export default function SettingsPanel({ open, onClose }: SettingsPanelProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="w-full max-w-md bg-[#101019] border border-zinc-800 rounded-3xl p-6 shadow-2xl overflow-y-auto max-h-[90vh] text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="text-xl">⚙️</span>
            <h3 className="font-bold text-base">Mipangilio</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* Content Sections */}
        <div className="space-y-6 pt-4">
          
          {/* Akaunti */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Akaunti</p>
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm">👤</span>
                <span className="text-xs font-medium">Wasifu</span>
              </div>
              <span className="text-xs text-zinc-400">John Doe ›</span>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm">📱</span>
                <span className="text-xs font-medium">Vifaa</span>
              </div>
              <span className="text-xs text-zinc-400">3 devices ›</span>
            </div>
          </div>

          {/* Playback */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Playback</p>
            
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm">🎬</span>
                <span className="text-xs font-medium">Ubora wa Video</span>
              </div>
              <span className="text-xs text-zinc-400">Auto ›</span>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm">💬</span>
                <span className="text-xs font-medium">Manukuu</span>
              </div>
              <span className="text-xs text-zinc-400">Kiswahili ›</span>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm">🔊</span>
                <span className="text-xs font-medium">Audio</span>
              </div>
              <span className="text-xs text-zinc-400">Auto ›</span>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm">▶️</span>
                <span className="text-xs font-medium">Autoplay</span>
              </div>
              <div className="w-10 h-6 bg-red-600 rounded-full relative p-1 flex items-center justify-end">
                <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
              </div>
            </div>
          </div>

          {/* Mapendeleo */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Mapendeleo</p>
            
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm">🔔</span>
                <span className="text-xs font-medium">Arifa</span>
              </div>
              <div className="w-10 h-6 bg-red-600 rounded-full relative p-1 flex items-center justify-end">
                <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm">📊</span>
                <span className="text-xs font-medium">Data Saver</span>
              </div>
              <div className="w-10 h-6 bg-zinc-800 rounded-full relative p-1 flex items-center justify-start">
                <div className="w-4 h-4 bg-zinc-400 rounded-full shadow-md"></div>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm">🌙</span>
                <span className="text-xs font-medium">Dark Mode</span>
              </div>
              <div className="w-10 h-6 bg-red-600 rounded-full relative p-1 flex items-center justify-end">
                <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Button */}
        <div className="mt-6 pt-4 border-t border-zinc-800">
          <button
            onClick={onClose}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl text-xs transition shadow-lg shadow-red-600/20"
          >
            Funga Mipangilio
          </button>
        </div>

      </div>
    </div>
  );
}
