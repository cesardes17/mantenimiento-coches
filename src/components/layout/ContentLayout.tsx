"use client";

import { ReactNode } from "react";

interface ContentLayoutProps {
  children: ReactNode;
}

export default function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl space-y-6">{children}</div>
    </div>
  );
}
