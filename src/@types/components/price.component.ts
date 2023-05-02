import { Unit } from "../app.types";

export declare module PriceComponentTypes {
  interface PriceComponentData {
    price: number;
    unit?: Unit;
    value?: number;
    cost?: number;
  }
}

export interface PriceComponent {
  data: PriceComponentTypes.PriceComponentData;
}
