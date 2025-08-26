import React from "react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  color?: string; // Tailwind Colors class
  size?: string; // Tailwind Colors class
}

export default function Button({
  text,
  icon,
  color,
  size,
  onClick,
}: ButtonProps) {
  return (
    <div className="flex-col flex-center">
      <button
        onClick={onClick}
        className={`${color ? color : "bg-slate-700 hover:bg-slate-600"} ${
          size ? size : "w-16 h-16"
        }
        flex flex-col items-center justify-center rounded-full transition-colors duration-200 focus:outline-none active:scale-95 cursor-pointer`}
      >
        {icon && icon}
      </button>
      <span className="text-black text-xs font-medium text-center leading-tight mt-1">
        {text}
      </span>
    </div>
  );
}

// <div className="flex items-center justify-center w-10 h-10">
//   <Image src={icon} alt={text} width={30} height={30} />
// </div>
