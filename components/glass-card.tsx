import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'blue' | 'purple' | 'none';
}

export function GlassCard({
  children,
  className = '',
  hover = true,
  glow = 'blue',
}: GlassCardProps) {
  const glowClass = {
    blue: 'glow-blue',
    purple: 'glow-purple',
    none: '',
  }[glow];

  return (
    <div
      className={`
        glass-lg
        ${glowClass}
        ${hover ? 'hover:bg-card/50 hover:border-border/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(179,157,219,0.4)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
