import { SplicingAngle } from "./app.types";
import { Work } from "./work.interface";

export interface SampleProfile {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  angle: SplicingAngle;
  /** Толщина профиля */
  depth: number;
  /** Толщина паза */
  grooveThickness: number;
  /** Глубина паза */
  grooveDepth: number;
  /** Размер фаски */
  chamferSize: number;
  /** Размер шипа */
  tenonSize: number;
  /** Толщина нижней полки */
  bottomShelfThickness: number;
  /** Проверить работу массива */
  widths: number[];
  /** Ссылка на схему. */
  drawing: string;

  /** Отметка об удалении */
  deleted: boolean;
  works: Work[];
}
