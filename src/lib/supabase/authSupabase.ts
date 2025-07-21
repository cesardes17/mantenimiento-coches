import { ApiResponse } from "@/types/api-response.interface";
import { supabase } from "../supabaseClient";
import { mapSupabaseAuthError } from "./mapSupabaseError";

export const authSupabase = {
  async login(
    email: string,
    password: string
  ): Promise<ApiResponse<{ uid: string }>> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return { ok: false, error: mapSupabaseAuthError(error) };
    }

    const uid = data.user?.id;

    if (!uid) {
      return {
        ok: false,
        error: "No se pudo obtener el identificador del usuario.",
      };
    }

    return {
      ok: true,
      data: { uid },
    };
  },

  async register(
    email: string,
    password: string
  ): Promise<ApiResponse<{ uid: string }>> {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      return { ok: false, error: mapSupabaseAuthError(error) };
    }

    const uid = data.user?.id;

    if (!uid) {
      return {
        ok: false,
        error: "No se pudo obtener el identificador del nuevo usuario.",
      };
    }

    return {
      ok: true,
      data: { uid },
    };
  },

  async logout(): Promise<ApiResponse<null>> {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return {
        ok: false,
        error: mapSupabaseAuthError(error),
      };
    }

    return {
      ok: true,
      data: null,
    };
  },

  async getSession(): Promise<
    ApiResponse<{ uid: string; email: string | undefined } | null>
  > {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      return {
        ok: false,
        error: mapSupabaseAuthError(error),
      };
    }

    if (!data.session?.user) {
      return {
        ok: false,
        error: "No hay sesión activa.",
      };
    }
    const { id: uid, email = undefined } = data.session.user;

    return {
      ok: true,
      data: {
        uid,
        email,
      },
    };
  },
};
