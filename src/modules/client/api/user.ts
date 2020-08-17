export type UserStatus = "registration" | "pending" | "card" | "agreement" | "dashboard" | "bankId" | "password";

export interface User {
    id: number;
    phone: number;

    status: UserStatus;
    token: string;

    email?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
}
