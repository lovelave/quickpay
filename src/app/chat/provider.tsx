import * as React from "react";
import * as Chat from "modules/chat";

import * as State from "./state";

export const Provider: React.FC<{}> = () => {
    const [state, dispatch] = Chat.useReducer();

    return (
        <Chat.DispatchContext.Provider value={dispatch}>
            {state.messages.map((value, key) => (
                <State.Message value={value} key={value.type + key} i={key}/>
            ))}
        </Chat.DispatchContext.Provider>
    );
};
Provider.displayName = "Chat.Provider";
