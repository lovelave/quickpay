import * as React from "react";
import * as Base from "../button";
import * as Client from "modules/client";
import { JSONSchemaEnum } from "../../../../modules/client/api";

export type ControlProps<S extends Client.Api.DataAttributeSchema = Client.Api.DataAttributeSchema> = {
    id: string;
    attribute: string;
    schema: S;
    value: Client.Api.DataAttributeValue<S>;
    onChange: (newValue: Client.Api.DataAttributeValue<S>) => void;
}

export const ButtonControl: React.FC<ControlProps<JSONSchemaEnum>> = (props) => {
    return (
        <div className="btn-container">
            {props.schema.oneOf.map(({ const: value, title }, i) => (
                <Base.Button
                    type="submit"
                    key={i}
                    theme={i === 0 ? "primary" : "secondary"}
                    onClick={(() => props.onChange(value))}
                >
                    {title}
                </Base.Button>
            ))}
        </div>
    );
};
