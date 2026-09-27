"use client";
import { Home, Tv, Film, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Live TV", href: "/live-tv", icon: Tv },
    { name: "Movies", href: "/movies", icon: Film },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800/80 pb-4 z-50">
      <div className="flex items-center justify-around p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.name} href={item.href} className="flex flex-col items-center space-y-1">
              <Icon className={`w-6 h-6 transition-all ${isActive ? "text-red-500 scale-110" : "text-zinc-500"}`} />
              <span className={`text-[10px] font-medium ${isActive ? "text-red-500" : "text-zinc-500"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
