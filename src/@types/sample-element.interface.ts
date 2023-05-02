import { ComponentDefaultData, ComponentKey, ElementSampleBody } from "./app.types";

export interface SampleElement {
  id: number;

  /** Дата создания */
  createdAt: string;

  /** Дата изменения */
  updatedAt: string;

  /** Название сущности */
  name: string;
  /** Индекст для сортировки */
  index: number;

  /**
   * Поле, содержит только названия компонентов.
   * Наличие ключа компонента в этом поле, говорит о том, что
   * компонент присутвует в данном элементе,
   * однако, может быть "выключен" с помощью переопределения.
   */
  components: ComponentKey[];

  /**
   * Поле состоит из массива ключей компонента и данных компонента по умолчанию.
   * Пустой объект в данном случае, обозначает, что компонент не модифицируется
   * null - компонент выключен, для данного элемента
   */
  default: Array<ComponentDefaultData>;

  body: ElementSampleBody[];

  /** Отметка об удалении */
  deleted: boolean;
}
