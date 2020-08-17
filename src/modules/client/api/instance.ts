import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from "axios";

import { GuestApi } from "./guest-api";
import { UserApi } from "./user-api";

export class Instance {
    public readonly guest: GuestApi = new GuestApi(this.endpoint);
    public readonly user: UserApi = new UserApi(this.endpoint);

    constructor(public readonly endpoint: AxiosInstance) {
    }

    public with(config: AxiosRequestConfig): this {
        const interceptorId = this.endpoint.interceptors.request.use((request) => {
            this.endpoint.interceptors.request.eject(interceptorId);
            return { ...request, ...config };
        });
        return this;
    }

    public after<T = any>(callback: (response: AxiosResponse<T>) => void): this {
        const interceptorId = this.endpoint.interceptors.response.use((response) => {
            this.endpoint.interceptors.response.eject(interceptorId);
            callback(response);
            return response;
        });
        return this;
    }

    public cancellable(): () => void {
        let cancelToken: CancelTokenSource | undefined = axios.CancelToken.source();
        this.with({
            cancelToken: cancelToken.token,
        }).after(() => cancelToken = undefined);
        return () => cancelToken && cancelToken.cancel();
    }
}
