import * as React from "react";
import * as Chat from "modules/chat";
import * as Client from "modules/client";

import * as State from "./state";

export class ProviderProps implements ProviderProps {
    public static create(state: Client.State): ProviderProps {
        return new ProviderProps(state.api, ProviderProps.getStatus(state));
    }

    private static getStatus(
        {user}: { user: Client.State["user"] }
    ): Chat.ClientStatus {
        if (user === undefined) {
            return null;
        }
        if ("string" === typeof user) {
            return undefined;
        }
        return user.status;
    }

    private constructor(public api: Client.Api.Instance, public readonly status: Chat.ClientStatus) {
    }
}

export const Provider: React.FC<ProviderProps> = ({status, api}) => {
    const [state, dispatch] = Chat.useReducer(status, api);

    return (
        <Chat.DispatchContext.Provider value={dispatch}>
            {state.messages.map((value, key) => (
                <State.Message value={value} key={value.type + key} i={key}/>
            ))}
        </Chat.DispatchContext.Provider>
    );
};
Provider.displayName = "Chat.Provider";

export default Client.withState(Provider, ProviderProps.create);
