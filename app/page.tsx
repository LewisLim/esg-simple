"use client";

import { useState } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { HandPointingIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="head-body pt-[80px] base-padding">
        <div className="paper w-50 h-full relative">
          <h1>Main Page</h1>

        </div>
      </div>
      <Footer />
    </div>
  );
}
