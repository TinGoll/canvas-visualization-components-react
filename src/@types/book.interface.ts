import { BookDocumentType, BookResultData } from "./app.types";
import { BookState } from "./order.state.enum";
import { BookDocument } from "./document.interface";
import { Status } from "./status.interface";
import { IUser } from "./user.interface";
import { Work } from "./work.interface";
import BlankTypes from "./blank.types";

type OrderGraph = object;

export interface Book {
  id: number;
  /** Дата создания */
  createdAt: Date;
  /** Дата изменения */
  updatedAt: Date;
  /** Отметка об удалении */
  deleted: boolean;
  //Даник решил добавить тип еще и в книгу.
  documentType?: BookDocumentType | null;
  /** Номер / название клиента */
  nameFromClient?: string | null;
  /** Комментарий / примечание */
  note: string;
  /** Штрих код */
  barcode: string;
  /** Результативные данные */
  resultData: BookResultData;
  /** Результативные данные */
  graph?: OrderGraph;
  cost: number;
  /** В заказ копируется все работы. */
  works: Work[];
  /** Состояние заказа */
  state: BookState;
  client: IUser | null;
  author: IUser;
  status: Status;
  /** Документы книги */
  documents: BookDocument[];

  /** Бланки работ для книги. */
  blanks: BlankTypes.Root;
}
