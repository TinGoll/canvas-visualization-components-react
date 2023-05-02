import { SplicingAngle, WorkComponentData } from "./app.types";
import { BookDocument } from "./document.interface";
import { SampleProfile } from "./sample-profile.interface";

export interface Profile {
  id: number;
  workData: WorkComponentData[];
  widths: number[];
  angle: SplicingAngle;
  note: string;
  sample: SampleProfile | null;
  document: BookDocument;
}
