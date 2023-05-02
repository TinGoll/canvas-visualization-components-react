import { PatinaType } from "./app.types";
import { PatinaConverter } from "./patina.converter.interface";

export interface SamplePatina {
  id: number;

  createdAt: Date;

  updatedAt: Date;

  name: string;

  type: PatinaType;

  deleted: boolean;

  converters: PatinaConverter[];
}
