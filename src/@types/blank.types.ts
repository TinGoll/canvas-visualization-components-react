import { Geometry } from "./app.types";

declare module BlankTypes {
  type Root = Sector[];

  interface Sector {
    sectorName: string;
    blanks: Blank[];
  }

  interface Blank {
    index: number;
    works: Work[];
  }

  interface Work {
    name: string;
    documents: Documents;
  }

  interface Documents {
    [key: string | number]: N1[];
  }

  interface N1 {
    name: string;
    type: string;
    geometry: Geometry;
    workData: WorkData;
  }

  interface WorkData {
    name: string;
    cost?: number;
    price?: number;
    workId?: number;
    salaryUnit?: string;
    unit?: string;
    value?: number;
  }
}

export default BlankTypes;
