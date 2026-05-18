"use client";

import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "TIMELESS WEDDINGS",
    subtitle: "Sacred Vows, Eternal Memories",
    description:
      "Step into a world of divine celebrations where ancient rituals meet modern grandeur. Every wedding at our banquet is a masterpiece of tradition and elegance.",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=1200&q=85&fit=crop",
    tag: "WEDDINGS",
  },
  {
    id: 2,
    title: "GRAND RECEPTIONS",
    subtitle: "Where Every Detail Shines",
    description:
      "Celebrate the union of two souls with a reception that radiates warmth, color, and cultural richness — crafted to leave every guest in awe.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=85&fit=crop",
    tag: "RECEPTIONS",
  },
  {
    id: 3,
    title: "FESTIVE PARTIES",
    subtitle: "Joyous Moments, Vibrant Celebrations",
    description:
      "From dazzling festive galas to intimate family brunches, our venue transforms into a canvas of color and light — the perfect backdrop for your most stellar gatherings.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=85&fit=crop",
    tag: "PARTIES",
  },
  {
    id: 4,
    title: "HALDI & MEHNDI",
    subtitle: "Pre-Wedding Rituals in Full Bloom",
    description:
      "Honor sacred pre-wedding traditions in bespoke spaces draped with marigolds and melody — a celebratory sensory journey that brings loved ones together.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=85&fit=crop",
    tag: "RITUALS",
  },
  {
    id: 5,
    title: "SANGEET NIGHTS",
    subtitle: "Dance, Music & Celebration",
    description:
      "Let the rhythm of the dhol and the golden glow of luxury lighting set the stage for an unforgettable night of high-energy music and family performances.",
    image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?w=1200&q=85&fit=crop",
    tag: "SANGEET",
  },
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalSlides = slides.length;

  // Touch tracking for buttery-smooth mobile swipes
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Clone array endpoints for infinite loop scrolling mechanics
  const clonedSlides = [slides[totalSlides - 1], ...slides, slides[0]];

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrent((prev) => prev - 1);
  };

  // Autoplay loop setup
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  // Handle seamless transition reset loop at endpoints
  const handleTransitionEnd = () => {
    if (current === 0) {
      setIsTransitioning(false);
      setCurrent(totalSlides);
    } else if (current === totalSlides + 1) {
      setIsTransitioning(false);
      setCurrent(1);
    }
  };

  // Re-enable smooth transitions instantly after resetting positional indexes
  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Touch swipe events
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50;
    const layoutDiff = touchStartX.current - touchEndX.current;

    if (Math.abs(layoutDiff) > swipeThreshold) {
      if (layoutDiff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section className="bg-[#040d0c] text-white py-20 md:py-28 overflow-hidden select-none font-sans">
      
      {/* Structural Header Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-16 mb-12 md:mb-16">
        <div className="flex items-start gap-4">
          <div className="w-10 h-[1px] bg-[#c5a880] mt-4 flex-shrink-0" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-widest leading-tight text-gray-100 uppercase">
            Exclusively <br /> For You
          </h2>
        </div>
        <p className="text-gray-400 text-sm font-light leading-relaxed max-w-md md:pt-3 tracking-wide">
          Refinement and tradition intertwine with divine celebrations and soulful moments — every function at our banquet hall is custom crafted to capture memories for eternity.
        </p>
      </div>

      {/* Main Track Interactive Arena */}
      <div className="relative w-full px-0 md:px-16 lg:px-24">
        
        {/* Desktop Controls - Hidden on Mobile Touch Screens */}
        <button
          onClick={handlePrev}
          className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-30 hidden md:flex w-12 h-12 border border-[#c5a880]/40 rounded-full bg-[#040d0c]/80 backdrop-blur-md items-center justify-center text-[#c5a880] hover:bg-[#c5a880] hover:text-[#040d0c] hover:border-[#c5a880] transition-all duration-300"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 hidden md:flex w-12 h-12 border border-[#c5a880]/40 rounded-full bg-[#040d0c]/80 backdrop-blur-md items-center justify-center text-[#c5a880] hover:bg-[#c5a880] hover:text-[#040d0c] hover:border-[#c5a880] transition-all duration-300"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>

        {/* Outer Slider Window */}
        <div 
          className="w-full overflow-visible md:overflow-hidden px-6 md:px-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            className="flex gap-4 md:gap-6"
            style={{
              transform: `translateX(calc(-${current * 100}%))`,
              transition: isTransitioning ? "transform 850ms cubic-bezier(0.25, 1, 0.5, 1)" : "none",
            }}
          >
            {clonedSlides.map((slide, index) => {
              const isActive = index === current;

              return (
                <div
                  key={`${slide.id}-${index}`}
                  className="w-[82vw] md:w-[calc(33.333%-16px)] flex-shrink-0 transition-all duration-700 relative"
                >
                  {/* Photo Framework Layer */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm shadow-2xl bg-gray-900">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${
                        isActive ? "scale-100" : "scale-105"
                      }`}
                    />
                    
                    {/* Visual Mask Layer mimicking Taj image aesthetics */}
                    <div 
                      className={`absolute inset-0 transition-colors duration-700 ${
                        isActive ? "bg-black/15" : "bg-[#040d0c]/70 backdrop-blur-[1px]"
                      }`} 
                    />

                    {/* Elegant overlay text for inactive flanking slides */}
                    {!isActive && (
                      <div className="absolute inset-0 flex items-center justify-center p-4 animate-fade-in">
                        <span className="font-serif text-sm tracking-[0.25em] text-[#c5a880]/90 text-center uppercase border-b border-[#c5a880]/20 pb-2 max-w-[80%]">
                          {slide.title}
                        </span>
                      </div>
                    )}

                    {/* Active Floating Pill Tag */}
                    {isActive && (
                      <span className="absolute top-4 right-4 font-serif text-[10px] tracking-[0.2em] text-white bg-[#040d0c]/60 border border-[#c5a880]/30 backdrop-blur-md px-3 py-1 rounded-sm uppercase">
                        {slide.tag}
                      </span>
                    )}
                  </div>

                  {/* High-End Floating Info Card Block */}
                  <div
                    className={`bg-white text-[#040d0c] p-6 md:p-8 shadow-xl relative z-10 transition-all duration-700 mt-[-20px] mx-4 rounded-sm ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none md:hidden"
                    }`}
                  >
                    <h3 className="font-serif text-[11px] tracking-[0.2em] text-gray-500 uppercase mb-2">
                      {slide.title}
                    </h3>
                    <h4 className="font-serif text-lg md:text-xl font-normal text-gray-900 leading-snug mb-3">
                      {slide.subtitle}
                    </h4>
                    <p className="text-gray-600 text-xs font-light leading-relaxed mb-4">
                      {slide.description}
                    </p>
                    <a
                      href="#book"
                      className="inline-flex items-center gap-1 font-serif text-[10px] font-medium tracking-[0.2em] text-[#b3956d] border-b border-[#c5a880] pb-0.5 hover:text-gray-900 hover:border-gray-900 transition-colors duration-300 uppercase"
                    >
                      Explore Experience &rsaquo;
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Minimalist Bottom Timeline Index Dots */}
      <div className="flex justify-center gap-2.5 mt-10 md:mt-14">
        {slides.map((_, index) => {
          // Dynamic calculation adjusting dots for cloned arrays
          const activeIndex = (current - 1 + totalSlides) % totalSlides;
          const isDotActive = index === activeIndex;

          return (
            <button
              key={index}
              onClick={() => setCurrent(index + 1)}
              className={`h-[2px] transition-all duration-500 ease-out rounded-full ${
                isDotActive ? "w-8 bg-[#c5a880]" : "w-3 bg-gray-700 hover:bg-gray-500"
              }`}
              aria-label={`Maps directly to slide index ${index + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}