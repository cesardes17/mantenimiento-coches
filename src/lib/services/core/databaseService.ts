import { ApiResponse } from "@/types/api-response.interface";
import { databaseSupabase } from "../../supabase/databaseSupabase";

export const databaseService = {
  async create<T>(table: string, data: T): Promise<ApiResponse<null>> {
    return await databaseSupabase.create(table, data);
  },
};
