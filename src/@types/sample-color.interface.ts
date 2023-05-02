import { ColorType } from "./app.types";
import { ColorConverter } from "./color-converter.interface";

export interface SampleColor {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  colorType: ColorType;
  deleted: boolean;
  converters: ColorConverter[];
}
