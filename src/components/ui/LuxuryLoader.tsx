// components/ui/LuxuryLoader.tsx
"use client";

import { motion } from "framer-motion";

export default function LuxuryLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#030712]">
      
      {/* Background Luxury Glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-amber-400/10 blur-3xl" />

      {/* Moving Light */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="absolute w-72 h-72 rounded-full border border-amber-400/20"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        className="absolute w-56 h-56 rounded-full border border-white/10"
      />

      {/* Main Loader */}
      <div className="relative flex flex-col items-center">
        
        {/* Luxury Square */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [0.95, 1.03, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="relative flex items-center justify-center w-40 h-40 border border-amber-400/30 bg-white/[0.03] backdrop-blur-xl rounded-[2rem] shadow-[0_0_40px_rgba(251,191,36,0.15)]"
        >
          
          {/* Animated Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-[2rem] border border-amber-300/40"
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          {/* Text */}
          <div className="text-center px-4">
            <h1 className="text-2xl font-semibold tracking-[6px] text-amber-300">
              CHANSHAL
            </h1>

            <div className="w-12 h-[1px] bg-amber-400/50 mx-auto my-3" />

            <p className="text-[10px] tracking-[4px] uppercase text-white/50">
              Banquet
            </p>
          </div>
        </motion.div>

        {/* Minimal Loader Line */}
        <div className="w-44 h-[2px] bg-white/10 rounded-full overflow-hidden mt-10">
          <motion.div
            className="h-full w-20 bg-gradient-to-r from-transparent via-amber-300 to-transparent"
            animate={{
              x: ["-100%", "250%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </div>
  );
}