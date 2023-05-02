import { BookDocumentType, DocumentExtraData, DocumentGlossiness, DocumentResultData } from "./app.types";
import { Fields } from "./cammon.types";
import { Color } from "./color.interface";
import { DocumentElement } from "./document-element.interface";
import { Material } from "./material.interface";

import { Panel } from "./panel.interface";
import { Patina } from "./patina.interface";
import { Profile } from "./profile.interface";
import { Varnish } from "./varnish.interface";

export interface BookDocument {
  id: number;
  /** Дата создания */
  createdAt: Date;

  /** Дата изменения */
  updatedAt: Date;

  /** Отметка об удалении */
  deleted: boolean;

  documentType: BookDocumentType;

  /** Глянцевость. */
  glossiness: DocumentGlossiness | null;

  resultData: DocumentResultData;

  extraData: DocumentExtraData;

  /** Комментарий / примечание */
  note: string | null;

  cost: number;

  /** Основной материал документа */
  material: Material | null;

  /** Филёнка документа. */
  panel: Panel;

  /** Модель профиля документа */
  profile: Profile;

  /** Цвет документа */
  color: Color;

  /** Патина документа */
  patina: Patina;

  /** Лак документа */
  varnish: Varnish;

  /** Документы книги */
  elements: DocumentElement[];

  errors?: Fields<BookDocument, string>;
}
