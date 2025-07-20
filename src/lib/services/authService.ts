// src/lib/auth/authService.ts

import { authSupabase } from "../supabase/authSupabase";

export const AuthService = {
  async login(email: string, password: string) {
    const { data, error } = await authSupabase.login(email, password);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async logout() {
    await authSupabase.logout();
  },

  async isAuthenticated() {
    const { data } = await authSupabase.getSession();
    return !!data.session;
  },
};
