// Identifies the borrower in API requests: by the phone entered in the chat
// or by the code of a personal payment link.
export type Payer = { phone: string } | { code: string };

// The phone goes in `id` for v3/quick-pay and in `phone` for payment orders,
// the code goes in `code` for both.
export function appendPayerParam(
    url: URL,
    payer: Payer,
    phoneParam: "id" | "phone"
): void {
    if ("code" in payer) {
        url.searchParams.append("code", payer.code);
    } else {
        url.searchParams.append(phoneParam, payer.phone);
    }
}

// Personal payment links open the site at /pay/{code}.
// Only the backend can check the code, so it is not validated beyond the format.
const linkPathPattern = /^\/pay\/([0-9a-zA-Z]{3,12})\/?$/;

export function getLinkPayer(pathname: string): Payer | undefined {
    const code = linkPathPattern.exec(pathname)?.[1];
    return code === undefined ? undefined : { code };
}
