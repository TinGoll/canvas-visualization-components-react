import { PanelType } from "./app.types";
import { SampleShirt } from "./saample-shirt.interface";
import { Work } from "./work.interface";

export interface SamplePanel {

  id: number;

  createdAt: Date;

  updatedAt: Date;

  name: string;

  panelType: PanelType;

  /** ссылка на схему */

  drawing: string;

  /** Отступ для рубашки */

  figoreaSize: number;

  /** Шаблон цвета */
  shirt: SampleShirt;

  deleted: boolean;

  works: Work[];
}