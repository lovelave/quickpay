import * as React from "react";

export function useAnimationCompleted(animationElement: SVGElement | HTMLElement | null) {
    const [ animationState, changeState ] = React.useState<boolean | undefined>(undefined);
    React.useEffect(() => {
        if (!animationElement) {
            return;
        };
        const listener: EventListener = (event) => {
            changeState(event.type.toLowerCase().includes("start"));
        };
        const events = [
            "animationStart",
            "webkitAnimationStart",
            "mozAnimationStart",
            "oAnimationStart",
            "animationEnd",
            "webkitAnimationEnd",
            "mozAnimationEnd",
            "oAnimationEnd"
        ];
        for (const eventName of events) {
            animationElement.addEventListener(eventName, listener);
        }
        return () => {
            if (!animationElement) {
                return;
            }
            for (const eventName of events) {
                animationElement.removeEventListener(eventName, listener);
            }
        };
    }, [ animationElement, changeState, history ]);
    return [animationState, changeState];
}
