export function getRequestUrl(): URL {
    if (process.env.BASE_URL) {
        return new URL(process.env.BASE_URL + "");
    }

    const requestUrl = new URL(window.location.origin);
    requestUrl.hostname = "pay." + requestUrl.hostname;
    return requestUrl;
}
