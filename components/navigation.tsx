'use client';

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/40 bg-background/95 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation */}
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <Logo size="md" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/how-it-works" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="/services" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/faq" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a href="tel:8883702357" className="hidden md:flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">(888) 370-2357</span>
            </a>
            <a href="tel:8883702357">
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                size="sm"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Call Now</span>
                <span className="sm:hidden">(888) 370-2357</span>
              </Button>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-card/50 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20">
            <div className="flex flex-col space-y-3">
              <a 
                href="tel:8883702357" 
                className="text-sm text-accent font-semibold flex items-center gap-2 px-3 py-2"
              >
                <Phone className="w-4 h-4" />
                (888) 370-2357
              </a>
              <Link href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors px-3 py-2">
                Home
              </Link>
              <Link href="/how-it-works" className="text-sm text-foreground/70 hover:text-foreground transition-colors px-3 py-2">
                How It Works
              </Link>
              <Link href="/services" className="text-sm text-foreground/70 hover:text-foreground transition-colors px-3 py-2">
                Services
              </Link>
              <Link href="/faq" className="text-sm text-foreground/70 hover:text-foreground transition-colors px-3 py-2">
                FAQ
              </Link>
              <Link href="/contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors px-3 py-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
