import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) => {
  
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all active:scale-95 disabled:opacity-50";
  
  const variants = {
    primary: "bg-anime-primary text-white hover:brightness-110 shadow-lg shadow-anime-primary/20",
    secondary: "bg-anime-secondary text-white hover:brightness-110 shadow-lg shadow-anime-secondary/20",
    outline: "border-2 border-anime-primary text-anime-primary hover:bg-anime-primary hover:text-white"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
