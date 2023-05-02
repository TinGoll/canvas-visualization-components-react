import { Work } from "./work.interface";

export interface SampleShirt {
  id: number;

  name: string;

  /** Толщина рубашки */

  depthOverlay: number;

  /** Припуск для расчета рубашки */

  indent: number;

  /** Отступ для рубашки */

  figoreaSize: number;

  deleted: boolean;

  works: Work[];
}
