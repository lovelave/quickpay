// tslint:disable:max-line-length
import * as React from "react";

import "./styles.scss";

export const Layout = () => {
    return (
        <div className="animation-container">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="bot bot_scared" viewBox="25 25 150 150">
                <defs>
                    <radialGradient id="a" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="0.695" stopColor="#fff"/>
                        <stop offset="1" stopColor="#f5f5f5"/>
                    </radialGradient>
                    <filter id="b" x="0" y="0" width="208.367" height="208.367" filterUnits="userSpaceOnUse">
                        <feOffset dy="3"/>
                        <feGaussianBlur stdDeviation="21" result="c"/>
                        <feFlood floodColor="#e02e74"/>
                        <feComposite operator="in" in2="c"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <linearGradient id="d" x1="0.5" y1="0.382" x2="0.663" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#900b39"/>
                        <stop offset="0.269" stopColor="#ff96af"/>
                        <stop offset="0.755" stopColor="#fff"/>
                        <stop offset="1" stopColor="#fff"/>
                    </linearGradient>
                    <filter id="e" x="24.384" y="22.661" width="147.302" height="128.447" filterUnits="userSpaceOnUse">
                        <feOffset dy="3"/>
                        <feGaussianBlur stdDeviation="10" result="f"/>
                        <feFlood floodColor="#37a6f7" floodOpacity="0.243"/>
                        <feComposite operator="in" in2="f"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <radialGradient id="g" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="0.665" stopColor="#fff"/>
                        <stop offset="1" stopColor="#ffd3de"/>
                    </radialGradient>
                    <radialGradient id="h" cx="0.5" cy="0.5" r="0.506" gradientTransform="translate(0.081 -0.069) rotate(8.622)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="0.685" stopColor="#fff" stopOpacity="0"/>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="i" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#ff9da8"/>
                        <stop offset="1" stopColor="#e200ff"/>
                    </linearGradient>
                    <linearGradient id="j" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff2f6"/>
                        <stop offset="0.155" stopColor="#e23168"/>
                        <stop offset="0.649" stopColor="#ff6c88"/>
                        <stop offset="1" stopColor="#ffd8ec"/>
                    </linearGradient>
                    <radialGradient id="k" cx="0.5" cy="0.5" r="0.986" gradientTransform="translate(0.182 0.17) scale(0.637 0.66)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#ff60b6"/>
                        <stop offset="0.837" stopColor="#ffb5cf"/>
                        <stop offset="1" stopColor="#bc0024"/>
                    </radialGradient>
                    <radialGradient id="l" cx="0.514" cy="0.714" r="0.528" gradientTransform="matrix(0.943, 0.333, -0.344, 0.974, 0.265, -0.144)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#ffc1cd"/>
                        <stop offset="0.673" stopColor="#ff6790"/>
                        <stop offset="0.906" stopColor="#cb467e"/>
                        <stop offset="1" stopColor="#810325"/>
                    </radialGradient>
                    <linearGradient id="n" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#ffdbed" stopOpacity="0.867"/>
                        <stop offset="1" stopColor="#ff89e4" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="o" x1="0.5" y1="0.945" x2="0.5" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#ffa0ba"/>
                        <stop offset="0.749" stopColor="#e3408b"/>
                        <stop offset="1" stopColor="#b20029"/>
                    </linearGradient>
                    <filter id="p" x="106.128" y="110.184" width="15.338" height="18.349" filterUnits="userSpaceOnUse">
                        <feOffset/>
                        <feGaussianBlur stdDeviation="1" result="q"/>
                        <feFlood floodColor="#ff6997" floodOpacity="0.776"/>
                        <feComposite operator="in" in2="q"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter id="r" x="78.332" y="81.779" width="31.6" height="29.356" filterUnits="userSpaceOnUse">
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2" result="s"/>
                        <feFlood floodColor="#fff"/>
                        <feComposite operator="in" in2="s"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter id="t" x="112.094" y="78.32" width="33.448" height="35.815" filterUnits="userSpaceOnUse">
                        <feOffset/>
                        <feGaussianBlur stdDeviation="3" result="u"/>
                        <feFlood floodColor="#fff"/>
                        <feComposite operator="in" in2="u"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <radialGradient id="v" cx="0.233" cy="0.5" r="0.496" gradientTransform="matrix(-0.093, -0.996, 1.699, -0.16, -0.768, 0.654)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#ba0148"/>
                        <stop offset="0.3" stopColor="#f42776"/>
                        <stop offset="1" stopColor="#ffd5e2"/>
                    </radialGradient>
                    <linearGradient id="w" x1="0.485" y1="0.266" x2="0.809" y2="1.019" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff5f7"/>
                        <stop offset="1" stopColor="#ffccdc"/>
                    </linearGradient>
                    <filter id="x" x="49.398" y="92.001" width="38.702" height="51.272" filterUnits="userSpaceOnUse">
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="2" result="y"/>
                        <feFlood floodColor="#8b0830" floodOpacity="0.686"/>
                        <feComposite operator="in" in2="y"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <radialGradient id="z" cx="0.34" cy="0.353" r="0.392" gradientTransform="matrix(0.741, 0.671, -0.509, 0.562, 0.336, -0.179)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#ffb7bf"/>
                        <stop offset="0.587" stopColor="#ff679c"/>
                        <stop offset="0.852" stopColor="#dc0066"/>
                        <stop offset="1" stopColor="#c9003e"/>
                    </radialGradient>
                    <linearGradient id="aa" x1="0.904" y1="0.994" x2="0.135" y2="-0.003" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="0.266" stopColor="#f8fcff"/>
                        <stop offset="1" stopColor="#2fa4ff"/>
                    </linearGradient>
                </defs>
                <g transform="translate(52.747 47.791)">
                    <g transform="translate(1.636 1.87)">
                        <g transform="matrix(1, 0, 0, 1, -54.38, -49.66)" filter="url(#b)">
                            <circle cx="41.183" cy="41.183" r="41.183" transform="translate(63 60)" fill="url(#a)"/>
                        </g>
                        <g transform="matrix(1, 0, 0, 1, -54.38, -49.66)" filter="url(#e)">
                            <path d="M28.49,67.624C13.058,62.579,0,33.946,0,33.946S23.988,53.295,40.424,49.2,66.014-7.532,73.612.917c3.829,4.258,10.312,18.057,12.483,31.42s1.6,30.115-3.248,31.352C73.071,66.18,61.722,51.071,43.5,51.782c-5.7.222-5.075,1.51-5.625,4.852C36.825,62.877,39.091,71.09,28.49,67.624Z" transform="translate(141.69 118.11) rotate(180)" fill="url(#d)"/>
                        </g>
                        <path d="M41.183,0A41.183,41.183,0,1,1,0,41.183,41.183,41.183,0,0,1,41.183,0Z" transform="translate(8.616 10.339)" fill="url(#g)"/>
                        <path d="M-14.18,30.618C-6.623,38.486-5.642,39.582-.339,42.8s8.249,2.183,6.7,0c-.718-1.013-1.294-2.583-.938-3.2s1.241-.706,2.041,0c8.29,6.837,16.2,8.243,24.98,7.6,22.387-1.794,28.546-22.093,29.006-22.332" transform="translate(26.826 41.405)" fill="none" stroke="#ef2fa5" strokeLinecap="round" strokeWidth="0.5" opacity="0.702"/>
                        <path d="M19.965-.3c9.883,0,21.424-.752,21.424,2.369s-13.182,9.09-23.065,9.09S1.153,5.9,1.153,2.781,10.082-.3,19.965-.3Z" transform="translate(31.178 83.947)" fill="url(#h)"/>
                    </g>
                    <g transform="translate(15.572 5.307)">
                        <g transform="translate(0 7.837)" opacity="0.518">
                            <path d="M11.341,43.132s1.693-17.826,14.815-23.267S66.18,13.578,75.011,24.6,90.875,53.866,84.5,63.324,68.515,60.8,57.323,61.511,38.757,71.1,22.26,67.8,11.341,43.132,11.341,43.132Z" transform="translate(-10.433 -13.532)" opacity="0.395" fill="url(#i)"/>
                            <path d="M10.866,47.29c-.373-5.962,3.128-23.935,18.917-30.366s33.263-4.2,43.575,5.366c10.208,9.471,18.173,26.856,11.556,39.553.018-.024-.061.085-.14.192C76.788,72.764,67.066,58.944,56.529,60.8c-14.466,2.546-18.667,9.42-32.375,6.433S11.238,53.253,10.866,47.29Z" transform="translate(-10.332 -13.273)" fill="url(#j)"/>
                        </g>
                        <g transform="translate(1.464 9.251)">
                            <path d="M9.848,18.371C17.3,8.687,48.518,7.584,61.711,13.756c13.524,8.885,17.758,28.3,13.8,37.535-3.991,7.586-8.222,6.517-11.276,5.873s-7.281-4.479-15.527-4.656-11.524,2.017-17.454,3.947-13.271,2.755-18.352.71C-3.16,51.069,2.4,28.055,9.848,18.371Z" transform="translate(-2.533 -6.98)" fill="url(#k)"/>
                            <path d="M12.568,48.448a34.966,34.966,0,0,1,6.165-23.76c9.83-13.669,42.28-13.534,53.295-1.992-.018-.021.076.087.168.2C82.412,34.974,86.8,49.641,79.7,59.973s-12.916-2.356-26.088-1.247-14.828,6.528-24.793,5.147S13.041,54.936,12.568,48.448Z" transform="translate(-10.904 -14.225)" fill="url(#l)"/>
                        </g>
                        <ellipse cx="12.558" cy="12.872" rx="12.558" ry="12.872" transform="translate(4.487 0)" opacity="0.782" fill="url(#h)"/>
                        <path d="M25.117.039c14.734,0,23.761,6.857,26.1,11.632,2.376,5.541-9.686,10.2-26.1,10.3C10.972,22.058-1.579,16.936-.5,11.523.873,6.429,11.592.039,25.117.039Z" transform="translate(11.346 11.088)" opacity="0.873" fill="url(#n)"/>
                    </g>
                    <g transform="translate(31.538 38.805)">
                        <g transform="translate(21.446 25.355)">
                            <g transform="matrix(1, 0, 0, 1, -105.73, -111.95)" filter="url(#p)">
                                <path d="M141.84,119.5c-.832-6.057-9.152-2.025-9.015,2.338-.435.808.231,8.484,5.3,6.656C140.98,127.419,142.672,125.552,141.84,119.5Z" transform="translate(-23.59 -3.24)" fill="url(#o)"/>
                            </g>
                            <path d="M135.606,131.334c.847,2.3,2.431,4.166,5.065,3.274,1.223-.432,2.216-1.844,3.03-3.693C143.112,132.24,139.805,135.841,135.606,131.334Z" transform="translate(-131.453 -120.879)" fill="#ffc9dc" opacity="0.683"/>
                        </g>
                        <g transform="translate(0 0)">
                            <g transform="matrix(1, 0, 0, 1, -84.29, -86.6)" filter="url(#r)">
                                <path d="M245.011,59.279c.3,1.707,2.274,5.546,6.312,5.546s12.048-2.016,12.947-2.681S264,52.605,262.99,49.531s-4.58-2.4-9.921,0S244.711,57.572,245.011,59.279Z" transform="translate(-160.66 40.31)" fill="#fff"/>
                            </g>
                            <g transform="matrix(1, 0, 0, 1, -84.29, -86.6)" filter="url(#t)">
                                <path d="M260.136,59.279c-.232,1.707-1.757,5.546-4.875,5.546s-9.306-2.016-10-2.681-.777-10.318,0-13.393,6.527-1.7,10,1.193S260.368,57.572,260.136,59.279Z" transform="translate(-123.62 40.31)" fill="#fff"/>
                            </g>
                        </g>
                    </g>
                    <path d="M5.819,0c5.639,7.717,8.162,44.276,1.348,45.153C-.5,45.747-1.1,32.367,1.136,23.417S3.525,15.05,4.864,8.356C5.711,5.377,4.941,2.628,5.819,0Z" transform="translate(13.308 51.522) rotate(180)" fill="url(#v)"/>
                    <path d="M-.307-.643C1.461-1.064,6.72,2.393,5.756,13.814S2.294,29.692,1.22,35.094A37.214,37.214,0,0,0,.5,44.553" transform="translate(7.435 7.032)" fill="none" stroke="#fcd8ff" strokeLinecap="round" strokeWidth="0.8"/>
                    <g transform="translate(1.79 49.21)">
                        <g transform="matrix(1, 0, 0, 1, -54.54, -97)" filter="url(#x)">
                            <path d="M4.015.553C5.628-.793,8.5.283,9.261,4.161c.177.9.691,10.5,1.448,18.374.7,7.3,1.827,14.455.511,15.186C8.546,39.206,1.594,22.886.29,14.527S2.4,1.9,4.015.553Z" transform="translate(55.4 102) rotate(-25)" fill="url(#w)"/>
                        </g>
                        <path d="M5.341.011C6.382.148,7.4,2.372,7.383,5.5s.833,18.675-.04,19.694S1.877,19.418.3,10.823,3.826-.189,5.341.011Z" transform="translate(0 5.848) rotate(-25)" fill="url(#z)"/>
                        <path d="M1.332,21.967c1.742-1.243.715-4.554.713-8.123A103.54,103.54,0,0,0,1.12.209C.826-1.861-.007,12.045,0,15.769S.27,22.393,1.332,21.967Z" transform="translate(16.746 23.459) rotate(150)" opacity="0.35" fill="url(#aa)"/>
                    </g>
                </g>
            </svg>
        </div>
    );
};

Layout.displayName = "BotScared.Layout";
