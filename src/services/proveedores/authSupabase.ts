// src/services/proveedores/authSupabase.ts

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/types/api-response.interface";
import { parseAuthError } from "./parseErrors";
import {
  LoginFormValues,
  RegisterFormValues,
} from "@/features/auth/auth.types";

type MinimalAuthUser = {
  uid: string;
  email: string;
};

/**
 * Solo registra en Supabase Auth
 */
export async function register(
  data: RegisterFormValues
): Promise<ApiResponse<MinimalAuthUser>> {
  const { email, password } = data;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError || !authData.user) {
    return {
      ok: false,
      error: parseAuthError(authError),
    };
  }

  return {
    ok: true,
    data: {
      uid: authData.user.id,
      email: authData.user.email ?? email,
    },
  };
}

/**
 * Inicia sesión con Supabase Auth y devuelve el UID
 */
export async function login(
  data: LoginFormValues
): Promise<ApiResponse<{ uid: string }>> {
  const { email, password } = data;

  const { data: authData, error: authError } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (authError || !authData.user) {
    return {
      ok: false,
      error: parseAuthError(authError),
    };
  }

  return { ok: true, data: { uid: authData.user.id } };
}

/**
 * Cierra sesión con Supabase Auth
 */
export async function logout(): Promise<ApiResponse<null>> {
  const { error } = await supabase.auth.signOut();

  return error
    ? {
        ok: false,
        error: parseAuthError(error),
      }
    : { ok: true };
}

/**
 * Recupera el usuario autenticado (solo UID y email)
 */
export async function getCurrentUser(): Promise<
  ApiResponse<MinimalAuthUser | null>
> {
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return {
      ok: false,
      error: parseAuthError(error),
    };
  }

  return {
    ok: true,
    data: {
      uid: data.user.id,
      email: data.user.email ?? "",
    },
  };
}
