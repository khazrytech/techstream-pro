import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "TechStream Pro",
  description: "Streaming platform built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sw">
      <body className="bg-slate-950 text-slate-100">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6 min-h-[calc(100vh-73px)]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
