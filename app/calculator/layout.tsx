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
      <main className="head-body base-padding max-w-6xl w-full flex-center mx-auto h-[90vh]">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default ContactLayout;
