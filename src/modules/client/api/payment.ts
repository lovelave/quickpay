import {AxiosInstance} from "axios";

export type Order = {
    action: string;
    data: Array<[string, string]>;
}
export type OrderOptions =
    { type: "card" }
    | { type: "prolongation", card?: string }
    | { type: "repayment", card?: string, amount: number, };
export type OrderRequest = (options: OrderOptions) => Promise<Order>;

export type Service = "platon" | "test";

export type Card = {
    uuid: string,
    mask: string;
    service: Service;
    state: "verified" | "verifying" | "active";
    created_at: string;
    bank: string;
}
export type CardListRequest = () => Promise<Array<Card>>;
export type CardVerifyRequest = (uuid: string, amount: number) => Promise<string | undefined>;
export type CardVerifyResponse = {
    message: string | undefined,
    status: number | 201 | 423 | 424,
};
export type Api = {
    order: OrderRequest;
    cards: CardListRequest;
    verify: CardVerifyRequest;
}

export const Api = (endpoint: AxiosInstance) => {
    return {
        order: async (options: OrderOptions): Promise<Order> => {
            const Order: { [k: string]: number | string } = {goodUrl: window.location.origin + "/iframe.html"};
            switch (options.type) {
                case "repayment":
                    Order.amount = options.amount;
                case "prolongation":
                    if ("string" === typeof options.card) {
                        Order.card = options.card;
                    }
                    break;
            }
            return endpoint.post<{
                action: string,
                data: { [k: string]: string, },
            }>(
                "/v3/payment/platon/order/" + options.type,
                {Order},
            )
                .then(({data: {action, data}}) => ({
                    action,
                    data: Object.entries(data) as Array<[string, string]>,
                }));
        },
        cards: async (): Promise<Array<Card>> => {
            return endpoint.get<{
                [k in Card["state"]]: Array<Card> | Card;
            }>(
                "/v3/payment/cards",
            ).then(({data}): Array<Card> => {
                return Object.entries(data)
                    .map(([state, cards]): [Card["state"], Array<Card>] => {
                        return [state as Card["state"], Array.isArray(cards) ? cards : [cards]];
                    })
                    .reduce<Array<Card>>((arr, [state, cards]) => {
                        cards.forEach((card) => arr.push({...card, state}))
                        return arr;
                    }, []);
            })
        },
        verify: async (uuid: string, amount: number): Promise<CardVerifyResponse> => {
            return endpoint.patch<{ message?: string }>("/v3/payment/verification", {
                Confirm: {amount},
            }, {
                params: {uuid},
                validateStatus: (status) => [423, 424, 201].includes(status),
            }).then(({data, status}) => ({
                message: data.message,
                status,
            }));
        },
        delete: async (uuid: string): Promise<void> => {
            return endpoint.delete("/v3/payment/verification", {
                params: { uuid },
            });
        }
    } as const;
};
