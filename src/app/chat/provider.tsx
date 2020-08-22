import * as React from "react";
import {DispatchContext, useReducer} from "./reducer";

import * as State from "./state";

export const Provider: React.FC<{}> = () => {
    const [state, dispatch] = useReducer();

    return (
        <DispatchContext.Provider value={dispatch}>
            {state.messages.map((value, key) => (
                <State.Message value={value} key={value.type + key} i={key}/>
            ))}
        </DispatchContext.Provider>
    );
};

Provider.displayName = "Chat.Provider";
