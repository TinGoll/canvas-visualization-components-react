import { PatinaColer } from "./patina-coler.interface";

export interface PatinaConverter {
  id: number;
  name: string;
  value: number;
  deleted: boolean;
  colers: PatinaColer[];
}
