import { AxiosInstance } from "axios";
import {
    DataAttributeRecord,
    DataAttributeValue,
    DataValidationResult,
    JSONSchemaObject
} from "./data";
import * as Payment from "./payment";
import * as Agreement from "./agreement";
import * as Credit from "./credit";
import * as Promocode from "./promocode";

export class UserApi {
    constructor(protected readonly endpoint: AxiosInstance) {
    }

    public readonly credit = Credit.Api(this.endpoint);
    public readonly agreement = Agreement.Api(this.endpoint);
    public readonly payment = Payment.Api(this.endpoint);
    public readonly promocode = Promocode.Api(this.endpoint);
    public readonly data = {
        get: async (): Promise<{
            values: { [k: string]: string | number },
            schema: JSONSchemaObject;
        }> => {
            const {data} = await this.endpoint.get("/v2/data/attribute");
            return data;
        },
        patch: async (update: { [k: string]: DataAttributeValue }): Promise<DataValidationResult> => {
            const result = await this.endpoint.patch("/v2/data", {
                Data: update
            });
            return result.data;
        },
        attribute: async (name: string): Promise<DataAttributeRecord<any>> => {
            const {data} = await this.endpoint.get<DataAttributeRecord<any>>("/v2/data/attribute", {
                params: {name,},
            });
            return data;
        },
        validate: async (limit?: number): Promise<DataValidationResult> => {
            const {data} = await this.endpoint.get("/v2/data/validate", {params: {limit,}});
            return data;
        },
        complete: async (): Promise<any> => {
            await this.endpoint.post("/v2/complete")
        },
    } as const;
}
