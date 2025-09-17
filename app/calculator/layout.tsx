import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "",
  description: "",
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="bg-img-city"></div>
        <main className="head-body base-padding max-w-6xl w-full flex-center mx-auto">
          {children}
        </main>
      {/* <Footer /> */}
    </>
  );
};

export default ContactLayout;
