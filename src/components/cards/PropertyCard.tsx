"use client";

import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

interface Props {
  image: string;
  title: string;
  location: string;
  price: string;
}

export default function PropertyCard({
  image,
  title,
  location,
  price,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover hover:scale-110 transition duration-700"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <div className="flex items-center gap-1 text-[#C5A46E]">
            <Star className="w-4 h-4 fill-[#C5A46E]" />
            <span>4.9</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Starting From</p>
            <h4 className="text-xl font-bold">{price}</h4>
          </div>

          <button className="gold-btn">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}