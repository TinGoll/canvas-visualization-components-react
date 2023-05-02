import { Unit } from "../app.types";

export declare module WorkComponentTypes {
  interface Work<T extends string = string> {
    workId?: number;
    value?: number;
    price?: number;
    cost?: number;
    name: T;
    unit?: Unit;
    salaryUnit?: Unit;
  }

  interface WorkComponentData<T extends string = string> {
    works: Work<T>[];
  }
}

export interface WorksComponent {
  data: WorkComponentTypes.WorkComponentData;

}
