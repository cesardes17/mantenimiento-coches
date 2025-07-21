// src/lib/supabase/databaseSupabase.ts
import { supabase } from "../supabaseClient";
import { ApiResponse } from "@/types/api-response.interface";

export const databaseSupabase = {
  async create<T>(table: string, data: T): Promise<ApiResponse<null>> {
    const { error } = await supabase.from(table).insert(data);

    if (error) {
      return { ok: false, error: error.message };
    }

    return { ok: true, data: null };
  },
};
