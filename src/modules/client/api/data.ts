import { JSONSchema, JSONSchemaType } from "json-schema-typed";

export type JSONSchemaNumber = JSONSchema & {
    readonly type: JSONSchemaType.String;
    default?: number;
};
export type JSONSchemaString = JSONSchema & {
    readonly type: JSONSchemaType.Number;
    default?: string;
};
export type JSONSchemaInn = Omit<JSONSchemaString, "format"> & {
    format: "inn";
    min?: number;
    max?: number;
}
export type JSONSchemaEnumElement = {
    const: number;
    title: string;
}
export type JSONSchemaEnum = Omit<JSONSchema, "oneOf"> & {
    readonly oneOf: Array<JSONSchemaEnumElement>;
}
export type JSONSchemaObject = JSONSchema & {
    readonly type: JSONSchemaType.Object;
    properties: {[k: string]: DataAttributeSchema},
}
export type DataAttributeSchema = JSONSchemaString | JSONSchemaNumber | JSONSchemaEnum | JSONSchemaInn;
export type DataAttributeValue<S extends DataAttributeSchema = DataAttributeSchema> = Exclude<S["default"], undefined>;
export type DataAttributeRecord<S extends DataAttributeSchema> = {
    name: string;
    schema: S;
    value?: S["default"];
}
export type DataValidationError = {
    attribute: DataAttributeRecord<any>,
    text: string;
};
export type DataValidationResult = Array<DataValidationError>;
