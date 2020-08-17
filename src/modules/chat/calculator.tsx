import * as Client from "modules/client";

export class HeaderMessage {
    public readonly type = "calculator:header";
}

export class LoadingMessage {
    public readonly type = "calculator:loading";
}

export class EditLoadingMessage {
    public readonly type = "calculator:edit-loading";
}

export class FormMessage {
    public readonly type = "calculator:form";
    constructor(
        public readonly conditions: Client.Api.Conditions<Required<Client.Api.ConditionsItem>>,
        public readonly sent?: true
    ) {
    }
}

export class MenuMessage {
    public readonly type = "calculator:menu";
}

export class EditMenuMessage {
    public readonly type = "calculator:edit-menu";
}

export class FormSubmitMessage {
    public readonly type = "calculator:form-submit";
}

export type Message =
    FormMessage |
    LoadingMessage |
    HeaderMessage |
    MenuMessage |
    EditLoadingMessage |
    EditMenuMessage |
    FormSubmitMessage;
