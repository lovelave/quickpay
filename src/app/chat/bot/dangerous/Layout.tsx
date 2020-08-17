// tslint:disable:max-line-length
import * as React from "react";

import "./styles.scss";

export const Layout = () => {
    return (
        <div className="animation-container">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="bot bot_dangerous" viewBox="35 35 175 175">
                <defs>
                    <linearGradient id="a" x1="0.241" y1="0.583" x2="0.641" y2="0.295" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fc3030"/>
                        <stop offset="0.291" stopColor="#ff7a7a"/>
                        <stop offset="1" stopColor="#fff"/>
                    </linearGradient>
                    <filter id="b" x="41.66" y="50.071" width="109.541" height="117.587" filterUnits="userSpaceOnUse">
                        <feOffset dy="3"/>
                        <feGaussianBlur stdDeviation="10" result="c"/>
                        <feFlood floodColor="#f73737" floodOpacity="0.243"/>
                        <feComposite operator="in" in2="c"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <radialGradient id="d" cx="0.651" cy="0.414" r="0.192" gradientTransform="matrix(-0.663, -0.749, -1.582, 1.401, 1.738, 0.321)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fb6363"/>
                        <stop offset="1" stopColor="#fff4f4"/>
                    </radialGradient>
                    <linearGradient id="e" x1="0.325" y1="0.242" x2="0.639" y2="0.714" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fc3030"/>
                        <stop offset="0.468" stopColor="#ff8387"/>
                        <stop offset="1" stopColor="#fff"/>
                    </linearGradient>
                    <filter id="f" x="96.34" y="50.068" width="109.585" height="117.557" filterUnits="userSpaceOnUse">
                        <feOffset dy="3"/>
                        <feGaussianBlur stdDeviation="10" result="g"/>
                        <feFlood floodColor="#f73737" floodOpacity="0.243"/>
                        <feComposite operator="in" in2="g"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <radialGradient id="h" cx="0.651" cy="0.586" r="0.192" gradientTransform="matrix(-0.663, 0.749, -1.582, -1.401, 2.009, 0.919)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fb6072"/>
                        <stop offset="1" stopColor="#fff4f5"/>
                    </radialGradient>
                    <radialGradient id="i" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="0.695" stopColor="#fff"/>
                        <stop offset="1" stopColor="#f5f5f5"/>
                    </radialGradient>
                    <filter id="j" x="0" y="0" width="247.98" height="247.979" filterUnits="userSpaceOnUse">
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="27.5" result="k"/>
                        <feFlood floodColor="#a8102d" floodOpacity="0.639"/>
                        <feComposite operator="in" in2="k"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <radialGradient id="l" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="0.665" stopColor="#fff"/>
                        <stop offset="1" stopColor="#f7fcff"/>
                    </radialGradient>
                    <filter id="m" x="70.171" y="70.886" width="107.98" height="108.079" filterUnits="userSpaceOnUse">
                        <feOffset dy="5"/>
                        <feGaussianBlur stdDeviation="5.5" result="n"/>
                        <feFlood floodColor="#cb0c0c" floodOpacity="0.627"/>
                        <feComposite operator="in" in2="n"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <linearGradient id="o" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff2f4"/>
                        <stop offset="0.155" stopColor="#ff7171"/>
                        <stop offset="0.649" stopColor="#ff6c72"/>
                        <stop offset="1" stopColor="#ffd8d8"/>
                    </linearGradient>
                    <radialGradient id="p" cx="0.5" cy="0.528" r="0.496" gradientTransform="matrix(1, -0.008, 0.008, 0.96, -0.004, 0.025)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#f86f8a"/>
                        <stop offset="0.882" stopColor="#d6494e"/>
                        <stop offset="1" stopColor="#af2839"/>
                    </radialGradient>
                    <radialGradient id="q" cx="0.488" cy="0.689" r="0.528" gradientTransform="matrix(0.943, 0.333, -0.344, 0.974, 0.265, -0.144)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#ffa5a5"/>
                        <stop offset="0.673" stopColor="#ff6f6f"/>
                        <stop offset="0.906" stopColor="#eb6262"/>
                        <stop offset="1" stopColor="#ed474e"/>
                    </radialGradient>
                    <radialGradient id="r" cx="0.5" cy="0.5" r="0.437" gradientTransform="matrix(1, 0, 0, 1.288, 0, -0.144)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#ff7979" stopOpacity="0.718"/>
                        <stop offset="0.685" stopColor="#f5fcff" stopOpacity="0"/>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="s" x1="0.235" y1="0.977" x2="0.645" y2="0.09" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff" stopOpacity="0.059"/>
                        <stop offset="0.338" stopColor="#fff" stopOpacity="0.937"/>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="t" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff2f2" stopOpacity="0.867"/>
                        <stop offset="1" stopColor="#ff9191" stopOpacity="0"/>
                    </linearGradient>
                    <radialGradient id="u" cx="0.5" cy="0.5" r="0.506" gradientTransform="translate(0.081 -0.069) rotate(8.622)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="0.685" stopColor="#fff" stopOpacity="0"/>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                    </radialGradient>
                    <filter id="v" x="111.376" y="99.57" width="25.2" height="49.782" filterUnits="userSpaceOnUse">
                        <feOffset dy="3"/>
                        <feGaussianBlur stdDeviation="3" result="w"/>
                        <feFlood floodColor="#fff"/>
                        <feComposite operator="in" in2="w"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                </defs>
                <g transform="translate(72.974 67.902)">
                    <g transform="translate(-13.172 3.1)">
                        <g transform="translate(0 0)">
                            <g transform="translate(21.154 69.692) rotate(-115)">
                                <g transform="matrix(-0.42, 0.91, -0.91, -0.42, 161.73, -13.91)" filter="url(#b)">
                                    <path d="M21.973.059C13.6,3.4,5.322,18.4.917,30.692s7.972,31.014,17.9,14.025S27.542-1.49,21.973.059Z" transform="matrix(-0.85, -0.53, 0.53, -0.85, 93.9, 134.66)" fill="url(#a)"/>
                                </g>
                                <path d="M21.057.29C15.4,2.545,5.873,13.314,0,30.923c6.134-9.2,12.256-15.168,16.6-19.991C22.727,3.548,26.625-1.258,21.057.29Z" transform="matrix(0.839, -0.545, 0.545, 0.839, 0.401, 14.109)" fill="url(#d)"/>
                                <path d="M2.736,0C5.285,8.244-1.319,24.535.242,39.337" transform="translate(17.669 1.645)" fill="none" stroke="#ff4343" strokeLinecap="round" strokeWidth="0.8" opacity="0.655"/>
                            </g>
                            <g transform="translate(54.706 45.401) rotate(-65)">
                                <g transform="matrix(0.42, 0.91, -0.91, 0.42, 57.1, -152.97)" filter="url(#f)">
                                    <path d="M21.88,51.327C13.508,47.991,5.229,32.99.824,20.694S10.635-12.387,20.842,9.752C28.572,31.148,27.449,52.876,21.88,51.327Z" transform="translate(126.34 91.03) rotate(-32)" fill="url(#e)"/>
                                </g>
                                <path d="M21.057,30.633C15.4,28.378,5.873,17.609,0,0,6.134,9.2,12.256,15.168,16.6,19.991,22.727,27.375,26.625,32.182,21.057,30.633Z" transform="matrix(0.839, 0.545, -0.545, 0.839, 17.176, 17.287)" fill="url(#h)"/>
                                <path d="M2.736,39.337C5.285,31.092-1.319,14.8.242,0" transform="translate(17.602 16.348)" fill="none" stroke="#ff4343" strokeLinecap="round" strokeWidth="0.8" opacity="0.652"/>
                            </g>
                        </g>
                        <g transform="matrix(1, 0, 0, 1, -59.8, -71)" filter="url(#j)">
                            <g transform="translate(86.5 82.5)" stroke="#fff" strokeWidth="4" fill="url(#i)">
                                <circle cx="37.49" cy="37.49" r="37.49" stroke="none"/>
                                <circle cx="37.49" cy="37.49" r="39.49" fill="none"/>
                            </g>
                        </g>
                        <g transform="matrix(1, 0, 0, 1, -59.8, -71)" filter="url(#m)">
                            <path d="M37.588-.174A37.54,37.54,0,1,1,0,37.415,37.492,37.492,0,0,1,37.588-.174Z" transform="translate(86.67 82.56)" fill="url(#l)"/>
                        </g>
                    </g>
                    <g transform="translate(14.098 15.74)">
                        <path d="M37.026-.174A36.979,36.979,0,1,1,0,36.854,36.932,36.932,0,0,1,37.026-.174Z" transform="translate(0 0.174)" fill="url(#o)"/>
                        <path d="M35.934-.174A35.889,35.889,0,1,1,0,35.762,35.843,35.843,0,0,1,35.934-.174Z" transform="translate(1.143 1.319)" fill="url(#p)"/>
                        <path d="M33.435-2.174c18.889,0,35.256,16.547,35.256,35.436S52.235,66.321,33.346,66.321-2,52.152-2,33.262,14.545-2.174,33.435-2.174Z" transform="translate(3.715 3.891)" fill="url(#q)"/>
                        <ellipse cx="26.293" cy="6.002" rx="26.293" ry="6.002" transform="translate(11.603 64.762)" opacity="0.495" fill="url(#r)"/>
                        <path d="M33.409,59.47C15.533,43.556,23.087,22.575,34.738,13.536c4.086-2.614,7.492-2.479,7.48-1.64-6.783,5.277-10.5,34.266.952,49.857C38.185,62.606,34.246,59.863,33.409,59.47Z" transform="translate(-8.047 -0.996)" opacity="0.351" fill="url(#s)"/>
                    </g>
                    <g transform="translate(26.272 7.339)" opacity="0.547">
                        <path d="M21.139-.025C34.5-.025,42.277,6.254,44.306,10.6c2.06,5.045-8.933,9.288-23.167,9.378C8.873,20.056.282,16.626-.585,11.851S7.777-.025,21.139-.025Z" transform="translate(3.621 11.857)" fill="url(#t)"/>
                        <ellipse cx="11.717" cy="11.717" rx="11.717" ry="11.717" transform="translate(0 0)" opacity="0.782" fill="url(#u)"/>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -72.97, -67.9)" filter="url(#v)">
                        <path d="M8.4,3.7A3.071,3.071,0,0,1,6.026,2.549,4.023,4.023,0,0,1,5.018-.2,4.023,4.023,0,0,1,6.026-2.945,3.071,3.071,0,0,1,8.4-4.093a3.106,3.106,0,0,1,2.412,1.148A4.023,4.023,0,0,1,11.822-.2a4.023,4.023,0,0,1-1.008,2.747A3.106,3.106,0,0,1,8.4,3.7ZM10.85-10.455Q10.67-8.4,9.158-8.4h-1.4q-1.512,0-1.692-2.05l-1.116-13.2q-.108-1.271-.108-1.64,0-2.788,3.6-2.788t3.6,2.788q0,.779-.072,1.64Z" transform="translate(115.54 133.66)" fill="#fff"/>
                    </g>
                </g>
            </svg>
        </div>
    );
};

Layout.displayName = "BotDangerous.Layout";
