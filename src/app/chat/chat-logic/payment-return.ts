import { getLinkPayer, Payer } from "./payer";

// Platon sends the browser back to the page the payment started from,
// with the result in this query parameter.
const resultParam = "payment";
const storageKey = "quickpay.payment";

export type PaymentResult = "success" | "fail";

// Payment started on this tab, kept for the return from Platon.
export interface StartedPayment {
    amount: number;
    // Debt before the payment: the same debt after a successful payment means it isn't posted yet.
    debtBefore: number;
}

export interface PaymentReturn {
    result: PaymentResult;
    // Unknown when the phone flow comes back without session storage.
    payer?: Payer;
    payment?: StartedPayment;
}

interface StoredPayment extends StartedPayment {
    payer?: Payer;
}

// The page of the payer: /pay/{code} for a link, / for a phone. A phone entered on /pay/{code}
// (expired link) comes back to /, so the dead code in the path is not used for the result.
export function getPaymentReturnUrls(payer: Payer): {
    goodUrl: string;
    badUrl: string;
} {
    const path = "code" in payer ? `/pay/${payer.code}` : "/";
    const url = new URL(path, window.location.origin);
    url.searchParams.set(resultParam, "success");
    const goodUrl = url.toString();
    url.searchParams.set(resultParam, "fail");
    return { goodUrl, badUrl: url.toString() };
}

// The phone is never put into the return URL. The phone flow keeps it in sessionStorage,
// which belongs to the browser tab and is cleared when the tab is closed.
export function rememberPayment(payer: Payer, payment: StartedPayment): void {
    const value: StoredPayment = { ...payment, payer };
    try {
        sessionStorage.setItem(storageKey, JSON.stringify(value));
    } catch {
        // Storage may be unavailable (private mode, disabled storage): the phone flow
        // then comes back to a result screen without the debt.
    }
}

export function forgetPayment(): void {
    try {
        sessionStorage.removeItem(storageKey);
    } catch {
        // Nothing stored.
    }
}

function readStoredPayment(): StoredPayment | undefined {
    try {
        const value = JSON.parse(sessionStorage.getItem(storageKey) ?? "null");
        if (
            value &&
            typeof value.amount === "number" &&
            typeof value.debtBefore === "number"
        ) {
            const payer = value.payer;
            const isPayer =
                typeof payer?.phone === "string" ||
                typeof payer?.code === "string";
            if (!isPayer) {
                delete value.payer;
            }
            return value as StoredPayment;
        }
    } catch {
        // Missing or broken value: nothing to restore.
    }
    return undefined;
}

/**
 * Result of the payment the browser came back with from Platon, or undefined on a regular visit.
 * The parameter is removed from the address bar, so reloading the page doesn't show the result again.
 */
export function takePaymentReturn(): PaymentReturn | undefined {
    const url = new URL(window.location.href);
    const result = url.searchParams.get(resultParam);
    if (result !== "success" && result !== "fail") {
        return undefined;
    }
    url.searchParams.delete(resultParam);
    window.history.replaceState(
        window.history.state,
        "",
        url.pathname + url.search + url.hash
    );

    // The payment of this tab knows its payer; the link code in the path is the fallback
    // for a return without session storage.
    const stored = readStoredPayment();
    const payer: Payer | undefined =
        stored?.payer ?? getLinkPayer(url.pathname);
    const payment: StartedPayment | undefined = stored && {
        amount: stored.amount,
        debtBefore: stored.debtBefore,
    };
    return { result, payer, payment };
}
