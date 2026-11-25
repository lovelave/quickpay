import * as React from "react";
import * as Chat from "./chat-logic";
import { IframePaymentForm } from "./messages/iframe-payment";

export interface Payment {
    // An order is being created or the browser is leaving for Platon.
    busy: boolean;
    pay: (amount: number) => void;
    // Hidden form that posts the order to Platon in the same tab; render it when present.
    form: React.ReactNode;
}

/**
 * Creates a Platon order and sends the browser there in the same tab.
 * Repeated taps are ignored until the page is left; a failure opens the error screen.
 */
export function usePayment(payer: Chat.Payer, debtBefore: number): Payment {
    const dispatch = Chat.useDispatchContext();
    const busyRef = React.useRef(false);
    const [busy, setBusy] = React.useState(false);
    const [order, setOrder] = React.useState<Chat.PaymentForm>();

    // Coming back from Platon with the browser "back" button restores the page from bfcache,
    // still busy: let the borrower pay again.
    React.useEffect(() => {
        const handlePageShow = (e: PageTransitionEvent) => {
            if (!e.persisted) {
                return;
            }
            busyRef.current = false;
            setBusy(false);
            setOrder(undefined);
        };
        window.addEventListener("pageshow", handlePageShow);
        return () => window.removeEventListener("pageshow", handlePageShow);
    }, []);

    const pay = React.useCallback(
        (amount: number) => {
            if (busyRef.current) {
                return;
            }
            busyRef.current = true;
            setBusy(true);

            Chat.rememberPayment(payer, { amount, debtBefore });
            Chat.createOrder(payer, amount)
                .then(setOrder)
                .catch(() => {
                    busyRef.current = false;
                    setBusy(false);
                    dispatch([
                        new Chat.StatePayerAction(payer),
                        new Chat.StateTypeAction("error"),
                    ]);
                });
        },
        [payer, debtBefore, dispatch]
    );

    const form = order && (
        <IframePaymentForm
            action={order.action}
            data={order.data}
            target="_self"
            hidden
        />
    );

    return { busy, pay, form };
}
