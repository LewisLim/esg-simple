"use client";

import Button from "@/components/custom/button";
import Slider from "@/components/custom/slider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="head-body pt-[80px] base-padding">
        Main Page
        <Button text="Welcome" />
        <Slider />
      </div>
      <Footer />
    </div>
  );
}
