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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg md:max-w-xl bg-zinc-950 border border-[#D4AF88]/20 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="p-8 md:p-12 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-6 top-6 text-white/60 hover:text-white transition"
              >
                <X size={32} />
              </button>

              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 text-[#D4AF88] mb-3">
                  <Phone className="w-5 h-5" />
                  <span className="text-sm tracking-widest">DIRECT WHATSAPP BOOKING</span>
                </div>
                <h2 className="font-playfair text-4xl md:text-5xl text-white">
                  {bookingType === "room" ? "Reserve Your Escape" : "Host Your Celebration"}
                </h2>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const message = `🌟 New ${bookingType.toUpperCase()} Booking Request%0A%0AName: ${formData.get("name")}%0AEmail: ${formData.get("email")}%0APhone: ${formData.get("phone")}%0ACheck-in: ${formData.get("checkin")}%0ACheck-out: ${formData.get("checkout")}%0AGuests: ${formData.get("guests")}%0AMessage: ${formData.get("message") || "No additional message"}`;

                  window.open(`https://wa.me/917018796714?text=${message}`, "_blank");
                  alert("Opening WhatsApp with your booking details...");
                  setIsModalOpen(false);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    className="bg-zinc-900 border border-white/10 focus:border-[#D4AF88] rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none transition"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="bg-zinc-900 border border-white/10 focus:border-[#D4AF88] rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none transition"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number (with WhatsApp)"
                  className="w-full bg-zinc-900 border border-white/10 focus:border-[#D4AF88] rounded-2xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none transition"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-white/60 block mb-2">CHECK-IN</label>
                    <input
                      type="date"
                      name="checkin"
                      required
                      className="w-full bg-zinc-900 border border-white/10 focus:border-[#D4AF88] rounded-2xl px-6 py-4 text-white focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/60 block mb-2">CHECK-OUT</label>
                    <input
                      type="date"
                      name="checkout"
                      required
                      className="w-full bg-zinc-900 border border-white/10 focus:border-[#D4AF88] rounded-2xl px-6 py-4 text-white focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-white/60 block mb-2">NUMBER OF GUESTS</label>
                  <select
                    name="guests"
                    required
                    className="w-full bg-zinc-900 border border-white/10 focus:border-[#D4AF88] rounded-2xl px-6 py-4 text-white focus:outline-none transition"
                  >
                    <option value="">Select Guests</option>
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests</option>
                    <option value="10">10+ Guests</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder={bookingType === "room" 
                    ? "Special requests, room preference, dietary needs..." 
                    : "Event type (Wedding / Corporate / Birthday / Anniversary), expected guests, etc."}
                  className="w-full bg-zinc-900 border border-white/10 focus:border-[#D4AF88] rounded-3xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none transition resize-none"
                />

                <button
                  type="submit"
                  className="w-full mt-4 bg-gradient-to-r from-[#D4AF88] to-[#F5E8C7] hover:brightness-110 transition py-6 rounded-2xl text-xl font-semibold text-black tracking-widest"
                >
                  CONFIRM VIA WHATSAPP
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}