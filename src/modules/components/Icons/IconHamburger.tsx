// tslint:disable:max-line-length
import * as React from "react";

import "./hamburger.scss";

export const IconHamburger = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
    <svg
        className="hamburger"
        viewBox="15 25 70 50"
        ref={ref}
        {...props}
    >
        <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
        />
        <path
            className="line middle"
            d="m 70,50 h -40"
        />
        <path
            className="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
        />
    </svg>
));
IconHamburger.displayName = "IconHamburger";
