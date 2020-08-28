import * as React from "react";

export const Hamburger = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12.628" className="hamburger">
            <g>
                <rect className="line" width="16" height="2" rx="1" fill="#fff"/>
                <rect className="line" width="16" height="2" rx="1" transform="translate(0 5.314)" fill="#fff"/>
                <rect className="line" width="16" height="2" rx="1" transform="translate(0 10.628)" fill="#fff"/>
            </g>
        </svg>
    )
}
