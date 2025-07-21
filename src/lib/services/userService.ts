import { Usuario } from "@/types/usuario.interface";
import { databaseSupabase } from "../supabase/databaseSupabase";
import { ApiResponse } from "@/types/api-response.interface";

const tableName = "usuario";

export const userService = {
  createUser: async (userData: Usuario): Promise<ApiResponse<null>> => {
    return await databaseSupabase.create<Usuario>(tableName, userData);
  },
};
