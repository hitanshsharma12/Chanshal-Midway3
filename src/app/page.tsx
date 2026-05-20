"use client";

import { useEffect, useState } from "react";

import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Menu from "@/components/home/Menu";
import SignatureProperties from "@/components/home/SignatureProperties";
import MapSection from "@/components/home/MapSection";
import Footer from "@/components/layout/Footer";
import LuxuryLoader from "@/components/ui/LuxuryLoader";
import Gallery from './../components/home/Gallery';
import BrewerySection from './../components/home/BrewerySection';

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LuxuryLoader />;
  }

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Gallery/>
      <Menu/>
      <BrewerySection />
      <SignatureProperties />
      <MapSection />
      <Footer />
    </main>
  );
}