import * as React from "react";
import { AxiosError, AxiosInstance } from "axios";
import { Dispatch } from "./reducer";
import { ApiResponseAction } from "./action";

export const useEndpointEffect = (instance: AxiosInstance, dispatch: Dispatch): void => {
    React.useEffect(() => {
        const id = instance.interceptors.response.use(
            (response) => {
                dispatch(new ApiResponseAction(response));
                return response;
            },
            (error: AxiosError | Error) => {
                if (("response" in error) && error.response !== undefined) {
                    dispatch(new ApiResponseAction(error.response));
                }
                return Promise.reject(error);
            },
        );
        return () => instance.interceptors.response.eject(id);
    }, [instance, dispatch]);
};
