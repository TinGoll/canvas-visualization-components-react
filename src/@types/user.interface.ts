type UserRoles = "Админ" | "Гость";

export interface IUser<T extends object = object> {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  middleName: string;
  deleted: boolean;
  personRoles: string[];
  userRoles: UserRoles[];
  login: string;
  status: string;
  settings?: T;
}
