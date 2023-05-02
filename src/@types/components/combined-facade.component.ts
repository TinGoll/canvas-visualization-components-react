import { Geometry } from "../app.types";
import { FacadeComponentTypes } from "./facade-component";
import { WorkComponentTypes } from "./works.component";

export declare module CombinedFacadeComponentTypes {
  //Тип расчета. До верхней границы профиля, до нижней границы и до середины.
  type CalculationType = "from top border" | "from bottom border" | "from middle";

  // Расстояние до профиля.
  interface TransverseProfileProps {
    profileDistance?: number;
  }

  /** Балюстрада */
  interface Baluster {
    geometry: Geometry;
    name: string;
    material?: string;
    type: "Балюстрада";
    index?: number;
  }

  interface CombinedFacadeData {
    splicingAngle?: "45°" | "90°" | null;

    material?: string;

    calculationType: CalculationType;

    panels?: Array<FacadeComponentTypes.Panel | Baluster>;
    shirts?: Array<FacadeComponentTypes.Shirt | null>;

    profiles?: [
      FacadeComponentTypes.Profile,
      FacadeComponentTypes.Profile,
      FacadeComponentTypes.Profile,
      FacadeComponentTypes.Profile
    ];

    transverseProfile?: Array<FacadeComponentTypes.Profile & TransverseProfileProps>;

    distances?: number[];

    overlayElements?: Array<FacadeComponentTypes.OverlayElement | null>;

    works?: WorkComponentTypes.Work[];
    /** Тип элемента */
    type: "Комбинированный фасад";

    balusterSize?: number;
  }
}

export interface CombinedFacadeComponent {
  data: CombinedFacadeComponentTypes.CombinedFacadeData;
}
