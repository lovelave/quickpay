import {AxiosInstance} from "axios";

export const Api = (endpoint: AxiosInstance) => {
    return {
        get: async (value: string): Promise<number | undefined> => {
            return endpoint.get<{ discount: number, }>(
                "/v2/promocode", {params: {value: value}}
            )
                .then(({data: {discount}}) => discount)
                .catch((error) => {
                    if (error.response && error.response.status === 404) {
                        return undefined;
                    } else {
                        throw error;
                    }
                });
        },
    } as const;
}
