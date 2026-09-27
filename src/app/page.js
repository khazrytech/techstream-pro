import MediaCard from "./components/MediaCard";

export default function Home() {
  const mediaList = [
    { title: "NBC Premier League: Simba SC vs Yanga SC", category: "Sports" },
    { title: "The Ultimate Tech Revolution 2026", category: "Documentary" },
    { title: "Action Thriller: Mji Wa Giza", category: "Movies" },
    { title: "Live 24/7 News Channel", category: "Live TV" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-600 to-rose-900 rounded-3xl p-8 flex flex-col justify-center min-h-[200px] shadow-lg">
        <span className="bg-black/30 w-max px-3 py-1 rounded-full text-xs font-semibold mb-3 text-white">INAYORUSHWA SASA</span>
        <h1 className="text-2xl md:text-4xl font-extrabold mb-2 text-white">Karibu TechStream Pro</h1>
        <p className="text-sm md:text-base text-slate-100 max-w-xl">
          Tazama filamu kali, vipindi vya michezo vya moja kwa moja, na chaneli za kipekee kwa ubora wa juu kabisa.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 border-l-4 border-red-500 pl-3 text-white">Zilizopo Moja kwa Moja</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mediaList.map((item, index) => (
            <MediaCard key={index} title={item.title} category={item.category} />
          ))}
        </div>
      </div>
    </div>
  );
}
