import * as React from "react";
import * as Chat from "app/chat/reducer";
import * as Client from "modules/client";
import { LabelMessage } from "./label-message";
import { ControlMessage } from "./control-message";
import { Control } from "./control";
import { ButtonControlMessage } from "./button-control-message";
import {formatDate} from "modules/utils/formatDate";

export interface MessageProps<TValue = any> {
    onSubmit: (attribute: string, value: TValue) => Chat.Action;
    attribute: Client.Api.DataAttributeRecord<any>;
    label: string;
}

export const Message: React.FC<MessageProps> = ({ onSubmit, attribute, label }) => {
    const dispatch = Chat.useDispatchContext();
    const [value, setValue] = React.useState<string>(attribute.value || attribute.schema.default || "");
    const isEnum = ("oneOf" in attribute.schema);
    const handleSubmit = React.useCallback((e: React.FormEvent | Event) => {
        e.preventDefault();
        const response = isEnum
            ? attribute.schema.oneOf.find(({ const: v }: any) => v === value).title
            : value;
        const serverValue = (attribute.schema.format==='date')
            ? formatDate(value)
            : value;
        dispatch([
            new Chat.ReplaceAction([
                new Chat.TextMessage(label, "bot"),
                new Chat.TextMessage(response, "user"),
            ]),
            onSubmit(attribute.name, serverValue),
        ]);
    }, [attribute, value, dispatch, onSubmit]);
    React.useEffect(() => {
        if (!isEnum
            || !attribute.schema.oneOf.some(({ const: v }: any) => v === value)
            || attribute.schema.oneOf.length === 2
        ) {
            return;
        }
        handleSubmit(new Event("change"));
    }, [isEnum, value]);
    const ControlMessageComponent = isEnum ? ControlMessage : ButtonControlMessage;
    const id = `data-${attribute.name}`;
    return (
        <form onSubmit={handleSubmit}>
            <LabelMessage id={id}>{label}</LabelMessage>
            <ControlMessageComponent>
                <Control
                    id={id}
                    attribute={attribute.name}
                    schema={attribute.schema}
                    value={value}
                    onChange={setValue}
                />
            </ControlMessageComponent>
        </form>
    )
};
