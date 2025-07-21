import type { AuthError } from "@supabase/supabase-js";

export function mapSupabaseAuthError(error: AuthError): string {
  switch (error.code) {
    case "invalid_login_credentials":
      return "Correo o contraseña incorrectos.";
    case "email_not_confirmed":
      return "Debes confirmar tu correo electrónico antes de iniciar sesión.";
    case "user_already_registered":
      return "Este correo ya está registrado.";
    case "user_not_found":
      return "No existe una cuenta con este correo.";
    case "invalid_password":
      return "La contraseña no es válida.";
    case "signup_disabled":
      return "El registro de nuevos usuarios está desactivado.";
    default:
      return "Ha ocurrido un error inesperado con la autenticación.";
  }
}
