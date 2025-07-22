// src/types/usuario.ts
import { Database } from "./supabase";

export type Usuario = Database["public"]["Tables"]["usuarios"]["Row"];
export type UsuarioInsert = Database["public"]["Tables"]["usuarios"]["Insert"];
export type UsuarioUpdate = Database["public"]["Tables"]["usuarios"]["Update"];
