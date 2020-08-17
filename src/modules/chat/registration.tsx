import * as Client from "modules/client";

export class WelcomeMessage {
    public readonly type = "reg:welcome";
}

export class IntroMessage {
    public readonly type = "reg:intro";
}

export class ValidateMessage {
    public readonly type = "reg:validate";
}

export class FormMessage<S extends Client.Api.DataAttributeSchema = Client.Api.DataAttributeSchema> {
    public readonly type = "reg:form";

    constructor(
        public readonly name: string,
        public readonly text: string,
        public readonly value: S["default"],
        public readonly schema: S,
        public readonly hasError?: boolean
    ) {
    }
}

export class FormSubmitMessage {
    public readonly type = "reg:form-submit";

    constructor(
        public attribute: string,
        public value: any
    ) {
    }
}

export class CompleteMessage {
    public readonly type = "reg:complete";

    constructor(
        public readonly schema: Client.Api.JSONSchemaObject,
        public readonly values: { [k: string]: string | number }
    ) {
    }
}

export class CompleteFormMessage {
    public readonly type = "reg:complete-form";
}

export class CompleteSubmitMessage {
    public readonly type = "reg:complete-submit";
}

export type Message = WelcomeMessage
    | ValidateMessage
    | FormMessage
    | FormSubmitMessage
    | CompleteMessage
    | CompleteSubmitMessage
    | IntroMessage
    | CompleteFormMessage;
