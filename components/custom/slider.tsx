import React, { useState } from "react";
import RcSlider from "rc-slider";
import "rc-slider/assets/index.css";

interface SliderProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  value?: number;
  step?: number;
  vertical?: boolean;
  onChange?: (value: number | number[]) => void;
  onAfterChange?: (value: number | number[]) => void;
  disabled?: boolean;
  marks?: { [key: number]: string | React.ReactNode };
  className?: string;
}

export default function Slider({
  min = 0,
  max = 100,
  defaultValue = 0,
  value,
  step = 1,
  vertical = false,
  onChange,
  onAfterChange,
  disabled = false,
  marks,
  className = "",
}: SliderProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const handleChange = (val: number | number[]) => {
    if (!value) {
      setInternalValue(val as number);
    }
    onChange?.(val);
  };

  const currentValue = value !== undefined ? value : internalValue;

  return (
    <div
      className={`relative ${
        vertical ? "inline-block" : "w-full"
      } ${className}`}
    >
      <RcSlider
        min={min}
        max={max}
        value={currentValue}
        step={step}
        vertical={vertical}
        onChange={handleChange}
        onAfterChange={onAfterChange}
        disabled={disabled}
        marks={marks}
      />
    </div>
  );
}
