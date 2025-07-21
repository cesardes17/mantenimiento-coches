"use client";

import { Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16">
      <div className="flex items-center justify-between h-full px-4">
        {/* Hamburger menu - only visible on mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Centered title */}
        <div className="flex-1 flex justify-center lg:justify-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Mantén Coche
          </h1>
        </div>

        {/* Spacer for mobile to center the title */}
        <div className="lg:hidden w-10" />
      </div>
    </nav>
  );
}
