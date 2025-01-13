import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-1 uppercase border-hijau-tua border-2 bg-putih text-hijau-tua rounded-2xl text-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
