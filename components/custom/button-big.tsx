import React from "react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  icon?: string;
  onClick?: () => void;
  color?: string; // Tailwind Colors class
}

export default function ButtonBig({
  text,
  icon,
  color,
  onClick,
}: ButtonProps) {
  return (
    <div className="w-full flex-col flex-center h-[45px] 2xl:h-[60px] 4xl:h-[80px] min-w-[250px] max-w-[450px]">
      <button
        onClick={onClick}
        className={`${color ? color : "bg-sky-200 hover:bg-sky-100"} 
        w-full h-full flex flex-col items-center justify-center rounded-md transition-colors duration-200 focus:outline-none active:scale-95 cursor-pointer`}
      >
        {icon && (
          <div className="flex items-center justify-center w-10 h-10">
            <Image src={icon} alt={text} width={30} height={30} />
          </div>
        )}
        <span className="text-black text-xs font-medium text-center leading-tight mt-1">
          {text}
        </span>
      </button>
    </div>
  );
}
