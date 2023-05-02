import { ColorConverter } from "./color-converter.interface";

export interface Coler {
  id: number;
  name: string;
  value: number;
  converter: ColorConverter;
}
