import { ComponentData, ElementSampleBody } from "./app.types";
import { SampleElement } from "./sample-element.interface";

export interface DocumentElement {
  id: number;
  name: string;
  note?: string;
  components: ComponentData[];
  identifier: ElementSampleBody | null;
  sample?: SampleElement;
  __sample__: SampleElement;
}
