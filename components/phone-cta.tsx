import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface PhoneCtaProps {
  label?: string;
  subtitle?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function PhoneCta({
  label = 'Call Now (888) 370-2357',
  subtitle = 'Talk to a service advisor',
  size = 'md',
  className = '',
}: PhoneCtaProps) {
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };

  return (
    <div className={className}>
      <a href="tel:8883702357">
        <Button
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
          size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default'}
        >
          <Phone className="w-5 h-5" />
          {label}
        </Button>
      </a>
      {subtitle && <p className="text-xs text-foreground/50 text-center mt-2">{subtitle}</p>}
    </div>
  );
}
