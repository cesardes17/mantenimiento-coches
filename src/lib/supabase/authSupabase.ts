// src/lib/auth/authSupabase.ts
import { supabase } from "../supabaseClient";

export const authSupabase = {
  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  async logout() {
    await supabase.auth.signOut();
  },

  async getSession() {
    return await supabase.auth.getSession();
  },
};
