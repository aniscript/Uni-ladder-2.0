"use client";
import React from "react";

const Button = ({
  title,
  handleClick,
}: {
  title: string;
  handleClick: () => void;
}) => {
  return (
    <button
      className="py-2 px-4 transition-all duration-300 text-primary border-2 rounded-md border-primary 
      bg-white hover:bg-primary-500 hover:text-white hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-opacity-50 shadow-sm"
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
