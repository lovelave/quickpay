/* tslint:disable */
import * as React from "react";

export const CardIcon: React.FC<{}> = React.memo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="367.417" height="180.016" viewBox="0 0 367.417 180.016">
            <defs>
                <linearGradient id="a" x1="0.082" y1="0.538" x2="1" y2="0.534" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#7cc3ff"/>
                    <stop offset="1" stopColor="#fff"/>
                </linearGradient>
                <filter id="b" x="0" y="0" width="280.409" height="180.016" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="4" result="c"/>
                    <feFlood floodColor="#248be3" floodOpacity="0.314"/>
                    <feComposite operator="in" in2="c"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <linearGradient id="d" y1="0.523" x2="0.91" y2="0.528" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff" stopOpacity="0"/>
                    <stop offset="1" stopColor="#fff"/>
                </linearGradient>
            </defs>
            <g transform="translate(-584 -355.691)">
                <g transform="matrix(1, 0, 0, 1, 584, 355.69)" filter="url(#b)">
                    <rect width="256.409" height="156.016" rx="15" transform="translate(16 12)" fill="url(#a)"/>
                </g>
                <g transform="translate(628.225 389.98)">
                    <text transform="translate(0.192 73.551)" fill="#fff" fontSize="18" fontFamily="ArialMT, Arial">
                        <tspan x="0" y="0">5767</tspan>
                    </text>
                    <text transform="translate(52.192 73.551)" fill="#fff" fontSize="18" fontFamily="ArialMT, Arial">
                        <tspan x="0" y="0">4566</tspan>
                    </text>
                    <text transform="translate(104.192 73.551)" fill="#fff" fontSize="18" fontFamily="ArialMT, Arial">
                        <tspan x="0" y="0">0978</tspan>
                    </text>
                    <text transform="translate(156.192 73.551)" fill="#fff" fontSize="18" fontFamily="ArialMT, Arial">
                        <tspan x="0" y="0">3490</tspan>
                    </text>
                    <text transform="translate(49.192 105.551)" fill="#fff" fontSize="16" fontFamily="ArialMT, Arial">
                        <tspan x="0" y="0">15 / 23</tspan>
                    </text>
                    <text transform="translate(0.192 104.551)" fill="#fff" fontSize="9" fontFamily="ArialMT, Arial">
                        <tspan x="0" y="0">Строк до:</tspan>
                    </text>
                    <g opacity="0.447">
                        <path
                            d="M12.488.373h0l-3.433,9.5-.4-2.048h0L7.444,1.615A1.541,1.541,0,0,0,5.734.373H.065L0,.607H0a13.457,13.457,0,0,1,3.764,1.58l3.127,12h3.751L16.356.373Z"
                            transform="translate(0 -0.126)" fill="#e2f1ff"/>
                        <path d="M48.56,5.49Z" transform="translate(-16.991 -1.921)" fill="#e2f1ff"/>
                        <path d="M26.109.38,23.86,14.195h3.6L29.711.38Z" transform="translate(-8.349 -0.133)"
                              fill="#e2f1ff"/>
                        <path
                            d="M37.994,4.083c0-1.56,3.5-1.359,5.045-.514L43.552.6A10.4,10.4,0,0,0,40.3,0c-1.788,0-6.026.78-6.026,4.551,0,3.569,4.973,3.615,4.973,5.487s-4.46,1.541-5.935.358l-.533,3.1a10.083,10.083,0,0,0,4.076.806c2.457,0,6.156-1.3,6.156-4.733C43.019,5.981,37.994,5.643,37.994,4.083Z"
                            transform="translate(-11.47)" fill="#e2f1ff"/>
                        <path
                            d="M58.044.378H55.158a1.651,1.651,0,0,0-1.664,1.053L48.13,14.192h3.751l.715-2.048h4.551l.423,2.054h3.3ZM53.662,9.31l1.892-5.2,1.066,5.2Z"
                            transform="translate(-16.841 -0.13)" fill="#e2f1ff"/>
                    </g>
                    <text transform="translate(114.192 14.551)" fill="#fff" fontSize="15"
                          fontFamily="Arial-BoldMT, Arial" fontWeight="700" opacity="0.426">
                        <tspan x="0" y="0">PrivatBank</tspan>
                    </text>
                </g>
                <rect width="157" height="166" transform="translate(794.417 364.531)" fill="url(#d)"/>
            </g>
        </svg>
    );
});
