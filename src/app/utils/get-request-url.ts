export function getRequestUrl(): URL {
    if (process.env.BASE_URL) {
        return new URL(process.env.BASE_URL + "");
    }

    return  new URL(window.location.origin.replace("pay.", ""));
}
