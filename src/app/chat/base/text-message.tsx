import * as React from "react";
import * as Chat from "../reducer";
import * as Base from "../base";

export const TextMessage: React.FC<{value: Chat.TextMessage}> = ({value}) => {
    return (
        <Base.WrapMessage source={value.author} at={value.time ?? undefined}>
            {typeof value.content === "string"
                ? <p>{value.content}</p>
                : value.content.map((e, i) => <p key={i}>{e}</p>)}
        </Base.WrapMessage>
    )
}
