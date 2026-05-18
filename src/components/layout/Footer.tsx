import React from 'react';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#030712] text-white pt-16 pb-8 px-6 md:px-16 lg:px-24 font-sans tracking-wide">
      {/* Top Section: Newsletter */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-gray-800/60">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-[#c5a880]"></div>
            <span className="text-[#c5a880] italic text-sm tracking-widest font-serif">stay connected</span>
            <div className="h-[1px] w-8 bg-[#c5a880]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-gray-100 leading-tight mb-4">
            Never miss a <br /> moment of luxury.
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Subscribe to our newsletter and be the first to discover our latest offers, exclusive experiences, and stories from across Chanshal.
          </p>
        </div>

        <div className="flex items-center w-full max-w-md lg:ml-auto">
          <div className="flex w-full items-center border-b border-gray-700 py-2 focus-within:border-[#c5a880] transition-colors duration-300">
            <input
              type="email"
              placeholder="Enter your email address"
              className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none text-sm placeholder-gray-500"
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-[#c5a880] hover:bg-[#b3956d] text-[#030712] p-2.5 transition-colors duration-300"
              aria-label="Subscribe"
            >
              <Send size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Links & Branding */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pt-16">
        {/* Brand Column */}
        <div className="lg:col-span-2 max-w-sm">
          <h3 className="text-3xl font-serif tracking-[0.2em] text-gray-100 uppercase mb-6">
            Chanshal<span className="text-[#c5a880]">.</span>
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed mb-8 tracking-wider uppercase">
            Chanshal Midway — A premium luxury resort crafting timeless experiences amidst nature's finest landscapes.
          </p>
          
          {/* Social Icons (Custom SVGs to avoid package errors) */}
          <div className="flex gap-3">
            {/* Instagram */}
            <a href="#" className="w-9 h-9 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#c5a880] hover:border-[#c5a880] transition-all duration-300" aria-label="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Twitter / X */}
            <a href="#" className="w-9 h-9 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#c5a880] hover:border-[#c5a880] transition-all duration-300" aria-label="Twitter">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="w-9 h-9 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#c5a880] hover:border-[#c5a880] transition-all duration-300" aria-label="Facebook">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="w-9 h-9 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#c5a880] hover:border-[#c5a880] transition-all duration-300" aria-label="LinkedIn">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h4 className="text-[#c5a880] text-xs font-serif tracking-[0.2em] uppercase mb-6">Discover</h4>
          <ul className="space-y-3.5 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Hotels & Resorts</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Offers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Experiences</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#c5a880] text-xs font-serif tracking-[0.2em] uppercase mb-6">Company</h4>
          <ul className="space-y-3.5 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press Release</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#c5a880] text-xs font-serif tracking-[0.2em] uppercase mb-6">Support</h4>
          <ul className="space-y-3.5 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;