import { getBaseUrl } from "../../utils/get-base-url";
import { appendPayerParam, Payer } from "./payer";
import { getPaymentReturnUrls } from "./payment-return";

export interface PaymentForm {
    action: string;
    data: Array<[string, string]>;
}

const orderTimeout = 20000;

// Creates a Platon repayment order. Platon sends the browser back to the current page with the result.
export async function createOrder(
    payer: Payer,
    amount: number
): Promise<PaymentForm> {
    const requestUrl = getBaseUrl();
    requestUrl.pathname = "v3/payment/platon/order/repayment";
    appendPayerParam(requestUrl, payer, "phone");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), orderTimeout);
    try {
        const response = await fetch(requestUrl.toString(), {
            signal: controller.signal,
            headers: { "Content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                Order: { ...getPaymentReturnUrls(payer), amount },
            }),
        });
        if (!response.ok) {
            throw new Error(`Order request failed: ${response.status}`);
        }
        const { action, data } = await response.json();
        if (typeof action !== "string" || !data || typeof data !== "object") {
            throw new Error("Malformed order response");
        }
        return {
            action,
            data: Object.entries(data).map(([k, v]) => [k, String(v)]),
        };
    } finally {
        clearTimeout(timeout);
    }
}
