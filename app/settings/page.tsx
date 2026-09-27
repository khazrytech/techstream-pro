"use client";

import React, { useState, useEffect } from "react";
import { 
  User, Heart, Bookmark, Download, Clock, 
  Wifi, Settings, Crown, ChevronRight, ArrowLeft, 
  Bell, X, Database, RefreshCw
} from "lucide-react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

// HAPA NDIPO UTAPOWEKA URL NA KEY ZA SUPABASE YAKO (Kama zipo kwenye .env.local itazisoma yenyewe)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "WEKA_URL_YAKO_HAPA";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "WEKA_KEY_YAKO_HAPA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function SettingsPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isPremium, setIsPremium] = useState(false);
  
  // Supabase Categories State (Read Only)
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Notifications State
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [notificationsList, setNotificationsList] = useState([
    { id: 1, title: "New Live Stream", desc: "Azam Sports HD imewashwa sasa hivi.", time: "Muda huu" },
    { id: 2, title: "Subscription Alert", desc: "Jaribu kifurushi chetu cha 4K bure kwa siku 3.", time: "Saa 2 zilizopita" }
  ]);

  // Kazi ya Kuvuta Data kutoka Supabase
  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      // 'categories' ni jina la table yako kule Supabase
      const { data, error } = await supabase.from('categories').select('*');
      if (data) {
        setCategories(data);
      }
    } catch (err) {
      console.error("Kuna shida kwenye Supabase:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Vuta data kila unapofungua modal ya orodha
  useEffect(() => {
    if (activeModal === "orodha") {
      fetchCategories();
    }
  }, [activeModal]);

  return (
    <div className="min-h-screen bg-[#060911] text-white pb-24 font-sans selection:bg-red-600 selection:text-white">
      
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-[#060911]/90 backdrop-blur-xl border-b border-zinc-900 px-4 py-3 flex items-center justify-between">
        <Link href="/" className="w-9 h-9 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-300 hover:text-white transition">
          <ArrowLeft size={16} />
        </Link>
        <span className="font-bold text-xs tracking-wider text-zinc-300 uppercase">Profaili & Mipangilio</span>
        <button 
          onClick={() => setActiveModal("notifications")}
          className="w-9 h-9 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-300 hover:text-white transition relative"
        >
          <Bell size={16} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
        </button>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-5">
        
        {/* User Profile Card */}
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-5 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 bg-gradient-to-tr from-red-600 to-rose-500 rounded-full flex items-center justify-center text-white text-xl font-black shadow-lg shadow-red-600/30">
              T
            </div>
            <div className="space-y-1">
              <h2 className="font-black text-sm text-white tracking-wide">techboytz</h2>
              <span className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded-md tracking-wider border ${
                isPremium ? "bg-amber-500/20 text-amber-400 border-amber-500/40" : "bg-zinc-800 text-zinc-400 border-zinc-700/60"
              }`}>
                {isPremium ? "⭐ PREMIUM MEMBER" : "FREE PLAN"}
              </span>
            </div>
          </div>
        </div>

        {/* Premium Banner */}
        {!isPremium && (
          <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border border-amber-500/30 rounded-3xl p-5 overflow-hidden shadow-2xl space-y-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="flex items-center gap-2 text-amber-400 font-black text-xs tracking-widest uppercase">
              <Crown size={16} /> FUNGUA PREMIUM
            </div>
            <p className="text-[11px] text-zinc-300 leading-relaxed font-medium">
              4K • HD • No Ads <br />
              Downloads • High Quality
            </p>
            <button 
              onClick={() => setIsPremium(true)}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-black py-3 rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition active:scale-95 text-center"
            >
              BORESHA SASA
            </button>
          </div>
        )}

        {/* MY LIBRARY SECTION */}
        <div className="space-y-2">
          <p className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest px-2">MY LIBRARY & DATABASE</p>
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl overflow-hidden divide-y divide-zinc-800/60">
            {[
              { id: "profile", label: "Profaili Yangu", icon: User },
              { id: "favorites", label: "Vipendwa Vyangu", icon: Heart },
              { id: "orodha", label: "Categories (Supabase)", icon: Bookmark },
              { id: "downloads", label: "Downloads", icon: Download },
              { id: "history", label: "Historia", icon: Clock },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  onClick={() => setActiveModal(item.id)}
                  className="flex items-center justify-between p-4 hover:bg-zinc-800/40 transition cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-zinc-400 group-hover:text-red-500 transition">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-semibold text-zinc-200">{item.label}</span>
                  </div>
                  <ChevronRight size={16} className="text-zinc-600 group-hover:text-zinc-300 transition" />
                </div>
              );
            })}
          </div>
        </div>

        {/* APP SECTION */}
        <div className="space-y-2">
          <p className="text-[10px] font-extrabold text-zinc-500 uppercase tracking-widest px-2">APP</p>
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl overflow-hidden divide-y divide-zinc-800/60">
            {[
              { id: "data", label: "Matumizi ya Data", icon: Wifi },
              { id: "settings", label: "Mipangilio", icon: Settings },
              { id: "notifications", label: "Arifa (Notifications)", icon: Bell },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id} 
                  onClick={() => setActiveModal(item.id)}
                  className="flex items-center justify-between p-4 hover:bg-zinc-800/40 transition cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-zinc-400 group-hover:text-red-500 transition">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-semibold text-zinc-200">{item.label}</span>
                  </div>
                  <ChevronRight size={16} className="text-zinc-600 group-hover:text-zinc-300 transition" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MODALS */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-md rounded-3xl p-5 space-y-4 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-900 p-1.5 rounded-full"
            >
              <X size={16} />
            </button>

            {/* PROFILE MODAL */}
            {activeModal === "profile" && (
              <div className="space-y-4">
                <h3 className="font-black text-sm text-white">Profaili Yako</h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="text-zinc-400 text-[10px]">Jina Lako</label>
                    <input type="text" defaultValue="techboytz" readOnly className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3 mt-1 text-zinc-400 focus:outline-none" />
                  </div>
                  <button onClick={() => setActiveModal(null)} className="w-full bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl font-bold text-white transition mt-2">
                    Funga
                  </button>
                </div>
              </div>
            )}

            {/* CATEGORIES MODAL (Supabase - Read Only) */}
            {activeModal === "orodha" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-sm text-white flex items-center gap-2">
                    <Database size={16} className="text-emerald-500" /> Categories
                  </h3>
                  <button onClick={fetchCategories} className={`text-zinc-400 hover:text-white p-2 rounded-full bg-zinc-900 ${isLoading ? 'animate-spin text-white' : ''}`}>
                    <RefreshCw size={14} />
                  </button>
                </div>
                
                <p className="text-[10px] text-zinc-500 leading-relaxed">
                  Kumbuka: Ili kuongeza, kubadilisha jina, au kufuta hizi category, unatakiwa kufanya hivyo kule kwenye Dashboard yako ya Supabase mtandaoni. App inaonyesha tu zilizopo.
                </p>

                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {isLoading ? (
                    <div className="text-xs text-zinc-400 text-center py-6">Inavuta data kutoka Supabase...</div>
                  ) : categories.length > 0 ? (
                    categories.map((cat, idx) => (
                      <div key={idx} className="bg-zinc-900/80 border border-zinc-800 p-3 rounded-xl flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">{cat.name || cat.title || `Category ${idx+1}`}</span>
                        <span className="text-[9px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30">Live Sync</span>
                      </div>
                    ))
                  ) : (
                    <div className="text-[11px] text-zinc-500 text-center py-6 border border-dashed border-zinc-800 rounded-xl">
                      Hakuna categories zilizopatikana.<br/>(Weka taarifa kwenye Supabase kwanza).
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* NOTIFICATIONS MODAL */}
            {activeModal === "notifications" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-sm text-white">Arifa (Notifications)</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-400">Washa Arifa</span>
                    <input 
                      type="checkbox" 
                      checked={notificationsEnabled}
                      onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                      className="accent-red-600 w-4 h-4 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  {notificationsList.map((n) => (
                    <div key={n.id} className="bg-zinc-900 border border-zinc-800 p-3 rounded-2xl space-y-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-bold text-xs text-white">{n.title}</h4>
                        <span className="text-[9px] text-zinc-500">{n.time}</span>
                      </div>
                      <p className="text-[11px] text-zinc-400">{n.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* OTHER GENERIC MODALS */}
            {["favorites", "downloads", "history", "data", "settings"].includes(activeModal) && (
              <div className="space-y-3 pt-2">
                <h3 className="font-black text-sm capitalize text-white">{activeModal}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Sehemu hii inafanya kazi vizuri. Taarifa hizi utazisimamia hapa.
                </p>
                <button onClick={() => setActiveModal(null)} className="w-full bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl text-xs font-bold text-white mt-2 transition">
                  Funga
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
