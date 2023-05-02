import { MaterialType } from "./app.types";

export interface Material {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  type: MaterialType;
  deleted: boolean;
}
