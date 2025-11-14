"use client";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer className="h-[50px] w-full flex justify-between items-center text-xs bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="base-padding w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Navigation Links */}
          <div className="hidden sm:flex items-center space-x-6">
            <a
              href="/help"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          <div className="flex items-center">
            <p className="text-gray-600">
              {year} © ESGtogether. All rights reserved.
            </p>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className="sm:hidden border-t border-gray-200">
          <div className="flex flex-col space-y-2 items-center">
            <div className="flex space-x-6">
              <a
                href="/help"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Contact
              </a>
              <a
                href="/privacy"
                className="text-gray-600 hover:text-green-600 transition-colors"
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
