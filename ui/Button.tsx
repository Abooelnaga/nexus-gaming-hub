import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden font-orbitron font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 rounded-sm";
  
  const variants = {
    primary: "bg-nexus-blue text-nexus-dark hover:bg-white hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] border border-transparent",
    secondary: "bg-nexus-purple text-white hover:bg-nexus-purple/80 hover:shadow-[0_0_20px_rgba(155,89,182,0.6)] border border-transparent",
    outline: "bg-transparent text-nexus-blue border border-nexus-blue hover:bg-nexus-blue/10 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
};

export default Button;
