import * as React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import * as Api from "./api";

const cookieName = "bobra.client";

// region State
export type GuestState = {
    type: "guest",
    user: undefined,
};
export type UserState = {
    type: "user",
    user: Api.User,
    request: Api.Credit.Request,
};
export type TokenState = {
    type: "token",
    user: string,
};

export type State = GuestState | TokenState | UserState;
export const State = (): State => {
    const token = Cookies.get(cookieName);
    if ("string" === typeof token) {
        return {user: token, type: "token",};
    }
    return GuestState;
};
export const GuestState: GuestState = Object.freeze({user: undefined, type: "guest",});

// endregion

export class AuthAction {
    public readonly type = "auth";

    constructor(public readonly state: State) {
    }
}

export class RefreshAction {
    public readonly type = "refresh";
}

export class LogoutAction {
    public readonly type = "logout";
}

export type Action = AuthAction | RefreshAction | LogoutAction;
export type Dispatch = React.Dispatch<Action>;

export const Reducer: React.Reducer<State, Action> = (prevState: State, action): State => {
    switch (action.type) {
        case "auth":
            if ("string" === typeof action.state.user) {
                Cookies.set(cookieName, action.state.user, {
                    expires: 1,
                });
            }
            return action.state;
        case "refresh":
            if ("object" !== typeof prevState.user) {
                return prevState;
            }
            return {user: prevState.user.token, type: "token",};
        case "logout":
            Cookies.remove(cookieName);
            return GuestState;
    }
};

const isWait = (user: State["user"]): user is string => "string" === typeof user;

export function useEffect({user}: State, api: Api.Instance, dispatch: (action: Action) => void) {
    const deps = [user, api, dispatch];

    React.useEffect(() => {
        if (!isWait(user)) {
            return;
        }
        const cancelToken = axios.CancelToken.source();

        api
            .with({cancelToken: cancelToken.token})
            .guest
            .getState(user)
            .then((newState) => {
                if (newState === undefined) {
                    Cookies.remove(cookieName);
                }
                dispatch(new AuthAction(newState ? {...newState, type: "user",} : GuestState))
            });

        return () => cancelToken.cancel();
    }, deps);
}
