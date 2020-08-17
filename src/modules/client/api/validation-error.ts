import { AxiosError, AxiosResponse } from "axios";

export type ValidationErrorItem = {
    attribute: string;
    details: string;
}

export type ValidationErrorData = {
    values?: {[k:string]: string};
    errors: Array<ValidationErrorItem>;
}

export type ValidationErrorResponse = AxiosResponse<ValidationErrorData>;

export const isValidationResponse = (response: AxiosResponse): response is ValidationErrorResponse => {
    return (response.status === 400)
        && ("object" === typeof response.data)
        && ("errors" in response.data)
};
