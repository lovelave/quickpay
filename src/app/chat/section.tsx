import * as React from "react";
import {useScrollEffect} from "../hooks/use-scroll-effect";

export const Section: React.FC<{}> = ({children}) => {
    const ref = useScrollEffect();
    return <section className="section-chat" ref={ref}>{children}</section>;
};
