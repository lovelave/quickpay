import * as React from "react";
import * as Chat from "modules/chat";
import * as Base from "app/chat/base";
import { MessageProps } from "./message";

export const TimeoutMessage: React.FC<MessageProps<Chat.TimeoutMessage>> = (props) => {
    const dispatch = Chat.useDispatchContext();
    React.useEffect(() => {
        props.value.value > 0 && setTimeout(
            (() => dispatch(new Chat.ReplaceAction([
                (props.value.value > 1)
                    ?
                        new Chat.TimeoutMessage(props.value.value - 1, props.value.message)
                    :
                        props.value.message
            ], props.value))),
            1000
        )
    }, [props.value.value]);
    return (
        <Base.TimeoutMessage at={props.value.time} value={props.value.value} source={"bot"} />
    )
};
