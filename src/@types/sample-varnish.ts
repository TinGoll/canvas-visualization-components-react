import { VarnishGlossiness, VarnishType } from "./app.types";

export interface SampleVarnish {
  id: number;

  createdAt: Date;

  updatedAt: Date;

  name: string;

  type: VarnishType;

  glossiness: VarnishGlossiness;

  deleted: boolean;
}
