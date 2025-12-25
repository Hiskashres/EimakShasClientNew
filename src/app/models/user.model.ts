import { UserMasechta } from "./user-masechta";

export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    phone?: string;
    // passwordHash?: string
    dafimAmount: number;
    dafimCompleted: number;
    dafimNotCompleted: number;
    percentageCompleted: number;
    dafPerDay: boolean;
    hasText: boolean;
    // isAdmin: boolean;
    chavrisaId?: number;
    chavrisaName?: string;
    masechtasAssigned?: UserMasechta[];
}
