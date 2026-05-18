import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import SignatureProperties from "@/components/home/SignatureProperties";
import MapSection from "@/components/home/MapSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <SignatureProperties />
      <MapSection />
      <Footer />
    </main>
  );
}