"use client";

import { AuthService } from "@/lib/services/core/authService";
import { Home, Car, User, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Mis Coches", href: "/cars", icon: Car },
  { name: "Perfil", href: "/profile", icon: User },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  return (
    <aside
      className={`fixed top-16 left-0 z-20 w-64 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Top section with navigation links */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
              >
                <Icon className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="px-4 py-6 border-t border-gray-200 dark:border-gray-700">
          {/* Logout button */}
          <button
            onClick={async () => {
              // Handle logout logic here
              const res = await AuthService.logout();
              if (res.ok) {
                router.push("/login");
              }
            }}
            className="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200 group"
          >
            <LogOut className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400" />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
          {/* Version */}
          <div className="mb-4 px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
            Versión v1.0
          </div>
        </div>
      </div>
    </aside>
  );
}
