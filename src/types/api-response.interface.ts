// src/types/api-response.ts
export interface ApiResponse<T> {
  ok: boolean; // true si la operación fue exitosa
  data?: T; // datos retornados si hay éxito
  error?: string; // mensaje de error si hay fallo
}
