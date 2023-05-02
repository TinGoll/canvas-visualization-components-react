import { PatinaConverter } from "./patina.converter.interface";
import { SamplePatina } from "./sample-patina.interface";

export interface Patina {
  id: number;
  value: number;
  /** Название из старой бд */
  previousName?: string;
  note: string;
  /** Текущий конвертер */
  converter: PatinaConverter;
  sample: SamplePatina | null;
}
