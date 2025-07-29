import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Form - ESG Reporting Service | ESGtogether",
  description:
    "Get in touch with our team quickly and easily. We are here to address your questions, concerns, or feedback. We're ready to assist you!",
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="head_body pt-[80px]"></main>
    </>
  );
};

export default ContactLayout;
