"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Users, X, Phone } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<"room" | "event" | null>(null);

  const openBookingModal = (type: "room" | "event") => {
    setBookingType(type);
    setIsModalOpen(true);
  };

  return (
    <section className="relative h-screen min-h-[900px] overflow-hidden">
      {/* Stunning HD Background Image */}
      <img
      // Snow + Luxury:
src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
        alt="Chanshal Midway Luxury Resort - Himalayan Paradise"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.75]"
      />

      {/* Luxurious Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#C5A46E15_0%,transparent_60%)]" />

      {/* Main Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-5 text-center text-white">
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-3 text-[13px] md:text-sm font-medium tracking-[4px] text-[#D4AF88] uppercase"
        >
          ROHRU, HIMACHAL PRADESH
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-playfair text-6xl md:text-7xl lg:text-[98px] leading-[1.05] tracking-tighter"
        >
          CHANSHAL<br />
          <span className="bg-gradient-to-r from-[#D4AF88] to-[#F5E8C7] bg-clip-text text-transparent">
            MIDWAY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 max-w-xl text-lg md:text-xl text-white/85 font-light tracking-wide"
        >
          Timeless elegance nestled in the majestic Himalayas
        </motion.p>
{/* Luxury Navbar-Style Buttons */}
<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
  className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
>
  <button
    onClick={() => openBookingModal("room")}
    className="group px-16 py-5 text-sm font-medium tracking-[2px] uppercase border border-[#D4AF88] text-white 
               hover:bg-[#D4AF88] hover:text-black transition-all duration-500 rounded-xl 
               min-w-[220px] active:scale-95 shadow-md hover:shadow-2xl"
  >
    BOOK A ROOM
  </button>

  <button
    onClick={() => openBookingModal("event")}
    className="group px-16 py-5 text-sm font-medium tracking-[2px] uppercase bg-[#D4AF88] text-black 
               hover:bg-white transition-all duration-500 rounded-xl 
               min-w-[220px] active:scale-95 shadow-md hover:shadow-2xl font-semibold"
  >
    BOOK FOR AN EVENT
  </button>
</motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 hidden md:flex flex-col items-center"
        >
          <div className="h-14 w-px bg-gradient-to-b from-transparent via-[#D4AF88]/60 to-transparent" />
          <p className="mt-3 text-[10px] tracking-[3px] text-white/50">SCROLL TO EXPLORE</p>
        </motion.div>
      </div>
{/* Luxury Booking Modal */}
{isModalOpen && bookingType && (
  <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md overflow-y-auto">
    
    <div className="min-h-screen flex items-center justify-center px-3 py-6 sm:px-6">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="
          relative
          w-full
          max-w-2xl
          rounded-[32px]
          border border-white/10
          bg-gradient-to-b from-zinc-950 to-black
          shadow-[0_20px_80px_rgba(0,0,0,0.7)]
          overflow-hidden
        "
      >
        
        {/* Luxury Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#D4AF8820_0%,transparent_60%)]" />

        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="
            absolute right-4 top-4 z-50
            h-11 w-11
            rounded-full
            bg-white/5
            backdrop-blur-md
            border border-white/10
            flex items-center justify-center
            text-white/70
            hover:text-white
            hover:bg-white/10
            transition
          "
        >
          <X size={22} />
        </button>

        <div className="relative z-10 p-5 sm:p-8 md:p-12">
          
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            
            <div className="inline-flex items-center gap-2 text-[#D4AF88] mb-4">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              
              <span className="text-[10px] sm:text-xs tracking-[3px] uppercase">
                Direct WhatsApp Booking
              </span>
            </div>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              {bookingType === "room"
                ? "Reserve Your Escape"
                : "Host Your Celebration"}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-white/60 max-w-md mx-auto">
              Experience timeless luxury amidst the Himalayas
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const formData = new FormData(e.currentTarget);

              const message =
                `🌟 New ${bookingType.toUpperCase()} Booking Request%0A%0A` +
                `Name: ${formData.get("name")}%0A` +
                `Email: ${formData.get("email")}%0A` +
                `Phone: ${formData.get("phone")}%0A` +
                `Check-in: ${formData.get("checkin")}%0A` +
                `Check-out: ${formData.get("checkout")}%0A` +
                `Guests: ${formData.get("guests")}%0A` +
                `Message: ${
                  formData.get("message") || "No additional message"
                }`;

              window.open(
                `https://wa.me/917018796714?text=${message}`,
                "_blank"
              );

              setIsModalOpen(false);
            }}
            className="space-y-5"
          >
            
            {/* Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="
                  w-full
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  px-5 py-4
                  text-sm sm:text-base
                  text-white
                  placeholder:text-white/40
                  focus:border-[#D4AF88]
                  focus:outline-none
                  transition
                "
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="
                  w-full
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  px-5 py-4
                  text-sm sm:text-base
                  text-white
                  placeholder:text-white/40
                  focus:border-[#D4AF88]
                  focus:outline-none
                  transition
                "
              />
            </div>

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              required
              placeholder="WhatsApp Number"
              className="
                w-full
                rounded-2xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                px-5 py-4
                text-sm sm:text-base
                text-white
                placeholder:text-white/40
                focus:border-[#D4AF88]
                focus:outline-none
                transition
              "
            />

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <label className="mb-2 block text-[10px] sm:text-xs tracking-[2px] text-white/50 uppercase">
                  Check-In
                </label>

                <input
                  type="date"
                  name="checkin"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-md
                    px-5 py-4
                    text-white
                    focus:border-[#D4AF88]
                    focus:outline-none
                    transition
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-[10px] sm:text-xs tracking-[2px] text-white/50 uppercase">
                  Check-Out
                </label>

                <input
                  type="date"
                  name="checkout"
                  required
                  className="
                    w-full
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-md
                    px-5 py-4
                    text-white
                    focus:border-[#D4AF88]
                    focus:outline-none
                    transition
                  "
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="mb-2 block text-[10px] sm:text-xs tracking-[2px] text-white/50 uppercase">
                Guests
              </label>

              <select
                name="guests"
                required
                className="
                  w-full
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  px-5 py-4
                  text-white
                  focus:border-[#D4AF88]
                  focus:outline-none
                  transition
                "
              >
                <option value="">Select Guests</option>
                <option value="50+">50+ Guests</option>
                <option value="100+">100+ Guests</option>
                <option value="200+">200+ Guests</option>
                <option value="500+">500+ Guests</option>
                <option value="700+">700+ Guests</option>
                <option value="1000+">1000+ Guests</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows={4}
              placeholder={
                bookingType === "room"
                  ? "Special requests, room preferences..."
                  : "Wedding, corporate event, birthday details..."
              }
              className="
                w-full
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-md
                px-5 py-4
                text-sm sm:text-base
                text-white
                placeholder:text-white/40
                resize-none
                focus:border-[#D4AF88]
                focus:outline-none
                transition
              "
            />

            {/* Submit */}
            <button
              type="submit"
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-2xl
                bg-gradient-to-r
                from-[#D4AF88]
                to-[#F5E8C7]
                py-5
                text-sm sm:text-base
                font-semibold
                tracking-[3px]
                text-black
                transition-all
                duration-500
                hover:scale-[1.01]
                active:scale-[0.98]
                shadow-[0_10px_40px_rgba(212,175,136,0.3)]
              "
            >
              CONFIRM VIA WHATSAPP
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  </div>
)}
     
      
    </section>
  );
}