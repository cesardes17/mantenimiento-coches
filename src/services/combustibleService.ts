// src/services/rolesService.ts

import { databaseService } from "@/services/databaseService";
import { ApiResponse } from "@/types/api-response.interface";
import {
  Combustible,
  CombustibleInsert,
  CombustibleUpdate,
} from "@/types/combustible";

const TABLE_NAME = "combustibles";

export const combustibleService = {
  getAll: (): Promise<ApiResponse<Combustible[]>> => {
    return databaseService.getAll<Combustible>(TABLE_NAME);
  },

  getById: (id: number): Promise<ApiResponse<Combustible>> => {
    return databaseService.get<Combustible>(TABLE_NAME, { id });
  },

  create: (data: CombustibleInsert): Promise<ApiResponse<Combustible>> => {
    return databaseService.create<CombustibleInsert, Combustible>(
      TABLE_NAME,
      data
    );
  },

  update: (
    id: number,
    data: CombustibleUpdate
  ): Promise<ApiResponse<Combustible>> => {
    return databaseService.update<CombustibleUpdate, Combustible>(
      TABLE_NAME,
      { id },
      data
    );
  },

  delete: (id: number): Promise<ApiResponse<null>> => {
    return databaseService.delete(TABLE_NAME, { id });
  },
};
