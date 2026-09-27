'use client';

import { Play, Info } from 'lucide-react';

interface HeroBannerProps {
  item?: {
    id: string;
    title?: string;
    name?: string;
    description?: string;
    backdrop_url?: string;
    poster_url?: string;
    sources?: any[];
  };
  onPlay: (sourceId: string, title: string) => void;
}

export default function HeroBanner({ item, onPlay }: HeroBannerProps) {
  if (!item) return null;

  const title = item.title || item.name || 'TechStream Content';
  const bgUrl = item.backdrop_url || item.poster_url || 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1200';
  const sourceId = item.sources && item.sources.length > 0 ? item.sources[0].id : null;

  return (
    <div className="relative w-full h-[60vh] min-h-[380px] max-h-[550px] bg-neutral-900 overflow-hidden mb-6">
      <img
        src={bgUrl}
        alt={title}
        className="w-full h-full object-cover object-center opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

      <div className="absolute bottom-8 left-4 right-4 max-w-3xl z-10">
        <span className="px-2.5 py-1 text-xs font-bold uppercase bg-red-600 text-white rounded-md mb-3 inline-block">
          FEATURED
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-2 drop-shadow-md">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-neutral-300 line-clamp-2 mb-4 max-w-xl">
          {item.description || 'Tazama mechi, chaneli za moja kwa moja na filamu mpya kabisa kwenye TechStream Pro.'}
        </p>

        <div className="flex items-center gap-3">
          {sourceId && (
            <button
              onClick={() => onPlay(sourceId, title)}
              className="flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition shadow-lg"
            >
              <Play className="w-5 h-5 fill-current" /> Tazama Sasa
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
