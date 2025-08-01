// src/types/usuario.ts
import { Database } from "./supabase";

export type Coche = Database["public"]["Tables"]["coches"]["Row"];
export type CocheInsert =
  Database["public"]["Tables"]["coches"]["Insert"];
export type CocheUpdate =
  Database["public"]["Tables"]["coches"]["Update"];
