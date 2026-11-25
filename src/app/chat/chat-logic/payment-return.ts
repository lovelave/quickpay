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
    phone?: string;
}

export function getPaymentReturnUrls(): { goodUrl: string; badUrl: string } {
    const url = new URL(window.location.pathname, window.location.origin);
    url.searchParams.set(resultParam, "success");
    const goodUrl = url.toString();
    url.searchParams.set(resultParam, "fail");
    return { goodUrl, badUrl: url.toString() };
}

// The phone is never put into the return URL. The phone flow keeps it in sessionStorage,
// which belongs to the browser tab and is cleared when the tab is closed.
export function rememberPayment(payer: Payer, payment: StartedPayment): void {
    const value: StoredPayment = {
        ...payment,
        phone: "phone" in payer ? payer.phone : undefined,
    };
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

    const stored = readStoredPayment();
    const linkPayer = getLinkPayer(url.pathname);
    const payer: Payer | undefined =
        linkPayer ?? (stored?.phone ? { phone: stored.phone } : undefined);
    const payment: StartedPayment | undefined = stored && {
        amount: stored.amount,
        debtBefore: stored.debtBefore,
    };
    return { result, payer, payment };
}
