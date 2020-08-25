import * as React from "react";
import {useIsMobile} from "../../../utils/use-is-mobile";

export type IframePaymentProps = Omit<IframePaymentFormProps, "target"> & {
    onComplete: (e: Event) => void;
}

type IframePaymentFormProps = Omit<React.HTMLProps<HTMLFormElement>, "data"> & {
    action: string;
    target: string | "_blank";
    data: Array<[string, string]>;
}

const IframePaymentForm: React.FC<IframePaymentFormProps> = ({data, ...props}) => {
    const ref = React.useRef<HTMLFormElement>(null);

    React.useEffect(() => {
        if (!ref.current || props.target === "_blank") {
            return;
        }
        ref.current.submit();
    }, [ref.current, props.target]);

    return (
        <form method="post" {...props} ref={ref}>
            {data.map(([k, v]) => (
                <input type="hidden" name={k} key={k} value={v}/>
            ))}
            {props.children}
        </form>
    )
};

const iframeName = "chat-card-platon";

export const IframePayment: React.FC<IframePaymentProps> =
    ({onComplete, children, ...props}) => {

        React.useEffect(() => {
            window.addEventListener("iframe.complete", onComplete);
            return () => window.removeEventListener("iframe.complete", onComplete);
        }, [onComplete]);

        if (useIsMobile()) {
            return <IframePaymentForm {...props} target="_blank">
                {children}
            </IframePaymentForm>
        }

        return (
            <>
                <IframePaymentForm {...props} target={iframeName}>
                    <iframe id={iframeName} name={iframeName}/>
                    {children}
                </IframePaymentForm>
            </>
        );
    };
