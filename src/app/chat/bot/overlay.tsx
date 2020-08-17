import * as React from "react";
import * as TurnedBot from "./turned";
import * as ScaredBot from "./scared";
import * as DangerousBot from "./dangerous";

import "./overlay.scss";

export type BotOverlayType = "scared" | "dangerous" | undefined;

const getBotLayout = (bot: BotOverlayType) => {
    switch (bot) {
        case "scared":
            return <ScaredBot.Layout />
        case "dangerous":
            return <DangerousBot.Layout />
        default:
            return <TurnedBot.Layout />
    }
}

export const BotOverlay: React.FC<{bot?: BotOverlayType}> = React.memo(
    ({bot}) => {
    return (
        <div className="bot__overlay">
            {getBotLayout(bot)}
        </div>
    )}
)
