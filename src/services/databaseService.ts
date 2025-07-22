// src/services/databaseService.ts

import type { ApiResponse } from "@/types/api-response.interface";
import * as db from "@/services/proveedores/databaseSupabase";

export const databaseService = {
  /**
   * Crea un nuevo registro en una tabla.
   */
  create: <TInsert, TResponse>(
    table: string,
    values: TInsert
  ): Promise<ApiResponse<TResponse>> => {
    return db.create<TInsert, TResponse>(table, values);
  },

  /**
   * Obtiene un único registro que cumpla las condiciones.
   */
  get: <TResponse>(
    table: string,
    conditions: Partial<TResponse>
  ): Promise<ApiResponse<TResponse>> => {
    return db.get<TResponse>(table, conditions);
  },

  /**
   * Obtiene todos los registros que cumplan las condiciones, o todos si no se indica.
   */
  getAll: <TResponse>(
    table: string,
    conditions?: Partial<TResponse>
  ): Promise<ApiResponse<TResponse[]>> => {
    return db.getAll<TResponse>(table, conditions);
  },

  /**
   * Actualiza un único registro que cumpla las condiciones.
   */
  update: <TUpdate, TResponse>(
    table: string,
    conditions: Partial<TResponse>,
    values: TUpdate
  ): Promise<ApiResponse<TResponse>> => {
    return db.update<TUpdate, TResponse>(table, conditions, values);
  },

  /**
   * Elimina registros que cumplan las condiciones.
   */
  delete: <TResponse>(
    table: string,
    conditions: Partial<TResponse>
  ): Promise<ApiResponse<null>> => {
    return db.remove<TResponse>(table, conditions);
  },
};
