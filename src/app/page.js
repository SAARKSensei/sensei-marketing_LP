"use client"

import { useEffect, useState } from "react";

import HeroSection from "@/components/HeroSection";
import Purpose from "@/components/Purpose";
import BackToTop from "@/components/BackToTop";
import Pricing from "@/components/Pricing";

export default function Home() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll);

    return window.removeEventListener('scroll', onscroll);
  }, [])

  return (
    <main id="home" className="w-full bg-white relative scroll-smooth">
      <BackToTop scrolled={scrolled} />
      <HeroSection />
      <Purpose />
      <Pricing />
    </main>
  );
}
