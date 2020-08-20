import {useMutationObserver, useWindowSize} from "@horat1us/react-hooks";
import {useIsMobile} from "../utils/use-is-mobile";

export function useScrollEffect() {
    const [, height] = useWindowSize();
    const [ref, setRef] = useMutationObserver(() => {
        const bodyHeight = document.documentElement.scrollHeight;
        if (height === undefined) {
            return;
        }
        if (useIsMobile()) {
            let handleId: ReturnType<typeof setTimeout> | undefined = setTimeout(() => {
                handleId = undefined;
                window.scrollTo({
                    top: bodyHeight,
                    behavior: "smooth"
                });
            }, 200);
            return () => handleId && clearTimeout(handleId);
        }
        window.scrollTo(
            0,
            bodyHeight - (height + (bodyHeight - (ref?.scrollHeight || 0))),
        );
    });
    return setRef;
}