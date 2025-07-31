// src/types/usuario.ts
import { Database } from "./supabase";

export type Combustible = Database["public"]["Tables"]["combustibles"]["Row"];
export type CombustibleInsert =
  Database["public"]["Tables"]["combustibles"]["Insert"];
export type CombustibleUpdate =
  Database["public"]["Tables"]["combustibles"]["Update"];
