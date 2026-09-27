import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechStream Pro",
  description: "Mfumo wa Kisasa wa IPTV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sw">
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen pb-20`}>
        <Header />
        <main className="w-full max-w-7xl mx-auto">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
