import React from "react";

interface NavButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

const NavButton = ({ label, isActive, onClick, className = "" }: NavButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative text-gray-300 hover:text-white transition-all duration-300 ${isActive ? "text-blue-400" : ""} ${className}`}
    >
      {label}
      {isActive && (
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
      )}
    </button>
  );
};

export default NavButton;