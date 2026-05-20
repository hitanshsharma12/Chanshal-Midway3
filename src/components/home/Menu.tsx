"use client";

import React, { useRef, useState, ReactNode } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  Variants,
} from "framer-motion";

// ═════════════════════════════════════════════════════════════════════════════
// WHATSAPP CONFIG
// ═════════════════════════════════════════════════════════════════════════════
const WHATSAPP_NUMBER: string = "917018796714";

// ═════════════════════════════════════════════════════════════════════════════
// TYPE DEFINITIONS
// ═════════════════════════════════════════════════════════════════════════════

type CategoryId = "himachali" | "multicuisine" | "live" | "desserts" | "brewery";

interface Category {
  id: CategoryId;
  label: string;
  description: string;
}

interface Dish {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
  veg: boolean;
  chefPick?: boolean;
}

interface DishesRecord {
  himachali: Dish[];
  multicuisine: Dish[];
  live: Dish[];
  desserts: Dish[];
  brewery: Dish[];
}

// ═════════════════════════════════════════════════════════════════════════════
// CATEGORY DATA
// ═════════════════════════════════════════════════════════════════════════════
const CATEGORIES: Category[] = [
  {
    id: "himachali",
    label: "Himachali",
    description: "Traditional mountain cuisine",
  },
  { id: "multicuisine", label: "Multi-Cuisine", description: "Global flavors" },
  { id: "live", label: "Live Counters", description: "Interactive stations" },
  { id: "desserts", label: "Desserts", description: "Sweet indulgence" },
  { id: "brewery", label: "Brewery", description: "Craft beverages" },
];

