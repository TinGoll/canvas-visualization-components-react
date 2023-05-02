import { Unit } from "./app.types";
import { Sector } from "./sector.interface";

export interface Work {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  price: number;
  norm: number;
  unit: Unit;
  salaryUnit: Unit;
  data: any;
  deleted: boolean;
  sectors: Sector[];
}
