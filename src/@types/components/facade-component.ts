import { Geometry } from "../app.types";
import { WorkComponentTypes } from "./works.component";

export declare module FacadeComponentTypes {
  /** Филёнка фасада */
  interface Panel {
    name?: string;
    type: PanelType;
    material?: string;
    geometry?: Geometry;
    index?: number;
  }

  /** Профиль фасада */
  interface Profile {
    name: string;
    type: ProfileType;
    material?: string;
    geometry?: Geometry;
    index?: number;
    parallel?: 0 | 1;
    location?: "left" | "top" | "right" | "bot";
  }
  /** Рубашка фасада */
  interface Shirt {
    name: string;
    type: ShirtType;
    material?: string;
    geometry?: Geometry;
    index?: number;
  }
  /** Накладка фасада */
  interface OverlayElement {
    name: string;
    type: OverlayType;
    geometry?: Geometry;
    material?: string;
    index?: number;
  }
  /** Тип филёнки (имееться ввиду тип панели, может быть решёткой, филёнкой или стеклом.) */
  type PanelType = "Филёнка" | "Решётка" | "Витрина";
  /** Тип Рубашки - накладки на филёнку. Если Тип панели не фелёнка, то этот объект будет null */
  type ShirtType = "Рубашка";
  /** Наклдной элемент, как правило на стекло */
  type OverlayType = "Накладной элемент";
  type ProfileType = "Профиль левый" | "Профиль верхний" | "Профиль правый" | "Профиль нижний" | "Профиль поперечный";

  interface ComponentData {
    /** Филёнка. */
    panel?: Panel | null;
    /** Рубашка филёнки. Если филенка null рубашка автоматически становиться null */
    shirt?: Shirt | null;
    /** Накладка на стекло / филёнку */
    overlayElement?: OverlayElement | null;
    /** Массив профилей. с 0 до 3. 0 - Левый, 1 - верхний, 2 - правый, 3 - нижний. */
    profiles?: [Profile, Profile, Profile, Profile] | null;
    /** Угол сращивания фасада. */
    splicingAngle?: "45°" | "90°" | null;
    /** Массив с работами. */
    panelWorks?: WorkComponentTypes.Work[];
    shirtWorks?: WorkComponentTypes.Work[];
    profileWorks?: WorkComponentTypes.Work[];
    /** Тип элемента */
    type: "Фасад";
    material?: string | null;
  }
}

export interface FacadeComponent {
  data: FacadeComponentTypes.ComponentData;
}
