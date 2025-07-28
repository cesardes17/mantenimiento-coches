"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ContentLayoutProps {
  children: ReactNode;
  centerVertically?: boolean;
}

export default function ContentLayout({
  children,
  centerVertically = false,
}: ContentLayoutProps) {
  return (
    <div
      className={clsx(
        "min-h-screen bg-gray-100 dark:bg-gray-800 p-4 md:p-6 lg:p-8",
        centerVertically
          ? "flex items-center justify-center"
          : "flex justify-center pt-10"
      )}
    >
      <div className="w-full max-w-7xl flex flex-col items-center space-y-6">
        {children}
      </div>
    </div>
  );
}
