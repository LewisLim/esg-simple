"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed h-[44px] top-0 left-0 right-0 z-50 bg-nav shadow-sm border-b border-gray-200">
      <div className="mx-auto base-padding">
        <div className="flex justify-between items-center h-11">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="ml-2 text-xl font-semibold">CarbonCalc</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="/calculator"
              className="px-3 py-2 text-sm font-medium transition-colors"
            >
              Calculator
            </a>
            <a
              href="/tips"
              className="px-3 py-2 text-sm font-medium transition-colors"
            >
              Learn
            </a>
            <a
              href="/about"
              className="px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:text-green-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // X icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium transition-colors rounded-md"
              >
                Home
              </a>
              <a
                href="/calculator"
                className="block px-3 py-2 text-base font-medium transition-colors rounded-md"
              >
                Calculator
              </a>
              <a
                href="/tips"
                className="block px-3 py-2 text-base font-medium transition-colors rounded-md"
              >
                Tips
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-base font-medium transition-colors rounded-md"
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
