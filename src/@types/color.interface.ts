import { ColorConverter } from "./color-converter.interface";
import { BookDocument } from "./document.interface";
import { SampleColor } from "./sample-color.interface";

export interface Color {
  id: number;
  value: number;
  note: string;
  data: object;
  /** Название из старой бд */
  previousName?: string;
  /** Текущий конвертер */
  converter: ColorConverter;
  /** Шаблон цвета */
  sample: SampleColor | null;
  // Подключение документа
  document: BookDocument;
}
