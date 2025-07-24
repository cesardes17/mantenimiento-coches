// src/services/rolesService.ts

import { databaseService } from "@/services/databaseService";
import { ApiResponse } from "@/types/api-response.interface";
import { Rol, RolInsert, RolUpdate } from "@/types/rol";

const TABLE_NAME = "roles";

export const rolesService = {
  getAll: (): Promise<ApiResponse<Rol[]>> => {
    return databaseService.getAll<Rol>(TABLE_NAME);
  },

  getById: (id: number): Promise<ApiResponse<Rol>> => {
    return databaseService.get<Rol>(TABLE_NAME, { id });
  },

  create: (data: RolInsert): Promise<ApiResponse<Rol>> => {
    return databaseService.create<RolInsert, Rol>(TABLE_NAME, data);
  },

  update: (id: number, data: RolUpdate): Promise<ApiResponse<Rol>> => {
    return databaseService.update<RolUpdate, Rol>(TABLE_NAME, { id }, data);
  },

  delete: (id: number): Promise<ApiResponse<null>> => {
    return databaseService.delete(TABLE_NAME, { id });
  },
};
