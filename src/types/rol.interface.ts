// src/types/usuario.ts
import { Database } from "./supabase";

export type Rol = Database["public"]["Tables"]["roles"]["Row"];
export type RolInsert = Database["public"]["Tables"]["roles"]["Insert"];
export type RolUpdate = Database["public"]["Tables"]["roles"]["Update"];
