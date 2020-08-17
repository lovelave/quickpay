import * as Credit from "./credit";
import { User } from "./user";
import { Conditions } from "./conditions";
import { AxiosInstance } from "axios";
import { State } from "./state";

export class GuestApi {
    constructor(protected readonly endpoint: AxiosInstance) {
    }

    public readonly getState = (token: string): Promise<State | undefined> => {
        return this.endpoint.get<{ user: Omit<User, "token">, request: Credit.Request }>(
            "/v2/state",
            {
                validateStatus: (status) => (status === 200) || (status === 401),
                headers: {Authorization: `Bearer ${token}`},
            }
        )
            .then((response) => (response.status === 200) ? {
                user: {
                    ...response.data.user,
                    token,
                },
                request: response.data.request,
            } : undefined);
    };

    public readonly getConditions = (): Promise<Conditions> => {
        return this.endpoint.get<Conditions>("/v2/conditions")
            .then(({data: {term, amount, interestRate}}) => Object.freeze({term, amount, interestRate}));
    };

    public readonly sign = {
        request: async (phone: string): Promise<boolean> => {
            const response = await this.endpoint.post<void>("/v2/sign/request", {Request: {phone}}, {
                validateStatus: (status: number) => [403, 423, 200].includes(status),
            });
            return response.status !== 403;
        },
        confirm: async (phone: string, token: string): Promise<{ id: number, access: string, refresh: string }> => {
            const response = await this.endpoint.post("/v2/sign/confirm", {Confirm: {phone, token,}}, {
                validateStatus: (status: number) => [200, 201,].includes(status),
            });
            return response.data;
        },
    } as const;
}
