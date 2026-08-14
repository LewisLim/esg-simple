"use client";

import { NavLink } from "@mantine/core";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-between items-center text-xs">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center px-6 py-2">
          {/* Navigation Links */}
          <div>
            <NavLink
              href={"/about"}
              label={"About"}
              className="!py-0.5"
              styles={{ label: { fontSize: "0.75rem" } }}
            />
          </div>
          <div className="flex items-center">
            <p>{year} © LookAtGaia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
