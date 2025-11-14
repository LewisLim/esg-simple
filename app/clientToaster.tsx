"use client";

import { Toaster } from "react-hot-toast";

export default function ClientToaster() {
  return (
    <Toaster
      toastOptions={{
        className: "",
        style: {
          border: "1px solid #1D8778",
          paddingLeft: "22px",
          paddingRight: "22px",
          color: "#333333",
          fontSize: "0.9rem",
          backgroundColor: "#FFFFFF",
        },
        success: {
          duration: 3000,
          iconTheme: {
            primary: "#0d9488",
            secondary: "white",
          },
        },
        error: {
          duration: 3000,
          iconTheme: {
            primary: "#f97316",
            secondary: "white",
          },
        },
      }}
    />
  );
}