// ═════════════════════════════════════════════════════════════════════════════
// HIMACHALI NON-VEG & VEG DISHES - HIGH QUALITY UNSPLASH IMAGES
// ═════════════════════════════════════════════════════════════════════════════
const DISHES: DishesRecord = {
  himachali: [
    {
      id: "h1",
      name: "Chha Gosht",
      description:
        "Slow-braised lamb marinated in yoghurt and mountain spices, cooked over wood fire until fall-off-the-bone tender. The soul of Himachali hospitality.",
      image:
        "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=900&q=85&auto=format&fit=crop",
      badge: "Signature",
      veg: false,
      chefPick: true,
    },
    {
      id: "h2",
      name: "Tirthan Trout",
      description:
        "Wild river trout from pristine Tirthan Valley, pan-seared with Himalayan herbs and served on buckwheat crêpe with apricot chilli relish.",
      image:
        "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=900&q=85&auto=format&fit=crop",
      badge: "Heritage",
      veg: false,
      chefPick: true,
    },
    {
      id: "h3",
      name: "Kullu Chicken Tikka",
      description:
        "Local chicken marinated in hung yoghurt and mountain spices, charred on open flame, served with mint-coriander chutney and lemon.",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900&q=85&auto=format&fit=crop",
      veg: false,
      chefPick: true,
    },
    {
      id: "h4",
      name: "Khadi Murgh",
      description:
        "Chicken cooked in traditional yoghurt and ginger gravy with Himachali spice blend, served with steamed rice and mandua roti.",
      image:
        "https://images.unsplash.com/photo-1634482392550-dc8e3f3820dc?w=900&q=85&auto=format&fit=crop",
      veg: false,
    },
    {
      id: "h5",
      name: "Aktori with Mountain Fish",
      description:
        "Buckwheat pancakes layered with fresh river fish, soured cream, and smoked tomato chutney — ancient Kullu breakfast perfected.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=85&auto=format&fit=crop",
      veg: false,
    },
    {
      id: "h6",
      name: "Dham Thali",
      description:
        "Sacred festival platter with slow-cooked rajma, moong dal, khatta, steamed basmati and mandua roti — served on traditional dona leaf.",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=85&auto=format&fit=crop",
      badge: "Vegan",
      veg: true,
      chefPick: true,
    },
  ],

  multicuisine: [
    {
      id: "m1",
      name: "Robata Chicken Tikka",
      description:
        "Japanese robata-grilled chicken thighs with Himalayan herbs and smoked red pepper raita bridging two continents.",
      image:
        "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900&q=85&auto=format&fit=crop",
      badge: "Best Seller",
      veg: false,
      chefPick: true,
    },
    {
      id: "m2",
      name: "Himalayan Lamb Rack",
      description:
        "French-trimmed local lamb rack with saffron jus, apricot preserve, and Gruyère potato gratin — fine-dining banquet plate.",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85&auto=format&fit=crop",
      badge: "Premium",
      veg: false,
      chefPick: true,
    },
    {
      id: "m3",
      name: "Truffle Mushroom Risotto",
      description:
        "Wild Kullu Valley mushrooms with Carnaroli rice, white truffle oil, aged Parmesan — Italian elegance meets Himalayan terroir.",
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=900&q=85&auto=format&fit=crop",
      veg: true,
    },
    {
      id: "m4",
      name: "Pan-Seared Duck Breast",
      description:
        "Heritage breed duck, seared medium-rare, with cherry gastrique, shallot purée and seasonal vegetables.",
      image:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&q=85&auto=format&fit=crop",
      veg: false,
    },
    {
      id: "m5",
      name: "Grand Mezze Spread",
      description:
        "Hummus, baba ghanoush, hand-rolled falafel, tabbouleh, warm pita and harissa — Mediterranean feast.",
      image:
        "https://images.unsplash.com/photo-1544510808-91bcbb4a4c47?w=900&q=85&auto=format&fit=crop",
      veg: true,
    },
  ],

  live: [
    {
      id: "l1",
      name: "Tandoor Live Station",
      description:
        "Traditional clay tandoor with naan, kulcha, seekh kebab and murgh tikka pulled live — theatre and flavor.",
      image:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=900&q=85&auto=format&fit=crop",
      badge: "Live Fire",
      veg: false,
      chefPick: true,
    },
    {
      id: "l2",
      name: "Asian Wok Counter",
      description:
        "Har gow, siu mai, char siu bao and hand-pulled noodles tossed live in flaming wok — sizzle and smoke.",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900&q=85&auto=format&fit=crop",
      veg: false,
    },
    {
      id: "l3",
      name: "Chaat Street Bar",
      description:
        "Pani puri, dahi papdi, aloo tikki with tamarind glaze — beloved at every Himachali celebration.",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=85&auto=format&fit=crop",
      veg: true,
      chefPick: true,
    },
    {
      id: "l4",
      name: "Pasta & Risotto Live",
      description:
        "Fresh tagliatelle, pappardelle and gnocchi made visible, tossed in sauces to order.",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=85&auto=format&fit=crop",
      veg: true,
    },
  ],

  desserts: [
    {
      id: "d1",
      name: "Himalayan Honey Panna Cotta",
      description:
        "Set cream infused with raw forest honey, apple compote in local brandy, gold dust — silence follows the first spoon.",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=85&auto=format&fit=crop",
      badge: "Signature",
      veg: true,
      chefPick: true,
    },
    {
      id: "d2",
      name: "Saffron Pistachio Kulfi",
      description:
        "Hand-churned kulfi with Kashmiri saffron and crushed pistachios, served on rose petal — not ice cream, memory.",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900&q=85&auto=format&fit=crop",
      veg: true,
      chefPick: true,
    },
    {
      id: "d3",
      name: "Warm Chocolate Fondant",
      description:
        "Single-origin dark chocolate dome broken tableside, salted caramel center, tahini ice cream and walnut praline.",
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30ef07?w=900&q=85&auto=format&fit=crop",
      veg: true,
      chefPick: true,
    },
    {
      id: "d4",
      name: "Apple Brandy Tart",
      description:
        "Buttery pastry tart filled with caramelized local apples, apple brandy reduction, vanilla custard and caramel drizzle.",
      image:
        "https://images.unsplash.com/photo-1568571780765-9276ac8b0016?w=900&q=85&auto=format&fit=crop",
      veg: true,
    },
  ],

  brewery: [
    {
      id: "b1",
      name: "Chanshal Craft Lager",
      description:
        "House-brewed lager with glacial water, crisp and clean with subtle floral nose — born from these mountains.",
      image:
        "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=900&q=85&auto=format&fit=crop",
      badge: "House Brew",
      veg: true,
      chefPick: true,
    },
    {
      id: "b2",
      name: "Rohru Apple Cider",
      description:
        "Cold-pressed Rohru valley apples, slow fermented, served over hand-cut ice — signature welcome drink.",
      image:
        "https://images.unsplash.com/photo-1562077981-4d7eafd44932?w=900&q=85&auto=format&fit=crop",
      badge: "Signature",
      veg: true,
      chefPick: true,
    },
    {
      id: "b3",
      name: "Himalayan Wheat Ale",
      description:
        "Unfiltered hazy ale brewed with wild mountain herbs, coriander, orange peel — as layered as the landscape.",
      image:
        "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=900&q=85&auto=format&fit=crop",
      veg: true,
    },
    {
      id: "b4",
      name: "Signature Cocktail Bar",
      description:
        "Saffron old fashioned, apple brandy sour, ginger-cardamom mule — paired with premium spirits and mocktails.",
      image:
        "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=900&q=85&auto=format&fit=crop",
      veg: true,
    },
  ],
};

