import { Work } from "./work.interface";

export interface Sector {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    orderBy: number;
    deleted: boolean;

    works: Work[];
}