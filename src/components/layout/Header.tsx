"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  Globe,
  User,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Hotels & Resorts", href: "/hotels" },
  { label: "Destinations", href: "/destinations" },
  { label: "Offers", href: "/offers" },
  { label: "Experiences", href: "/experiences" },
  { label: "Weddings", href: "/weddings" },
  { label: "Dining", href: "/dining" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0F172A]/85 backdrop-blur-xl border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="luxury-container flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <h1
              className={`font-playfair text-2xl md:text-3xl tracking-[0.25em] transition-colors duration-300 ${
                scrolled ? "text-white" : "text-white"
              }`}
            >
              CHANSHAL
              <span className="text-[#C5A46E]">.</span>
            </h1>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.18em] text-white/85 hover:text-[#C5A46E] transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            {/* SEARCH */}
            <button
              className={`hidden sm:flex items-center justify-center rounded-full p-2 transition-all duration-300 ${
                scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* LANGUAGE */}
            <button
              className={`hidden sm:flex items-center justify-center rounded-full p-2 transition-all duration-300 ${
                scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Globe className="w-4 h-4" />
            </button>

            {/* ACCOUNT */}
            <button
              className={`hidden sm:flex items-center justify-center rounded-full p-2 transition-all duration-300 ${
                scrolled
                  ? "text-white hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <User className="w-4 h-4" />
            </button>

            {/* BOOK BUTTON */}
            <a
              href="#book"
              className="hidden md:flex border border-[#C5A46E] bg-[#C5A46E] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-transparent hover:text-[#C5A46E]"
            >
              Book Now
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileMenu(true)}
              className="lg:hidden text-white p-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0F172A]/95 backdrop-blur-2xl"
          >
            {/* TOP */}
            <div className="flex items-center justify-between px-6 py-6">
              <h1 className="font-playfair text-3xl tracking-[0.25em] text-white">
                CHANSHAL
                <span className="text-[#C5A46E]">.</span>
              </h1>

              <button
                onClick={() => setMobileMenu(false)}
                className="text-white p-2 rounded-full hover:bg-white/10 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="mt-16 flex flex-col items-center gap-8"
            >
              {navLinks.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenu(false)}
                    className="font-playfair text-3xl text-white hover:text-[#C5A46E] transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* MOBILE BUTTON */}
            <div className="mt-16 flex justify-center">
              <a
                href="#book"
                className="border border-[#C5A46E] bg-[#C5A46E] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-transparent hover:text-[#C5A46E]"
              >
                Reserve Your Stay
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}