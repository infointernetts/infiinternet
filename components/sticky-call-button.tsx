'use client';

import { Phone } from 'lucide-react';
import { useState } from 'react';

export function StickyCallButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="tel:8883702357"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
    >
      <Phone className={`w-5 h-5 text-white transition-transform ${isHovered ? 'animate-pulse' : ''}`} />
      <span className={`text-white font-semibold whitespace-nowrap transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-100'}`}>
        Call Now (888) 370-2357
      </span>
    </a>
  );
}
