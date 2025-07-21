// src/lib/auth/authService.ts
import { ApiResponse } from "@/types/api-response.interface";
import { authSupabase } from "../../supabase/authSupabase";

export const AuthService = {
  async login(
    email: string,
    password: string
  ): Promise<ApiResponse<{ uid: string }>> {
    return await authSupabase.login(email, password);
  },

  async logout(): Promise<ApiResponse<null>> {
    return await authSupabase.logout();
  },

  async isAuthenticated(): Promise<
    ApiResponse<{ uid: string; email: string | undefined } | null>
  > {
    return await authSupabase.getSession();
  },

  async register(
    email: string,
    password: string
  ): Promise<ApiResponse<{ uid: string }>> {
    return await authSupabase.register(email, password);
  },
};
