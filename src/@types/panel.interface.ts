import { WorkComponentData } from "./app.types";
import { BookDocument } from "./document.interface";
import { Material } from "./material.interface";
import { SampleColor } from "./sample-color.interface";
import { SamplePanel } from "./sample-panel.interface";

export interface Panel {
  id: number;
  note: string;
  workData: WorkComponentData[];
  shirtWorkData: WorkComponentData[];
  color: SampleColor;
  material: Material | null;
  sample: SamplePanel | null;
  document: BookDocument;
}
