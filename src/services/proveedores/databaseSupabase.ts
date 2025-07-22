// src/services/proveedores/databaseSupabase.ts

import { supabase } from "@/lib/supabase/client";
import type { ApiResponse } from "@/types/api-response.interface";
import { parseDatabaseError } from "./parseErrors";

/**
 * Inserta un nuevo registro en la tabla.
 */
export async function create<TInsert, TResponse>(
  table: string,
  values: TInsert
): Promise<ApiResponse<TResponse>> {
  const { data, error } = await supabase
    .from(table)
    .insert(values)
    .select()
    .single();

  return error
    ? { ok: false, error: parseDatabaseError(error) }
    : { ok: true, data };
}

/**
 * Obtiene un solo registro de la tabla que coincida con las condiciones.
 */
export async function get<TResponse>(
  table: string,
  conditions: Partial<TResponse>
): Promise<ApiResponse<TResponse>> {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .match(conditions)
    .single();

  return error
    ? { ok: false, error: parseDatabaseError(error) }
    : { ok: true, data };
}

/**
 * Obtiene múltiples registros que coincidan (o todos si no hay condiciones).
 */
export async function getAll<TResponse>(
  table: string,
  conditions?: Partial<TResponse>
): Promise<ApiResponse<TResponse[]>> {
  const query = supabase.from(table).select("*");
  const finalQuery = conditions ? query.match(conditions) : query;

  const { data, error } = await finalQuery;

  return error
    ? { ok: false, error: parseDatabaseError(error) }
    : { ok: true, data };
}

/**
 * Actualiza uno o más registros que coincidan con las condiciones.
 */
export async function update<TUpdate, TResponse>(
  table: string,
  conditions: Partial<TResponse>,
  values: TUpdate
): Promise<ApiResponse<TResponse>> {
  const { data, error } = await supabase
    .from(table)
    .update(values)
    .match(conditions)
    .select()
    .single();

  return error
    ? { ok: false, error: parseDatabaseError(error) }
    : { ok: true, data };
}

/**
 * Elimina registros que coincidan con las condiciones.
 */
export async function remove<TResponse>(
  table: string,
  conditions: Partial<TResponse>
): Promise<ApiResponse<null>> {
  const { error } = await supabase.from(table).delete().match(conditions);

  return error ? { ok: false, error: parseDatabaseError(error) } : { ok: true };
}
