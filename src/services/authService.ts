// src/services/authService.ts

import * as auth from "@/services/proveedores/authSupabase";

import { Usuario, UsuarioInsert } from "@/types/usuario";
import { ApiResponse } from "@/types/api-response.interface";
import {
  LoginFormValues,
  RegisterFormValues,
} from "@/features/auth/auth.types";
import { databaseService } from "./databaseService";

export const authService = {
  /**
   * Inicia sesión con email y contraseña
   */
  login: async (data: LoginFormValues): Promise<ApiResponse<Usuario>> => {
    const authResult = await auth.login(data);
    if (!authResult.ok || !authResult.data)
      return { ok: false, error: authResult.error };

    const { uid } = authResult.data!;

    const userResult = await databaseService.get<Usuario>("usuarios", {
      uid: uid,
    });

    return userResult.ok
      ? { ok: true, data: userResult.data }
      : { ok: false, error: userResult.error };
  },

  /**
   * Registra un nuevo usuario (Auth + DB)
   */
  register: async (data: RegisterFormValues): Promise<ApiResponse<Usuario>> => {
    const authResult = await auth.register(data);
    if (!authResult.ok || !authResult.data)
      return { ok: false, error: authResult.error };

    const { uid, email } = authResult.data;

    const userToInsert: UsuarioInsert = {
      uid,
      email,
      nombre: data.firstName,
      apellido_p: data.secondLastName,
      apellido_m: data.firstLastName,
      movil: data.mobilePhone,
      fijo: data.landlinePhone || null,
      rol_global_id: 1,
      activo: true,
      fecha_registro: new Date().toISOString(),
    };

    const dbResult = await databaseService.create<UsuarioInsert, Usuario>(
      "usuarios",
      userToInsert
    );

    return dbResult.ok
      ? { ok: true, data: dbResult.data }
      : { ok: false, error: dbResult.error };
  },

  /**
   * Cierra sesión del usuario actual
   */
  logout: async (): Promise<ApiResponse<null>> => {
    return auth.logout();
  },

  /**
   * Obtiene al usuario actual (si hay sesión)
   */
  getCurrentUser: async (): Promise<ApiResponse<Usuario | null>> => {
    const sessionResult = await auth.getCurrentUser();
    if (!sessionResult.ok || !sessionResult.data) {
      return { ok: false, error: sessionResult.error };
    }

    const { uid } = sessionResult.data;

    const userResult = await databaseService.get<Usuario>("usuarios", {
      uid: uid,
    });

    return userResult.ok
      ? { ok: true, data: userResult.data }
      : { ok: false, error: userResult.error };
  },
};
