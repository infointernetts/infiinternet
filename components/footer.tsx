import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/20 backdrop-blur-sm">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-foreground/70 leading-relaxed">
              Independent third-party service assistance for internet, cable, and streaming services.
            </p>
            <div className="space-y-2">
              <a 
                href="tel:8883702357" 
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">(888) 370-2357</span>
              </a>
              <a 
                href="mailto:support@infointernet.com" 
                className="flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@infointernet.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-sm text-foreground/70 hover:text-accent transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Need Help?</h4>
            <p className="text-sm text-foreground/70 mb-4">
              Talk to a service advisor now
            </p>
            <a 
              href="tel:8883702357"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <p className="text-xs text-foreground/50 mt-3">
              (888) 370-2357
            </p>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-border/40 pt-8 space-y-4">
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
            <h5 className="text-sm font-semibold text-foreground mb-2">Independent Service Disclosure</h5>
            <p className="text-xs text-foreground/70 leading-relaxed">
              Infointernet is an independent third-party service assistance startup, launched in 2024, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We provide general guidance and informational support only. We do not sell internet, cable, or streaming plans. All service fees are separate from provider charges.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-foreground/50">
            <p>
              © 2026 Infointernet. All rights reserved.
            </p>
            <p className="text-center">
              Infointernet is an independent third-party service assistance provider. All trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
