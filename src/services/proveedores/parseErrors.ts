// src/lib/supabase/parseAuthError.ts

import { AuthError } from "@supabase/supabase-js";
import type { PostgrestError } from "@supabase/supabase-js";

export function parseAuthError(error: AuthError | null): string {
  // Para debugging en desarrollo
  if (process.env.NODE_ENV === "development") {
    console.warn("[SUPABASE AUTH ERROR CODE]:", error?.code);
  }

  switch (error?.code) {
    case "invalid_credentials":
      return "Correo o contraseña incorrectos.";

    case "email_already_exists":
    case "user_already_exists":
      return "Este correo ya está registrado.";

    case "email_not_confirmed":
      return "Debes confirmar tu correo electrónico antes de iniciar sesión.";

    case "signup_disabled":
    case "email_provider_disabled":
      return "El registro está desactivado actualmente.";

    default:
      return "Ha ocurrido un error inesperado. Intenta nuevamente.";
  }
}

export function parseDatabaseError(
  error: PostgrestError | null | undefined
): string {
  if (process.env.NODE_ENV === "development") {
    console.warn("[SUPABASE DATABASE ERROR]:", error?.code, error?.message);
  }

  switch (error?.code) {
    case "23505": // unique_violation
      return "Este dato ya está registrado.";
    case "23502": // not_null_violation
      return "Faltan campos obligatorios.";
    case "22P02": // invalid_text_representation (ej: UUID inválido)
      return "Dato inválido enviado al servidor.";
    case "23503": // foreign_key_violation
      return "La operación no puede completarse por restricciones de datos relacionados.";
    case "42501": // insufficient_privilege
      return "No tienes permisos para realizar esta operación.";
    case "42883": // undefined_function
    case "42703": // undefined_column
      return "Error interno del servidor. Contacta al administrador.";
    default:
      return "Ha ocurrido un error inesperado. Intenta nuevamente.";
  }
}
