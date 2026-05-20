"use client";

import React, { useRef, useState, useEffect, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

// ═════════════════════════════════════════════════════════════════════════════
// TYPES
// ═════════════════════════════════════════════════════════════════════════════

type BreweryCategory = "beer" | "cocktail" | "ambiance";

interface BreweryItem {
  id: string;
  name: string;
  category: BreweryCategory;
  description: string;
  image: string;
  details?: string;
}

// ═════════════════════════════════════════════════════════════════════════════
// BREWERY DATA
// ═════════════════════════════════════════════════════════════════════════════

const BREWERY_ITEMS: BreweryItem[] = [
  // CRAFT BEERS
  {
    id: "b1",
    name: "Chanshal Craft Lager",
    category: "beer",
    description: "Golden alpine lager brewed with glacial water",
    details:
      "Crisp finish | 5.2% ABV | Floral notes | Perfect for celebrations",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "b2",
    name: "Himalayan Wheat Ale",
    category: "beer",
    description: "Unfiltered hazy ale with mountain herbs",
    details: "Complex layers | 6.1% ABV | Citrus & spice | House favorite",
    image:
      "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "b3",
    name: "Rohru Apple Cider",
    category: "beer",
    description: "Cold-pressed local apples, slow fermented",
    details: "Signature welcome | Naturally sweet | 4.8% ABV | Refreshing",
    image:
      "https://images.unsplash.com/photo-1562077981-4d7eafd44932?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "b4",
    name: "Mountain Dark Stout",
    category: "beer",
    description: "Rich, full-bodied with chocolate undertones",
    details: "Bold profile | 7.2% ABV | Roasted malt | Evening choice",
    image:
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=1000&q=90&auto=format&fit=crop",
  },

  // SIGNATURE COCKTAILS
  {
    id: "c1",
    name: "Saffron Old Fashioned",
    category: "cocktail",
    description: "Heritage whiskey with Kashmir saffron and Himalayan herbs",
    details:
      "Premium whisky | Saffron-infused | Orange zest | Gold leaf dust",
    image:
      "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "c2",
    name: "Apple Brandy Sour",
    category: "cocktail",
    description: "Local apple brandy with fresh lemon and egg white foam",
    details: "Rohru apples | Velvety texture | Tart & smooth | Signature",
    image:
      "https://images.unsplash.com/photo-1541745537411-b8046b52e56c?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "c3",
    name: "Ginger-Cardamom Mule",
    category: "cocktail",
    description: "Spiced Moscow mule with Himalayan ginger and cardamom",
    details:
      "Vodka base | Fresh ginger | Cardamom spice | Copper mug served",
    image:
      "https://images.unsplash.com/photo-1536719864198-c07995314fc5?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "c4",
    name: "Honey-Thyme Margarita",
    category: "cocktail",
    description: "Tequila with local forest honey and wild thyme",
    details: "Premium tequila | Forest honey | Wild thyme | Rimmed salt",
    image:
      "https://images.unsplash.com/photo-1595521624829-4b6b5c9d2e6b?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "c5",
    name: "Himalayan Mojito",
    category: "cocktail",
    description: "Rum with mountain mint, local lime and honey water",
    details: "White rum | Fresh mint | Honey | Spring water | Refreshing",
    image:
      "https://images.unsplash.com/photo-1556767576-5ec4e5c69888?w=1000&q=90&auto=format&fit=crop",
  },

  // AMBIANCE
  {
    id: "a1",
    name: "Brewery Lounge Interior",
    category: "ambiance",
    description: "Intimate ambiance with warm lighting and wooden architecture",
    details: "Rustic elegance | Fireplace | Mountain views | Cozy seating",
    image:
      "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "a2",
    name: "Rooftop Brewery Bar",
    category: "ambiance",
    description: "Open-air rooftop with panoramic mountain vistas",
    details: "Starlit evenings | Panoramic views | Outdoor seating | Ambient",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "a3",
    name: "Craft Bar Setup",
    category: "ambiance",
    description: "Premium bar counter with craft brewing equipment visible",
    details: "Craft spirits | Brewing visible | Premium setup | Sophisticated",
    image:
      "https://images.unsplash.com/photo-1594270207183-e46623049eb0?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "a4",
    name: "Evening Party Vibes",
    category: "ambiance",
    description: "Lively brewery party with guests and ambient lighting",
    details: "Energetic | LED ambiance | Social gathering | Celebration",
    image:
      "https://images.unsplash.com/photo-1514925849386-30d5a82b137e?w=1000&q=90&auto=format&fit=crop",
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// CATEGORY BADGE COMPONENT
// ═════════════════════════════════════════════════════════════════════════════

interface CategoryBadgeProps {
  category: BreweryCategory;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const categoryStyles: Record<
    BreweryCategory,
    { bg: string; color: string; icon: string }
  > = {
    beer: {
      bg: "rgba(198, 154, 91, 0.15)",
      color: "#d4a574",
      icon: "🍺",
    },
    cocktail: {
      bg: "rgba(212, 175, 100, 0.15)",
      color: "#d4af64",
      icon: "🍹",
    },
    ambiance: {
      bg: "rgba(175, 142, 226, 0.15)",
      color: "#af8ee2",
      icon: "✨",
    },
  };

  const style = categoryStyles[category];

  return (
    <span
      className="inline-flex items-center gap-2 text-[10px] tracking-[0.15em] font-medium px-3 py-1.5 rounded-full"
      style={{
        background: style.bg,
        color: style.color,
        border: `1px solid ${style.color}44`,
        letterSpacing: "0.12em",
      }}
    >
      <span>{style.icon}</span>
      {category.toUpperCase()}
    </span>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// CAROUSEL ITEM COMPONENT
// ═════════════════════════════════════════════════════════════════════════════

interface CarouselItemProps {
  item: BreweryItem;
  isActive: boolean;
  isMobile: boolean;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
  item,
  isActive,
  isMobile,
}) => {
  return (
    <motion.div
      className="relative flex-shrink-0 group"
      style={{
        width: isMobile ? "100vw" : "calc(50vw - 2rem)",
        maxWidth: isMobile ? "400px" : "600px",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: isActive ? 1 : 0.6,
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-[3/4]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* OVERLAY GRADIENT */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,8,5,0.2) 0%, rgba(10,8,5,0.4) 40%, rgba(10,8,5,0.8) 100%)",
          }}
        />

        {/* CONTENT OVERLAY */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-5 md:p-6"
          initial={{ y: 20, opacity: 0 }}
          animate={
            isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-3">
            <CategoryBadge category={item.category} />
          </div>

          <h3
            className="leading-tight mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: isMobile ? "1.3rem" : "1.6rem",
              fontWeight: 400,
              color: "#ede8dc",
              letterSpacing: "0.02em",
              lineHeight: 1.1,
            }}
          >
            {item.name}
          </h3>

          <p
            className="leading-relaxed text-xs md:text-sm"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              color: "rgba(237,232,220,0.75)",
              lineHeight: 1.6,
              marginBottom: "0.8rem",
            }}
          >
            {item.description}
          </p>

          {item.details && (
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 300,
                color: "rgba(237,232,220,0.5)",
                letterSpacing: "0.08em",
                lineHeight: 1.5,
              }}
            >
              {item.details}
            </p>
          )}
        </motion.div>

        {/* HOVER GLOW EFFECT */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            boxShadow: "inset 0 0 60px rgba(212,175,100,0.3)",
          }}
        />
      </div>

      {/* GLASS CARD BORDER */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          border: isActive
            ? "1.5px solid rgba(212,175,100,0.4)"
            : "1px solid rgba(212,175,100,0.15)",
          background: isActive
            ? "linear-gradient(135deg, rgba(212,175,100,0.08) 0%, rgba(175,142,226,0.04) 100%)"
            : "transparent",
          boxShadow: isActive
            ? "0 8px 32px rgba(212,175,100,0.15)"
            : "0 4px 12px rgba(212,175,100,0.05)",
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// HORIZONTAL SCROLL CAROUSEL
// ═════════════════════════════════════════════════════════════════════════════

interface CarouselProps {
  items: BreweryItem[];
  isMobile: boolean;
}

const HorizontalCarousel: React.FC<CarouselProps> = ({ items, isMobile }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = (): void => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right"): void => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile ? 350 : 650;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (scrollContainerRef.current) {
          const itemWidth = isMobile ? 350 : 650;
          const newIndex = Math.round(
            scrollContainerRef.current.scrollLeft / itemWidth
          );
          setActiveIndex(Math.min(newIndex, items.length - 1));
        }
      }, 300);
    }
  };

  const handleScroll = (): void => {
    checkScroll();
    if (scrollContainerRef.current) {
      const itemWidth = isMobile ? 350 : 650;
      const newIndex = Math.round(
        scrollContainerRef.current.scrollLeft / itemWidth
      );
      setActiveIndex(Math.min(newIndex, items.length - 1));
    }
  };

  return (
    <div className="relative w-full">
      {/* SCROLL CONTAINER */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="overflow-x-auto scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="flex gap-4 md:gap-6 px-4 md:px-8 pb-4">
          {items.map((item, index) => (
            <CarouselItem
              key={item.id}
              item={item}
              isActive={index === activeIndex}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      {!isMobile && (
        <>
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 group"
              style={{
                background: "rgba(10,8,5,0.6)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(212,175,100,0.3)",
                padding: "12px",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              whileHover={{
                background: "rgba(212,175,100,0.15)",
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4af64"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </motion.button>
          )}

          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 group"
              style={{
                background: "rgba(10,8,5,0.6)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(212,175,100,0.3)",
                padding: "12px",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              whileHover={{
                background: "rgba(212,175,100,0.15)",
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4af64"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </motion.button>
          )}
        </>
      )}

      {/* PROGRESS INDICATOR */}
      <div className="flex justify-center gap-2 mt-6 md:mt-8">
        {items.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              if (scrollContainerRef.current) {
                const itemWidth = isMobile ? 350 : 650;
                scrollContainerRef.current.scrollTo({
                  left: index * itemWidth,
                  behavior: "smooth",
                });
                setActiveIndex(index);
              }
            }}
            className="transition-all duration-300"
            style={{
              width: index === activeIndex ? "32px" : "8px",
              height: "4px",
              background:
                index === activeIndex
                  ? "linear-gradient(90deg, #d4af64, #af8ee2)"
                  : "rgba(212,175,100,0.2)",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            whileHover={{
              background:
                index === activeIndex
                  ? "linear-gradient(90deg, #d4af64, #af8ee2)"
                  : "rgba(212,175,100,0.4)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// MAIN BREWERY SECTION
// ═════════════════════════════════════════════════════════════════════════════

export default function BrewerySection(): ReactNode {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0805 0%, #1a1410 50%, #0a0805 100%)",
        minHeight: "100vh",
        padding: isMobile ? "60px 0" : "80px 0",
      }}
    >
      {/* ── GOOGLE FONTS & STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

        * {
          box-sizing: border-box;
        }
      `}</style>

      {/* ── TOP DECORATIVE BORDER ── */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,100,0.5) 30%, rgba(212,175,100,0.5) 70%, transparent)",
        }}
      />

      {/* ── HEADER SECTION ── */}
      <div className="text-center pt-6 md:pt-12 pb-10 md:pb-16 px-4 md:px-6">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="inline-block mb-6"
        >
          <div
            className="px-4 py-2 rounded-full"
            style={{
              background: "rgba(212,175,100,0.1)",
              border: "1px solid rgba(212,175,100,0.3)",
            }}
          >
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#d4af64",
                fontWeight: 400,
              }}
            >
              CRAFT SPIRITS & CELEBRATION
            </p>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: isMobile
              ? "clamp(2.2rem, 6vw, 3rem)"
              : "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: 300,
            color: "#ede8dc",
            lineHeight: 1.05,
            letterSpacing: "0.04em",
            marginBottom: "1rem",
          }}
        >
          Chanshal's
          <br />
          <span style={{ color: "#d4af64", fontStyle: "italic" }}>
            Brewery
          </span>
        </motion.h1>

        {/* DECORATIVE ORNAMENT */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center justify-center gap-4 my-6"
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              background:
                "linear-gradient(90deg,transparent,rgba(212,175,100,0.7))",
            }}
          />
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "1.2rem",
              color: "#d4af64",
            }}
          >
            🍺
          </span>
          <div
            style={{
              width: "40px",
              height: "1px",
              background:
                "linear-gradient(90deg,rgba(212,175,100,0.7),transparent)",
            }}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: isMobile ? "0.85rem" : "0.95rem",
            fontWeight: 300,
            color: "rgba(237,232,220,0.6)",
            maxWidth: "620px",
            margin: "0 auto",
            lineHeight: 1.9,
            letterSpacing: "0.02em",
          }}
        >
          Craft beers brewed at altitude, signature cocktails born from mountain
          tradition, and an atmosphere that celebrates every perfect moment.
        </motion.p>
      </div>

      {/* CATEGORY STATS */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex justify-center flex-wrap gap-8 mb-12 md:mb-16 px-4"
      >
        {[
          { label: "Craft Beers", count: "4" },
          { label: "Signature Cocktails", count: "5" },
          { label: "Ambiance Spaces", count: "4" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="text-center"
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem",
                fontWeight: 300,
                color: "#d4af64",
                marginBottom: "0.5rem",
              }}
            >
              {stat.count}
            </p>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                color: "rgba(212,175,100,0.6)",
              }}
            >
              {stat.label.toUpperCase()}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* DIVIDER */}
      <div
        className="mx-auto mb-8 md:mb-12"
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "1px",
          background:
            "linear-gradient(90deg,transparent,rgba(212,175,100,0.25) 20%,rgba(212,175,100,0.25) 80%,transparent)",
        }}
      />

      {/* CAROUSEL */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mb-12 md:mb-16"
      >
        <HorizontalCarousel items={BREWERY_ITEMS} isMobile={isMobile} />
      </motion.div>

      {/* HIGHLIGHTS SECTION */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="mx-auto px-4 md:px-8 mb-12 md:mb-16"
        style={{ maxWidth: "1100px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: "Craft Beer Experience",
              description:
                "Four signature brews crafted at altitude with glacier-fed water and mountain herbs.",
              icon: "🍺",
            },
            {
              title: "Signature Cocktails",
              description:
                "Five carefully curated cocktails blending heritage spirits with Himalayan botanicals.",
              icon: "🍹",
            },
            {
              title: "Curated Ambiance",
              description:
                "Four distinct spaces from intimate lounge to rooftop bar designed for celebration.",
              icon: "✨",
            },
            {
              title: "Premium Spirits",
              description:
                "Selection of craft spirits paired with local ingredients and mocktails for all guests.",
              icon: "🥂",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="p-6 md:p-8 rounded-xl border backdrop-blur-md transition-all duration-300"
              style={{
                background: "rgba(212,175,100,0.05)",
                borderColor: "rgba(212,175,100,0.2)",
                boxShadow: "0 8px 32px rgba(212,175,100,0.1)",
              }}
              whileHover={{
                background: "rgba(212,175,100,0.1)",
                borderColor: "rgba(212,175,100,0.35)",
                boxShadow: "0 12px 48px rgba(212,175,100,0.15)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "1.8rem",
                  marginBottom: "0.8rem",
                }}
              >
                {item.icon}
              </p>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "#ede8dc",
                  marginBottom: "0.8rem",
                  letterSpacing: "0.02em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 300,
                  color: "rgba(237,232,220,0.6)",
                  lineHeight: 1.8,
                  letterSpacing: "0.01em",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA SECTION */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center px-4 mb-12 md:mb-16"
      >
        <div
          className="inline-block px-6 md:px-8 py-8 md:py-10 rounded-xl border backdrop-blur-md"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,100,0.08) 0%, rgba(175,142,226,0.04) 100%)",
            borderColor: "rgba(212,175,100,0.3)",
            maxWidth: "600px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.8rem",
              fontWeight: 400,
              color: "#d4af64",
              marginBottom: "1rem",
              letterSpacing: "0.02em",
            }}
          >
            Ready to Celebrate?
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: "rgba(237,232,220,0.65)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
              letterSpacing: "0.01em",
            }}
          >
            Book your brewery experience for your next event. Private parties,
            corporate events, or intimate celebrations.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "#d4af64",
              color: "#0a0805",
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              padding: "14px 36px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            BOOK YOUR CELEBRATION
          </motion.button>
        </div>
      </motion.div>

      {/* ── BOTTOM DECORATIVE BORDER ── */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg,transparent,rgba(212,175,100,0.5) 30%,rgba(212,175,100,0.5) 70%,transparent)",
        }}
      />
    </section>
  );
}