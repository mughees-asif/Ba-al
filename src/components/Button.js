import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-teal-400 
        hover:bg-blue-500 
        text-black
        font-semibold 
        hover:text-white 
        py-2 px-4 
        border 
        border-blue-800 
        hover:border-transparent 
        rounded
    `}
    >
      {children}
    </button>
  );
};

export default Button;
