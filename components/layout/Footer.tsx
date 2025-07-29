"use client";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 space-y-4 sm:space-y-0">
          {/* Navigation Links */}
          <div className="hidden sm:flex items-center space-x-6">
            <a
              href="/help"
              className="text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center">
            <p className="text-sm text-gray-600">
              Copyright {year} © ESGtogether. All rights reserved.
            </p>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className="sm:hidden border-t border-gray-200 pt-4 pb-2">
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex space-x-6">
              <a
                href="/help"
                className="text-sm text-gray-600 hover:text-green-600 transition-colors"
              >
                Contact
              </a>
              <a
                href="/privacy"
                className="text-sm text-gray-600 hover:text-green-600 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
