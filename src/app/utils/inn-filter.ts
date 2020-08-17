import * as Client from "modules/client";

export const innFilter = (schema: Client.Api.JSONSchemaInn) => (value: string): string => {
    value = value.replace(/\D/g, '').substr(0, 10);
    if (schema.max && (schema.max < parseInt(value.padEnd(10, '0'), 10))) {
        return value.substr(0, value.length - 1);
    }
    if (schema.min && (schema.min > parseInt(value.padEnd(10, '9'), 10))) {
        return value.substr(0, value.length - 1);
    }
    return value;
}