// ═════════════════════════════════════════════════════════════════════════════
// ANIMATION VARIANTS
// ═════════════════════════════════════════════════════════════════════════════

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideInFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ═════════════════════════════════════════════════════════════════════════════
// BADGE COMPONENT - VEG/NON-VEG
// ═════════════════════════════════════════════════════════════════════════════

interface VegBadgeProps {
  veg: boolean;
}

const VegBadge: React.FC<VegBadgeProps> = ({ veg }) => {
  const color = veg ? "#6abf6a" : "#c98a6a";
  const bgColor = veg ? "#6abf6a44" : "#c98a6a44";

  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] tracking-[0.15em] font-medium px-2 py-0.5 border"
      style={{
        color,
        borderColor: bgColor,
        letterSpacing: "0.12em",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: color }}
      />
      {veg ? "VEG" : "NON-VEG"}
    </span>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// DISH CARD COMPONENT - MOBILE & DESKTOP RESPONSIVE
// ═════════════════════════════════════════════════════════════════════════════

interface DishCardProps {
  dish: Dish;
  index: number;
  isMobile: boolean;
}

const DishCard: React.FC<DishCardProps> = ({ dish, index, isMobile }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      variants={isMobile ? slideInFromLeft : fadeUp}
      custom={index * (isMobile ? 0.08 : 0.15)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`group relative overflow-hidden transition-all duration-500 ${
        isMobile
          ? "mb-6 rounded-lg"
          : "flex flex-col md:flex-row gap-0 md:gap-8 border-b"
      }`}
      style={{
        borderBottom: isMobile ? "none" : "1px solid rgba(212,175,100,0.15)",
      }}
    >
      {/* IMAGE CONTAINER */}
      <div
        className={`relative overflow-hidden flex-shrink-0 ${
          isMobile
            ? "w-full h-48 rounded-t-lg"
            : "w-full md:w-64 lg:w-80 h-56 md:h-auto min-h-[220px]"
        }`}
      >
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,rgba(10,8,5,0.45) 0%,rgba(10,8,5,0.1) 100%)",
          }}
        />

        {/* BADGES */}
        {dish.chefPick && (
          <div
            className="absolute top-4 left-0 px-3 py-1 text-[9px] tracking-[0.2em] font-medium"
            style={{
              background: "rgba(212,175,100,0.92)",
              color: "#0a0805",
              letterSpacing: "0.2em",
            }}
          >
            CHEF'S CHOICE
          </div>
        )}
      </div>

      {/* CONTENT CONTAINER */}
      <div
        className={`flex flex-col justify-center ${
          isMobile
            ? "px-4 py-5 rounded-b-lg"
            : "px-6 md:px-10 py-8 md:py-10 flex-1"
        }`}
        style={{
          background: isMobile ? "rgba(10,8,5,0.6)" : "transparent",
          backdropFilter: isMobile ? "blur(10px)" : "none",
        }}
      >
        {/* TOP ROW - BADGES */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <VegBadge veg={dish.veg} />
          {dish.badge && (
            <span
              className="text-[9px] tracking-[0.2em] font-medium px-2 py-0.5 border"
              style={{
                color: "#d4af64",
                borderColor: "rgba(212,175,100,0.4)",
                letterSpacing: "0.2em",
              }}
            >
              {dish.badge.toUpperCase()}
            </span>
          )}
        </div>

        {/* DISH NAME */}
        <h3
          className={`leading-tight mb-3 font-serif font-light ${
            isMobile ? "text-lg" : ""
          }`}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: isMobile ? "1.3rem" : "clamp(1.4rem, 2.5vw, 1.9rem)",
            fontWeight: 400,
            color: "#ede8dc",
            letterSpacing: "0.02em",
          }}
        >
          {dish.name}
        </h3>

        {/* GOLD RULE */}
        <div
          className="mb-3"
          style={{
            width: "36px",
            height: "1px",
            background:
              "linear-gradient(90deg, rgba(212,175,100,0.8), rgba(212,175,100,0))",
          }}
        />

        {/* DESCRIPTION */}
        <p
          className="leading-relaxed"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: isMobile ? "0.8rem" : "0.85rem",
            color: "rgba(237,232,220,0.62)",
            fontWeight: 300,
            maxWidth: isMobile ? "100%" : "520px",
            lineHeight: 1.85,
            letterSpacing: "0.01em",
          }}
        >
          {dish.description}
        </p>
      </div>
    </motion.article>
  );
};

