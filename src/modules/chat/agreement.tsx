import * as Credit from "../client/api/credit";
import * as Client from "../client";

export class AgreementWelcomeMessage {
    public readonly type = "agreement:welcome";
}

export class AgreementLoadMessage {
    public readonly type = "agreement:load";
}

export class AgreementInfoMessage {
    public readonly type = "agreement:info";
    public constructor(
        public readonly amount: Credit.Request["amount"],
        public readonly term: Credit.Request["term"],
        public readonly initReturnDate: Credit.Request["initReturnDate"],
        public readonly initDebtSum: Credit.Request["initDebtSum"],
        public readonly interest: Credit.Rates["interest"],
        public readonly isEmailEnabled: boolean = false,
    ) {
    }
}

export class AgreementEmailLoadMessage {
    public readonly type = "agreement:email-load";
}

export class AgreementConfirmEmailFormMessage<S extends Client.Api.DataAttributeRecord<any> = Client.Api.DataAttributeRecord<any>> {
    public readonly type = "agreement:confirm-email-form";
    constructor(
        public readonly record: S,
        public readonly error?: string
    ) {
    }
}

export class AgreementConfirmEmailSubmitMessage<S extends Client.Api.DataAttributeRecord<any> = Client.Api.DataAttributeRecord<any>> {
    public readonly type = "agreement:confirm-email-submit";
    public constructor(
        public readonly record: S,
    ) {
    }
}

export class AgreementSendMessage {
    public readonly type = "agreement:send";
}

export class AgreementOpenMessage {
    public readonly type = "agreement:open";
    public constructor(
        public readonly url: string
    ) {
    }
}

export class AgreementConfirmRequestMessage {
    public readonly type = "agreement:confirm-request";
}

export class AgreementConfirmFormMessage {
    public readonly type = "agreement:confirm-form";
}

export class AgreementConfirmSubmitMessage {
    public readonly type = "agreement:confirm-submit";
    public constructor(
        public readonly code: string,
    ) {
    }
}

export class AgreementRefuseInfoMessage {
    public readonly type = "agreement:refuse-info";
}

export class AgreementRefuseFormMessage {
    public readonly type = "agreement:refuse-form";
}

export class AgreementRefuseSendMessage {
    public readonly type = "agreement:refuse-send";
}

export class AgreementExitMessage {
    public readonly type = "agreement:exit";
}

export class AgreementResendMessage {
    public readonly type = "agreement:resend";
    public readonly time: string = new Date().toISOString();
}

export class AgreementCompleteMessage {
    public readonly type = "agreement:complete";
}

export type Message =
    AgreementWelcomeMessage |
    AgreementLoadMessage |
    AgreementInfoMessage |
    AgreementOpenMessage |
    AgreementConfirmRequestMessage |
    AgreementConfirmSubmitMessage |
    AgreementConfirmFormMessage |
    AgreementRefuseInfoMessage |
    AgreementRefuseFormMessage |
    AgreementResendMessage |
    AgreementCompleteMessage |
    AgreementSendMessage |
    AgreementRefuseSendMessage |
    AgreementExitMessage |
    AgreementEmailLoadMessage |
    AgreementConfirmEmailFormMessage |
    AgreementConfirmEmailSubmitMessage;
