import { ComponentKey, ECSComponent } from "../@types/components/component-keys";
import { DocumentElement } from "../@types/document-element.interface";

/**
 * Функция для получения типизированного компонента
 * из сущности. В случае, если компонент не найден, возвращается null
 * @param entity Сущность документа (элемент документа)
 * @param key Ключ компонента
 * @returns Указанный компонент или null;
 */
export const getComponent = <T extends ComponentKey>(entity: DocumentElement, key: T): ECSComponent<T> | null => {
  const cmp = entity?.components?.find((c) => c.componentName === key) || null;
  return cmp as any;
};
