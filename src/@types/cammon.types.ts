export type Fields<T, R extends unknown = boolean> = {
  [K in keyof T]?: (T[K] extends object ? Fields<T[K]> : R) | R;
};
