import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { container: 'h-8', text: 'text-lg' },
    md: { container: 'h-10', text: 'text-xl' },
    lg: { container: 'h-12', text: 'text-2xl' }
  };

  const sizeClasses = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses.container} aspect-square relative`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background Circle with Gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          
          {/* Outer Circle */}
          <circle cx="50" cy="50" r="45" fill="url(#logoGradient)" />
          
          {/* WiFi Signal Waves */}
          <path
            d="M 50 55 Q 40 45 30 45"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M 50 55 Q 60 45 70 45"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M 50 55 Q 35 35 20 35"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M 50 55 Q 65 35 80 35"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          
          {/* Center Dot (Info Symbol) */}
          <circle cx="50" cy="60" r="5" fill="white" />
          <rect x="47" y="35" width="6" height="15" rx="3" fill="white" />
        </svg>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className={`${sizeClasses.text} font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent`}>
          Infointernet
        </span>
      )}
    </div>
  );
}
