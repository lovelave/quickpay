import * as React from "react";
import axios from "axios";

import { Instance } from "./instance";
import { User } from "./user";

export interface State {
    api: Instance;
    offline?: boolean;
}

export function State(): State {
    let baseURL = (process.env.BASE_URL  || undefined);
    const endpoint = axios.create({ headers: {}, baseURL });
    const id = endpoint.interceptors.response.use(undefined, (error) => {
        endpoint.interceptors.response.eject(id);

        if (error.config && error.response && error.response.status === 404
            && !('baseURL' in error.config) && !baseURL
        ) {
            endpoint.defaults.baseURL = baseURL = "https://lovilave.com.ua/";
            return endpoint.request(error.config);
        }

        return Promise.reject(error);
    });
    return {
        api: new Instance(endpoint),
    };
}

export const DefaultState = Object.freeze<State>({ api: new Instance(axios), });

export function useEffect(
    { api }: State,
    auth: User | string | undefined
): void {
    // todo: add 401 interceptor
    React.useEffect(() => {
        if (auth === undefined) {
            delete api.endpoint.defaults.headers.Authorization;
        }
        if ("string" === typeof auth) {
            api.endpoint.defaults.headers.Authorization = `Bearer ${auth}`;
        }
    }, [auth, api]);

    React.useEffect(() => {
        const interceptorId = api.endpoint.interceptors.response.use((response) => {
            return response;
        }, (error: Error) => {
            if (error.message === "Network Error") {
                // todo; handle API offline
            }
            return Promise.reject(error);
        });
        return () => api.endpoint.interceptors.response.eject(interceptorId);
    }, [api]);
}
