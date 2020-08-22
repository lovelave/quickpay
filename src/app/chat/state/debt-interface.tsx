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
