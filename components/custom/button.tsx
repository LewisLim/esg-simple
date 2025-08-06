import React from "react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: () => void;
}

export default function Button({ text, icon, onClick }: ButtonProps) {
  return (
    <div className="flex-col flex-center">
      <button
        onClick={onClick}
        className="flex flex-col items-center justify-center w-16 h-16 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        {icon && (
          <div className="flex items-center justify-center w-8 h-8 mb-1">
            <Image
              src={icon}
              alt={text}
              width={24}
              height={24}
              className="w-6 h-6 text-white"
            />
          </div>
        )}
      </button>
      <span className="text-black text-xs font-medium text-center leading-tight mt-1">
        {text}
      </span>
    </div>
  );
}
