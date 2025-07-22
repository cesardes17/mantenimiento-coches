// src/components/layout/MainLayout.tsx

"use client";

import MainLayout from "@/components/layout/MainLayout";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
