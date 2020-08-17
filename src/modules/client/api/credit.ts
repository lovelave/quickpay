import { AxiosInstance } from "axios";

export interface Request {
    id: number,
    applicationId: string,
    number: number,
    amount: number,
    term: number,
    created: string,
    status: Status,
    initDebtSum: number,
    initReturnDate: string,
    rate: Rates,
    defaultRate: Rates,
    gracePeriod: number,
    commissionSum: number,
    dateReturn: string,

    overdue?: number,
    datePaid?: string,
    dateRepaid?: number,
    paid?: number,
    debt?: Debt,
    agreement?: string,
}

export type Debt = {
    body: number,
    interest: number,
    penalty: number,
    total: number,
}

export type Rates = {
    interest: number,
    penalty: number
}

export type Status = 'New' | 'Processing' | 'Reject'
    | 'Accept' | 'Active' | 'Closed' | 'Canceled';

type PatchForm = Partial<{
    amount: number,
    term: number,
    promocode: string,
}>;

export const Api = (endpoint: AxiosInstance) => ({
    history: (): Promise<Request[]> => {
        return endpoint.get<Request[]>("/v2/requests").then(({data}) => data);
    },
    get: (): Promise<Request> => {
        return endpoint.get<Request>("/v2/request").then(({data}) => data);
    },
    patch: (form: PatchForm): Promise<Request> => {
        return endpoint.patch<Request>("/v2/request", {
            Request: form,
        }, {}).then(({data}) => data);
    },
    post: async (form: PatchForm): Promise<Request> => {
        return  endpoint.post("/v2/request", {
            Request: form
        }, {}).then(({data}) => data);
    },
});

