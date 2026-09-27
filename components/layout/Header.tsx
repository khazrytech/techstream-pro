import { Search, Bell, UserCircle } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 p-4 flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-black text-white shadow-md shadow-red-600/30">
          TS
        </div>
        <span className="text-lg font-black tracking-wider text-white">TECHSTREAM</span>
      </Link>
      <div className="flex items-center space-x-4">
        <button className="text-zinc-400 hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="text-zinc-400 hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-zinc-950"></span>
        </button>
        <Link href="/login" className="text-zinc-400 hover:text-white transition-colors">
          <UserCircle className="w-6 h-6" />
        </Link>
      </div>
    </header>
  );
}
