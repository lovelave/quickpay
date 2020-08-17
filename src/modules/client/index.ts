import * as React from "react";
import * as Auth from "./auth";
import * as Api from "./api";
import * as Rt from "modules/rt";

export { Api, Auth };

export type State = Auth.State & Api.State;

export function State(): State {
    return Object.freeze({
        ...Api.State(),
        ...Auth.State(),
    });
}

export const StateContext = React.createContext<State>(Object.freeze({
    ...Api.DefaultState,
    ...Auth.GuestState,
}));
StateContext.displayName = "Client.StateContext";

export function useStateContext(): State {
    return React.useContext(StateContext);
}

export function withState<P = {}, SP = {}>(
    component: React.ComponentType<P & SP>,
    mapStateToProps: (state: State, props: P) => SP | false,
    fallback: React.ReactElement | null = null,
): React.ComponentType<P> {
    const componentType: React.ComponentType<P> = (props) => {
        const state = useStateContext();
        const stateProps = mapStateToProps(state, props);
        // noinspection JSUnreachableSwitchBranches
        switch (stateProps) {
            case false:
                return fallback;
            case true:
                return React.createElement(component, props as P & SP);
        }
        return React.createElement(component, {...props, ...stateProps});
    };
    componentType.displayName = `withState(${component.displayName || component.name})`;
    return componentType;
}

export function withApi<P = {}>(component: React.ComponentType<P & { api: Api.Instance }>): React.ComponentType<P> {
    return withState<P, { api: Api.Instance }>(component, ({api}) => ({api}));
}
export type Action = Auth.Action;
export type Dispatch = React.Dispatch<Action>;

export const DispatchContext = React.createContext<Dispatch>(() => undefined);
DispatchContext.displayName = "Client.DispatchContext";

export function useDispatchContext() {
    return React.useContext(DispatchContext);
}

export function Reducer(prevState: State, action: Action): State {
    console.log(`CLIENT DISPATCH`, action, prevState);
    switch (action.type) {
        case "auth":
        case "logout":
        case "refresh":
            return Object.freeze({...prevState, ...Auth.Reducer(prevState, action),});
    }
}

export const Provider: React.FC<{}> = ({children, ...props}) => {
    const [state, dispatch] = React.useReducer(Reducer, props, State);

    Api.useEffect(state, state.user);
    Auth.useEffect(state, state.api, dispatch);
    Rt.useAuthTrack(state);

    return React.createElement(StateContext.Provider, {
        value: state,
        children: React.createElement(DispatchContext.Provider, {
            children,
            value: dispatch,
        }),
    });
};
Provider.displayName = "Client.Provider";
