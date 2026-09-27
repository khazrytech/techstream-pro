"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Tv, Film, PlaySquare, Bookmark } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Michezo", path: "/michezo", icon: Tv },
    { name: "Filamu", path: "/filamu", icon: Film },
    { name: "Mfululizo", path: "/mfululizo", icon: PlaySquare },
    { name: "Orodha Yangu", path: "/orodha", icon: Bookmark },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#060a14]/95 backdrop-blur-md border-t border-slate-800 z-50 px-2 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          return (
            <Link key={item.name} href={item.path} className="flex flex-col items-center gap-1 w-16 py-1">
              <Icon size={20} className={isActive ? "text-blue-500" : "text-slate-400"} />
              <span className={`text-[10px] font-medium ${isActive ? "text-blue-500 font-semibold" : "text-slate-400"}`}>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
