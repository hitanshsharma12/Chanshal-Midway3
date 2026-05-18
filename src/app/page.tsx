"use client";

import { useEffect, useState } from "react";

import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import SignatureProperties from "@/components/home/SignatureProperties";
import MapSection from "@/components/home/MapSection";
import Footer from "@/components/layout/Footer";
import LuxuryLoader from "@/components/ui/LuxuryLoader";
import Gallery from './../components/home/Gallery';

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
      <SignatureProperties />
      <MapSection />
      <Footer />
    </main>
  );
}