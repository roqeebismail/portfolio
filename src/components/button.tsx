import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  classStyle?: string;
}

const Button: React.FC<ButtonProps> = ({ children , classStyle}) => {
    const baseClass ="contact__link rounded px-4 py-2 shadow font-bold";
  return (
    <button
      type="button"
      className={`${baseClass} ${classStyle}`}
    >
      {children} &rarr;
    </button>
  );
};

export default Button;
