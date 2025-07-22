// src/context/AuthContext.tsx

"use client";

import { authService } from "@/services/authService";
import { Usuario } from "@/types/usuario";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
  user: Usuario | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    const res = await authService.getCurrentUser();
    if (res.ok) setUser(res.data ?? null);
    setLoading(false);
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
