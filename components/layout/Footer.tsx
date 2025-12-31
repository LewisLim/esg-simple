"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-between items-center text-xs">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Navigation Links */}
          <div className="flex items-center px-6 py-2">
            <p>{year} © LookAtGaia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
