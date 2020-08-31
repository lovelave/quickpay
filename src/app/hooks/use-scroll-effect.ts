import {useMutationObserver, useWindowSize} from "@horat1us/react-hooks";

export function useScrollEffect() {
    const [width, height] = useWindowSize();
    const [ref, setRef] = useMutationObserver(() => {
        const bodyHeight = document.documentElement.scrollHeight;
        if (height === undefined) {
            return;
        }
        window.scrollTo(
            0,
            bodyHeight - (height + (bodyHeight - (ref?.scrollHeight || 0))),
        );
    });
    return setRef;
}
