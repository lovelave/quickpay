export type ConditionsItem = {
    min: number;
    max: number;
    value?: number;
    limit?: number;
    step?: number;
}

export type Conditions<I extends ConditionsItem = ConditionsItem> = {
    amount: I;
    term: I;
    interestRate: number;
}
