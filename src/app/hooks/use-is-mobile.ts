import {useWindowWidth} from "@horat1us/react-hooks";

export function isMobile(width: number | undefined) {
    if (width === undefined) {
        return;
    }
    return width <= 767;
}

export function useIsMobile() {
    const width = useWindowWidth();
    if (width === undefined) {
        return;
    }
    return width <= 767;
}
