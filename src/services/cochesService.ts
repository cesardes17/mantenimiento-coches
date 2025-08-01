import { ApiResponse } from "@/types/api-response.interface";
import { Coche, CocheInsert, CocheUpdate } from "@/types/coche";
import { databaseService } from "./databaseService";

const TABLE_NAME = "coches";

export const cocheService = {
  getAll: (): Promise<ApiResponse<Coche[]>> => {
    return databaseService.getAll<Coche>(TABLE_NAME);
  },

  getById: (id: number): Promise<ApiResponse<Coche>> => {
    return databaseService.get<Coche>(TABLE_NAME, { id });
  },

  create: (data: CocheInsert): Promise<ApiResponse<Coche>> => {
    return databaseService.create<CocheInsert, Coche>(TABLE_NAME, data);
  },

  update: (id: number, data: CocheUpdate): Promise<ApiResponse<Coche>> => {
    return databaseService.update<CocheUpdate, Coche>(TABLE_NAME, { id }, data);
  },

  delete: (id: number): Promise<ApiResponse<null>> => {
    return databaseService.delete(TABLE_NAME, { id });
  },
};
