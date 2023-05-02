import {
  TypeColorConverter,
  ColorConverterGloss,
  ConverterTransparency,
} from "./app.types";
import { Coler } from "./coler.interface";
import { SampleColor } from "./sample-color.interface";

export interface ColorConverter {
  id: number;
  name: string;
  typeConverter: TypeColorConverter;
  converterGloss: ColorConverterGloss;
  transparency: ConverterTransparency;
  value: number;
  deleted: boolean;
  sample: SampleColor;
  colers: Coler[];
}
