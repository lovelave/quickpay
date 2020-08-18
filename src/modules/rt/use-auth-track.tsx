import * as React from "react";
import * as Client from "modules/client";
import * as RTClient from "@bobra-rt/client";

const mapStateToToken = (state: Client.State): string | undefined => {
    switch (state.type) {
        case "token":
            return state.user;
        case "user":
            return state.user.token;
        default:
            return undefined;
    }
}

export const useAuthTrack = ( state: Client.State ) => {
    if (process.env.RT_URL === undefined) {
        return;
    }
    RTClient.Manager.useAuthEffect(mapStateToToken(state));
};
