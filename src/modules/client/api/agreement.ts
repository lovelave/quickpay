import {AxiosError, AxiosInstance} from "axios";

export const Api = (endpoint: AxiosInstance) => {
    return {
        get: async (): Promise<string> => {
            return endpoint.get<{ url: string }>(
                "/v2/agreement"
            ).then(({data: {url}}) => url);
        },
        refuse: async(): Promise<void> => {
            return endpoint.post("/v2/agreement/refuse").then(() => undefined);
        },
        sign: async (token: string): Promise<string | boolean> => {
            const response = await endpoint.post<{ message?: string, errors: [{details: string}] }>(
                "/v2/agreement",
                {
                    Agreement: {token,},
                },
                {
                    validateStatus: (status) => [202, 429, 400].includes(status),
                }
            );
            return (response.status === 202)
                || (response.data.errors[0].details)
                || "Неизвестная ошибка"
        },
        send: async (): Promise<string | true> => {
            return endpoint.put<{}>(
                "/v2/agreement/send",
            )
                .then(() => true)
                .catch((error: AxiosError) => error?.response?.data.message
                    ?? Promise.reject(error)
                );
        },
    } as const;
}
