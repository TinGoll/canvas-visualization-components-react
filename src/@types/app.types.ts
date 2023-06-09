/******************************************************* */
// Цвет.

/** Тип цвета */
export type ColorType = "Эмаль" | "Морилка";
/** Тип конвентера */
export type TypeColorConverter = "Акрил" | "Полиуретан";
/** Глянцевость конвентера */
export type ColorConverterGloss = "20%" | "40%" | "70%";
/** Прозрачность конвернета */
export type ConverterTransparency = "Прозрачный" | "Белый";

//Патина
/** Тип патины */
export type PatinaType = "Однокомпонентная" | "Многокомпонентная";

// Лак
/** Тип лака */
export type VarnishType = "Акриловый" | "Полиуретановый";
/** Глянцевость */
export type VarnishGlossiness = "10%" | "20%" | "40%" | "70%" | "90%";

// Материал
/** Тип материала */
export type MaterialType = "Массив твердый" | "Массив мягкий" | "МДФ" | "Полиуретан" | "ЛДСП" | "ДСП";

//Профиль
/** Угол сращивания */
export type SplicingAngle = "90°" | "45°";

/** Еденица измерения */
export type Unit = "м²" | "м.п" | "шт." | "м. куб." | "п.м.п";

export type UserStatus = "fired" | "active";

export type BookDocumentType = "Фасады" | "Лестницы";

export type PanelType = "Филёнка" | "Решётка" | "Витрина";

export interface WorkData {
  // workId: number;
  name?: string;
  price?: number;
  norm?: number;
  unit?: Unit;
  salaryUnit?: Unit;
  data?: any;
  cost: number;
  value: number;
}

export type ArrayWorkData = WorkElementData[];

export type WorkElementData = {
  workId: number;
  data?: WorkData;
};

export interface WorkComponentData {
  workData: ArrayWorkData;
}

/** Данные компонента филёнка */
export interface PanelData {
  panels: Array<Panel>;
}

/** Поле филенка, компонента филёнка */
export interface Panel {
  index: number;
  type: PanelType;
  shirt: Shirt | null;
  geometry: Geometry;
  workData: ArrayWorkData;
}

/** Поле рубашка, поля филёнка, в компоненте филёнка. */
export interface Shirt {
  geometry: Geometry;
  workData: ArrayWorkData;
}
/** Данные компонента профиль */
export interface ProfileData {
  profiles: Array<Profile>;
  workData: ArrayWorkData;
}
/** Профиль */
export interface Profile {
  name: "Левый" | "Верхний" | "Правый" | "Нижний";
  geometry: Geometry;
}

export type DocumentGlossiness =
  | "Глубоко матовый (10%)"
  | "Матовый (20%)"
  | "Лёгкий глянец (40%)"
  | "Глянец (70%)"
  | "Сильный глянец (90%)";

export interface BookResultData {
  amountElements?: number;
  squares?: {
    all: number;
    groups: Array<{
      name: string;
      amount: number;
    }>;
  };
}
export interface DocumentResultData {
  amountElements?: number;
  squares?: {
    all: number;
    groups: Array<{
      name: string;
      amount: number;
    }>;
  };
}

export interface DocumentExtraData {
  extraSetting: string | null;
  isThermalseam: boolean;
  isDrilling: boolean;
  texture: string | null;
}

export interface BookOptions {
  bookId?: number;
  clientId?: number;
  nameFromClient?: string;
  note?: string;
}
export interface DocumentOptions {
  documentType?: BookDocumentType;
  glossiness?: DocumentGlossiness;
  note?: string;
}
export interface ElementOptions {
  name?: string;
  components?: ComponentData[];
}

export interface AssignColorOptions {
  value?: number;
  note?: string;
  data?: object;
  previousName?: string;
  converterId?: number;
}
export interface AssignPatinaOptions {
  value?: number;
  previousName?: string;
  note?: string;
  converterId?: number;
}
export interface AssignVarnishOptions {
  note?: string;
  previousName?: string;
  value?: number;
}
export interface AssignPanelOptions {
  note?: string;
  workData?: WorkComponentData[];
  shirtWorkData?: WorkComponentData[];
  colorId?: number;
  materialId?: number;
}
export interface AssignProfileOptions {
  workData?: WorkComponentData[];
  widths?: number[];
  angle?: SplicingAngle;
  note?: string;
}

export interface Geometry {
  height?: number | null;
  width?: number | null;
  depth?: number | null;
  amount?: number | null;
  square: number;
  cubature: number;
  perimeter: number;
  linearMeters: number;
}

export interface ComponentData<T extends object = object> {
  /** Название компонента */
  componentName: ComponentKey;
  /** Обеъект с полями компонента. */
  data: object | null;
}
const componentKeys = [
  "component_geometry",
  "component_works",
  "component_panel",
  "component_profile",
  "component_facade",
  "component_combined_facade",
  "component_product_profile",
  "component_shield",
  "component_column",
  "component_koromyslo",
  "component_cornice",
  "component_light_bar",
  "component_plinth",
  "component_carved_decor",
  "component_trim_panel",
  "component_pillar",
  "component_CMZ",
  "component_work",
  "component_price",
] as const;
export type ComponentKey = typeof componentKeys[number];

export interface ComponentDefaultData {
  /** Название компонента */
  componentName: ComponentKey;
  /** Обеъект с полями компонента. */
  data: object | null;
}

export interface ElementSampleBody {
  /**
   * Идентификатор (название номенклатуры в списке) номенклатуры.
   * Может иметь массив данные по умолчанию, для сомпонентов
   */
  identifier: string;
  /**
   * Данные для компонентов по умолчанию.
   * Если такой компонент добавлен в список компонентов,
   * то к нему будет применен набор свойств по умолчанию.
   */
  componentData: Array<ComponentDefaultData>;
}
