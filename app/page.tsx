"use client";

import { useState } from "react";
import Button from "@/components/custom/button";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Slider from "rc-slider";
import { HandPointingIcon } from "@phosphor-icons/react";

export default function Home() {
  const [sliderValue, setSliderValue] = useState<number>(0);
  return (
    <div>
      <Header />
      <div className="head-body pt-[80px] base-padding">
        Main Page
        <div className="paper w-50 h-50"></div>
        <Button
          text="Click Here"
          icon={
            <HandPointingIcon
              size={32}
              color="#EFEFEF"
              className="icon absolute left-1/2 -translate-x-1/2 z-1"
            />
          }
          size="h-12 w-12"
        />
        <div className="relative flex flex-col items-center w-10 h-100 ">
          <p className="text-center mb-5">{sliderValue}</p>
          <Slider
            min={0}
            max={100}
            value={sliderValue}
            vertical={true}
            onChange={(value) => setSliderValue(value as number)}
            className="flex-1"
          />
          <HandPointingIcon
            size={32}
            color="#454545"
            className="icon absolute -bottom-12 left-1/2 -translate-x-1/2 z-1"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
