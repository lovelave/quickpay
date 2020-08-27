import * as React from "react";
import * as Chat from "../chat-logic";
import * as Base from "../base";
import { MessageProps } from "./message";

export const DelayMessage: React.FC<MessageProps<Chat.DelayMessage>> = (props) => {
    const dispatch = Chat.useDispatchContext();
    React.useEffect(() => {
        const id = setTimeout(
            () => dispatch(new Chat.ReplaceAction(props.value.children)),
            props.value.timeout
        )
        return () => clearTimeout(id);
    }, [props.value.children, props.value.timeout]);
    return <Base.LoadMessage />;
};
