import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20",
    secondary: "border border-primary text-primary hover:bg-primary/10",
    ghost: "text-grey-light hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
