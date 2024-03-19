"use client"

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Purpose from "@/components/Purpose";

export default function Home() {
  return (
    <main className="w-full bg-white relative">
      <HeroSection />
      <Purpose />
    </main>
  );
}