// ═════════════════════════════════════════════════════════════════════════════
// MAIN MENU SECTION COMPONENT
// ═════════════════════════════════════════════════════════════════════════════

export default function MenuSection(): ReactNode {
  const [active, setActive] = useState<CategoryId>("himachali");
  const [name, setName] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Detect mobile
  React.useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const dishes: Dish[] = DISHES[active];

  // WhatsApp handler
  const handleWhatsApp = (): void => {
    const categoryLabel =
      CATEGORIES.find((c) => c.id === active)?.label ?? active;
    const dishList: string = dishes.map((d) => `• ${d.name}`).join("\n");

    const msg: string[] = [
      "🏔️ *Chanshal Midway — Banquet Menu Enquiry*",
      "",
      `Hello, I am${name ? ` *${name}*` : ""} and I am interested in your *${categoryLabel}* menu for an upcoming event.`,
      "",
      "*Dishes I'd like to know more about:*",
      dishList,
      note ? `\n📝 *Additional note:* ${note}` : "",
      "",
      "Kindly share package details and availability. Thank you!",
    ];

    const encodedMsg = encodeURIComponent(msg.join("\n"));
    const url: string = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;
    window.open(url, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "#0a0805",
        minHeight: "100vh",
      }}
    >
      {/* ── GOOGLE FONTS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

        * {
          box-sizing: border-box;
        }

        .menu-tab {
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          font-weight: 400;
          color: rgba(237,232,220,0.4);
          padding: 10px 16px;
          border: 1px solid transparent;
          background: transparent;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          white-space: nowrap;
        }

        .menu-tab:hover {
          color: rgba(212,175,100,0.8);
          border-color: rgba(212,175,100,0.2);
          transform: translateY(-2px);
        }

        .menu-tab.active {
          color: #d4af64;
          border-color: rgba(212,175,100,0.5);
          background: rgba(212,175,100,0.06);
          box-shadow: 0 4px 12px rgba(212,175,100,0.1);
        }

        .wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          font-family: 'Jost', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.22em;
          font-weight: 500;
          color: #0a0805;
          background: #d4af64;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          border-radius: 4px;
        }

        .wa-btn:hover {
          opacity: 0.88;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,100,0.3);
        }

        .wa-btn:active {
          transform: translateY(0);
        }

        .luxury-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(212,175,100,0.2);
          color: #ede8dc;
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          padding: 12px 16px;
          outline: none;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          letter-spacing: 0.04em;
          border-radius: 4px;
        }

        .luxury-input::placeholder {
          color: rgba(237,232,220,0.3);
        }

        .luxury-input:focus {
          border-color: rgba(212,175,100,0.55);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 0 0 3px rgba(212,175,100,0.1);
        }

        @media (max-width: 768px) {
          .menu-tab {
            font-size: 0.6rem;
            padding: 8px 12px;
          }

          .wa-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* ── TOP BORDER ── */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,100,0.5) 30%, rgba(212,175,100,0.5) 70%, transparent)",
        }}
      />

      {/* ── HEADER SECTION ── */}
      <div className="text-center pt-16 md:pt-20 pb-10 md:pb-12 px-4 md:px-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.35em",
            color: "#d4af64",
            marginBottom: "1.2rem",
            fontWeight: 400,
          }}
        >
          ROHRU · HIMACHAL PRADESH
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: isMobile
              ? "clamp(2rem, 5vw, 2.8rem)"
              : "clamp(2.6rem, 6vw, 4.8rem)",
            fontWeight: 300,
            color: "#ede8dc",
            lineHeight: 1.05,
            letterSpacing: "0.04em",
            marginBottom: "0.6rem",
          }}
        >
          A Table Worthy
          <br />
          <em style={{ fontStyle: "italic", color: "#d4af64" }}>
            of the Mountains
          </em>
        </motion.h2>

        {/* DECORATIVE ORNAMENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
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
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect
              x="6"
              y="0"
              width="2"
              height="14"
              fill="rgba(212,175,100,0.6)"
            />
            <rect
              x="0"
              y="6"
              width="14"
              height="2"
              fill="rgba(212,175,100,0.6)"
            />
            <rect
              x="4"
              y="4"
              width="6"
              height="6"
              fill="rgba(212,175,100,0.25)"
            />
          </svg>
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
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={3}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: isMobile ? "0.8rem" : "0.9rem",
            fontWeight: 300,
            color: "rgba(237,232,220,0.55)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.9,
            letterSpacing: "0.02em",
          }}
        >
          Every celebration deserves flavours that endure in memory. At Chanshal
          Midway, our banquet kitchens honour the altitude, the seasons and the
          ancient recipes of Himachal.
        </motion.p>
      </div>

      {/* ── CATEGORY TABS ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={4}
        className="flex justify-center flex-wrap gap-1 md:gap-2 px-3 md:px-6 mb-2 overflow-x-auto"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`menu-tab ${active === cat.id ? "active" : ""}`}
            onClick={() => setActive(cat.id)}
          >
            {cat.label.toUpperCase()}
          </button>
        ))}
      </motion.div>

      {/* ── DIVIDER LINE ── */}
      <div
        className="mx-auto my-6 md:my-8"
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "1px",
          background:
            "linear-gradient(90deg,transparent,rgba(212,175,100,0.25) 20%,rgba(212,175,100,0.25) 80%,transparent)",
        }}
      />

      {/* ── DISH GRID ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`mx-auto px-4 md:px-6 ${
            isMobile ? "space-y-0" : ""
          }`}
          style={{
            maxWidth: isMobile ? "100%" : "1100px",
          }}
        >
          {dishes.map((dish, i) => (
            <DishCard key={dish.id} dish={dish} index={i} isMobile={isMobile} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── WHATSAPP ENQUIRY SECTION ── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        custom={6}
        className="mx-auto mt-16 md:mt-20 mb-16 md:mb-20 px-4 md:px-6"
        style={{ maxWidth: isMobile ? "100%" : "680px" }}
      >
        {/* DIVIDER */}
        <div className="flex items-center gap-4 md:gap-5 mb-10 md:mb-12">
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg,transparent,rgba(212,175,100,0.4))",
            }}
          />
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: isMobile ? "0.9rem" : "1.05rem",
              fontWeight: 400,
              color: "#d4af64",
              letterSpacing: "0.12em",
              fontStyle: "italic",
              whiteSpace: "nowrap",
            }}
          >
            Reserve Your Menu
          </p>
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(90deg,rgba(212,175,100,0.4),transparent)",
            }}
          />
        </div>

        {/* SUBTITLE */}
        <p
          className="text-center mb-8 md:mb-10"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 300,
            color: "rgba(237,232,220,0.5)",
            letterSpacing: "0.06em",
            lineHeight: 1.9,
          }}
        >
          Share your event details and we will curate a personalised banquet
          menu — sent directly to your WhatsApp.
        </p>

        {/* FORM INPUTS */}
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            className="luxury-input"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="luxury-input"
            placeholder="Event details — occasion, number of guests, date, special requests…"
            rows={isMobile ? 3 : 4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{ resize: "vertical", fontFamily: "'Jost', sans-serif" }}
          />
        </div>

        {/* MENU NOTICE */}
        <p
          className="mb-8 text-center"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.14em",
            color: "rgba(212,175,100,0.6)",
          }}
        >
          VIEWING:{" "}
          <span style={{ color: "#d4af64" }}>
            {CATEGORIES.find((c) => c.id === active)?.label.toUpperCase()}
          </span>{" "}
          · {dishes.length} DISHES INCLUDED
        </p>

        {/* WHATSAPP BUTTON */}
        <div className="flex justify-center">
          <button className="wa-btn" onClick={handleWhatsApp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            ENQUIRE ON WHATSAPP
          </button>
        </div>
      </motion.div>

      {/* ── BOTTOM BORDER ── */}
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