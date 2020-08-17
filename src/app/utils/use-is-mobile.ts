import {useWindowWidth} from "@horat1us/react-hooks";

export function useIsMobile() {
    const width = useWindowWidth();
    if (width === undefined) {
        return;
    }
    return width <= 767;
}
