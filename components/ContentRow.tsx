'use client';

import { Play } from 'lucide-react';

interface ContentRowProps {
  title: string;
  items: any[];
  onSelect: (sourceId: string, title: string) => void;
}

export default function ContentRow({ title, items, onSelect }: ContentRowProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mb-8 px-4">
      <h2 className="text-xl font-bold text-white mb-3 tracking-wide border-l-4 border-red-600 pl-2">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
        {items.map((item) => {
          const itemTitle = item.title || item.name || 'Content';
          const imageUrl = item.poster_url || item.logo_url || item.thumbnail_url || 'https://via.placeholder.com/300x450';
          const sourceId = item.sources && item.sources.length > 0 ? item.sources[0].id : null;

          return (
            <div
              key={item.id}
              onClick={() => sourceId && onSelect(sourceId, itemTitle)}
              className="flex-none w-36 sm:w-44 group cursor-pointer relative bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 hover:border-red-600 transition duration-300"
            >
              <div className="aspect-[2/3] w-full relative">
                <img
                  src={imageUrl}
                  alt={itemTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <div className="p-3 bg-red-600 rounded-full text-white shadow-lg">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>

              <div className="p-2">
                <h3 className="text-sm font-semibold text-white truncate">{itemTitle}</h3>
                {item.quality && (
                  <span className="text-[10px] text-neutral-400 font-mono border border-neutral-700 px-1 rounded inline-block mt-1">
                    {item.quality}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
