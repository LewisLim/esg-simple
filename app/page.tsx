"use client";

import { useState } from "react";
import Button from "@/components/custom/button";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Slider from "rc-slider";

export default function Home() {
  const [sliderValue, setSliderValue] = useState<number>(0);
  return (
    <div>
      <Header />
      <div className="head-body pt-[80px] base-padding">
        Main Page
        <Button
          text="Click Here"
          icon="/icons/pointer-click.svg"
          size="h-12 w-12"
        />
        <div className="w-100 h-100">
          <Slider
            min={0}
            max={100}
            value={sliderValue}
            vertical={true}
            onChange={(value) => setSliderValue(value as number)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
