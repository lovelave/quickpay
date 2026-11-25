import { Payer } from "../chat/chat-logic/payer";
import { getBaseUrl } from "./get-base-url";

// Sign-in page of the main site. Prolongation documents are signed in the personal area there.
// The site prefills the phone from the `phone` parameter. Opened by a personal payment link,
// quickpay doesn't know the phone, so the borrower enters it on the site.
export function getSigninUrl(payer: Payer): string {
    const url = getBaseUrl();
    url.pathname = "/signin";
    if ("phone" in payer) {
        url.searchParams.set("phone", payer.phone);
    }
    return url.toString();
}
