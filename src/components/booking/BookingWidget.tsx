"use client";

import { CalendarDays, Users, MapPin } from "lucide-react";

export default function BookingWidget() {
  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 max-w-6xl mx-auto shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="border rounded-xl p-4">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <MapPin className="w-4 h-4" />
            <span>Location</span>
          </div>
          <input
            placeholder="Rohru, Himachal"
            className="w-full outline-none bg-transparent"
          />
        </div>

        <div className="border rounded-xl p-4">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <CalendarDays className="w-4 h-4" />
            <span>Check In</span>
          </div>
          <input type="date" className="w-full outline-none" />
        </div>

        <div className="border rounded-xl p-4">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <CalendarDays className="w-4 h-4" />
            <span>Check Out</span>
          </div>
          <input type="date" className="w-full outline-none" />
        </div>

        <div className="flex items-center">
          <button className="w-full bg-[#C5A46E] hover:bg-[#b28f55] transition-all duration-300 text-white rounded-xl py-4 text-lg font-medium">
            Book Stay
          </button>
        </div>
      </div>
    </div>
  );
}