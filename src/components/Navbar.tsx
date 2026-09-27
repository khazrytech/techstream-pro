'use client';

import Link from 'next/link';
import { Search, Tv, Film, Flame, Home } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
          TECHSTREAM<span className="text-xs ml-1 px-1.5 py-0.5 rounded bg-red-600 text-white font-bold uppercase">PRO</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-300">
        <Link href="/" className="hover:text-red-500 flex items-center gap-1.5 transition">
          <Home className="w-4 h-4" /> Nyumbani
        </Link>
        <Link href="/channels" className="hover:text-red-500 flex items-center gap-1.5 transition">
          <Tv className="w-4 h-4" /> Live TV
        </Link>
        <Link href="/movies" className="hover:text-red-500 flex items-center gap-1.5 transition">
          <Film className="w-4 h-4" /> Movies
        </Link>
        <Link href="/sports" className="hover:text-red-500 flex items-center gap-1.5 transition">
          <Flame className="w-4 h-4" /> Sports
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/search"
          className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition"
        >
          <Search className="w-5 h-5" />
        </Link>
      </div>
    </nav>
  );
}
