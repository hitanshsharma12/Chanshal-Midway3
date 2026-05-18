import React from 'react';
import { MapPin, Compass, Navigation } from 'lucide-react';

export default function MapSection() {
  // Production-ready Embed API URL forcing native satellite mode using 'maptype=satellite'
  const satelliteMapSrc = "https://maps.google.com/maps?q=Chanshal%20Midway%20Homestay,%20Rohru&t=k&z=17&output=embed";
  
  // Direct tracking & routing link for the external "Get Directions" anchor button
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Chanshal+Midway+Homestay+Rohru";

  return (
    <section className="py-20 md:py-28 bg-[#030712] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Section Header for Mobile */}
        <div className="text-center mb-12 lg:hidden">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#c5a880] italic text-sm tracking-widest font-serif">our location</span>
          </div>
          <h2 className="text-4xl font-serif font-light tracking-tight text-gray-100">
            Find Chanshal Midway
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Location Details */}
          <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
            {/* Header for Desktop */}
            <div className="hidden lg:block space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-6 bg-[#c5a880]"></div>
                <span className="text-[#c5a880] italic text-sm tracking-widest font-serif">the destination</span>
              </div>
              <h2 className="text-4xl xl:text-5xl font-serif font-light tracking-tight text-gray-100 leading-tight">
                Find Chanshal <br />Midway
              </h2>
            </div>

            <div className="space-y-6 pt-4 border-t border-gray-800/60 lg:border-t-0 lg:pt-0">
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900/50 border border-gray-800 rounded-full text-xs text-gray-300">
                <span className="text-[#c5a880]">★</span> 4.7 Premium Rating (43 Reviews)
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-gray-900/60 border border-gray-800 text-[#c5a880] rounded-xl flex-shrink-0">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs font-serif uppercase tracking-[0.15em] text-[#c5a880] mb-1">Address</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-sans">
                    Chanshal Midway Homestay, <br />
                    Near Morish Filling Station, Seema, <br />
                    Rohru, Himachal Pradesh 171207
                  </p>
                </div>
              </div>

              {/* Plus Code */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-gray-900/60 border border-gray-800 text-[#c5a880] rounded-xl flex-shrink-0">
                  <Compass size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs font-serif uppercase tracking-[0.15em] text-[#c5a880] mb-1">Plus Code</h4>
                  <p className="text-sm text-gray-400 font-mono tracking-wider">
                    6Q6M+4X Rohru, HP
                  </p>
                </div>
              </div>
            </div>

            {/* Premium CTA Button */}
            <div className="pt-4">
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#c5a880] hover:bg-[#b3956d] text-[#030712] font-medium text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#c5a880]/5 group"
              >
                <Navigation size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Iframe Container */}
          <div className="lg:col-span-3 order-1 lg:order-2 w-full">
            <div className="relative p-1.5 bg-gray-900/40 border border-gray-800/80 rounded-[2rem] shadow-2xl backdrop-blur-sm">
              <div className="overflow-hidden rounded-[1.75rem] h-[350px] sm:h-[450px] md:h-[500px] relative">
                <iframe
                  src={satelliteMapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chanshal Midway Satellite Map"
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}