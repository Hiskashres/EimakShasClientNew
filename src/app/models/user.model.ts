import { UserMasechta } from "./user-masechta";
import { UserUmid } from "./user-umid.model";

export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    phone?: string;
    passwordHash?: string
    dafimAmount: number;
    dafimFinished: number;
    percentageFinished: number;
    dafPerDay: boolean;
    hasText: boolean;
    isAdmin: boolean;
    masechtasAssigned?: UserMasechta[];
}
