"use client";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-between items-center text-xs bg-gray-50 border-t border-gray-200 py-1">
      <div className="base-padding w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Navigation Links */}
          <div className="flex items-center">
            <p className="text-gray-600">
              {year} © LookAtGaia 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
