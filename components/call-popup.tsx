'use client';

import { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';

export function CallPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Popup Card */}
      <div className="relative z-10 bg-card border border-border/40 rounded-2xl shadow-2xl max-w-sm mx-4 overflow-hidden pointer-events-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-accent to-secondary p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10" />
          <div className="relative">
            <h3 className="text-2xl font-bold text-white">Internet or Cable Not Working?</h3>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-20 p-2 hover:bg-card/50 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-foreground/60 hover:text-foreground" />
        </button>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-foreground/70">
              Get instant help for slow internet, outages, setup issues, or cable problems.
            </p>
          </div>

          {/* Phone Number Display */}
          <div className="text-center py-4">
            <a 
              href="tel:8883702357" 
              className="text-3xl font-bold text-accent hover:text-accent/90 transition-colors"
            >
              (888) 370-2357
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="tel:8883702357"
            onClick={() => setIsVisible(false)}
            className="w-full bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Phone className="w-5 h-5 group-hover:animate-pulse" />
            CALL SUPPORT NOW
          </a>

          {/* Trust Line */}
          <div className="text-center text-xs text-foreground/60 space-y-1">
            <p>Quick assistance • No forms • Talk to a real agent</p>
          </div>

          {/* Secondary CTA */}
          <button
            onClick={() => setIsVisible(false)}
            className="w-full border border-border/40 hover:bg-card/50 text-foreground font-semibold py-2 rounded-lg transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
