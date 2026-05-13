import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div className={`
      bg-anime-card 
      border border-slate-700/50 
      rounded-xl 
      p-5 
      shadow-xl 
      transition-all 
      ${hover ? 'hover:border-anime-primary/50 hover:-translate-y-1' : ''} 
      ${className}
    `}>
      {children}
    </div>
  );
};
