export class InfoMessage {
    public readonly type = "sign-up:info";
}

export class RequestFormMessage {
    public readonly type = "sign-up:request-form";
}

export class RequestMessage {
    public readonly type = "sign-up:request";

    constructor(public readonly phone: string) {
        this.phone = this.phone.replace(/\D/g, '');
    }
}

export class ConfirmFormMessage {
    public readonly type = "sign-up:confirm-form";

    constructor(public readonly phone: string) {
    }
}

export class ConfirmMessage {
    public readonly type = "sign-up:confirm";

    constructor(public readonly phone: string, public readonly token: string) {
    }
}

export class CompleteMessage {
    public readonly type = "sign-up:complete";
    constructor(public readonly access: string, public readonly refresh: string) {
    }
}

export class AgreementMessage {
    public readonly type = "sign-up:agreement"
}

export class ResendMessage {
    public readonly type = "sign-up:resend";
    public readonly time: string = new Date().toISOString();
    constructor(public readonly phone: string) {
    }
}

export type Message =
    InfoMessage |
    RequestFormMessage |
    RequestMessage |
    ConfirmFormMessage |
    ConfirmMessage |
    CompleteMessage |
    ResendMessage |
    AgreementMessage
;
