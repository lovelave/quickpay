// tslint:disable:max-line-length
import * as React from "react";
import classNames from "classnames";
import { useOpenState } from "@horat1us/react-hooks";

import "./styles.scss";

export const Layout = React.memo(() => {
    const [active, changeActive] = useOpenState(false);

    React.useEffect(() => {
        const listener = () => changeActive();
        document.addEventListener("DOMContentLoaded", listener);
        return () => document.removeEventListener("DOMContentLoaded", listener);
    }, [changeActive]);
    React.useEffect(() => {
        if (!active) {
            return;
        }
        const id = setTimeout(() => changeActive(), 1500);
        return () => clearTimeout(id);
    }, [active, changeActive]);
    return (
        <div onClick={changeActive} className={classNames(`animation-container turned`, active && "click-animation")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239.181 239.181" className="bot bot_turned">
                <defs>
                    <radialGradient id="a" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="0.695" stopColor="#fff"/>
                        <stop offset="1" stopColor="#f5f5f5"/>
                    </radialGradient>
                    <filter id="b" x="0" y="0" width="239.181" height="239.181" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" />
                        <feGaussianBlur stdDeviation="18" result="c"/>
                        <feFlood floodColor="#1098ff" floodOpacity="0.282"/>
                        <feComposite operator="in" in2="c"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <linearGradient id="d" x1="0.131" y1="0.278" x2="1.109" y2="1.209" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#0b5b90"/>
                        <stop offset="0.277" stopColor="#65c4ff"/>
                        <stop offset="0.674" stopColor="#fff"/>
                        <stop offset="1" stopColor="#fff"/>
                        <stop offset="1"/>
                    </linearGradient>
                    <filter id="e" x="-56" y="-65" width="123.746" height="121.34" filterUnits="userSpaceOnUse">
                        <feOffset dy="3"/>
                        <feGaussianBlur stdDeviation="10" result="f"/>
                        <feFlood floodColor="#37a6f7" floodOpacity="0.243"/>
                        <feComposite operator="in" in2="f"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <linearGradient id="g" x1="0.537" y1="0.298" x2="0.663" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#0b5b90"/>
                        <stop offset="0.269" stopColor="#65c4ff"/>
                        <stop offset="0.755" stopColor="#fff"/>
                        <stop offset="1" stopColor="#fff"/>
                    </linearGradient>
                    <filter id="h" x="-70" y="-82" width="135.599" height="164.336" filterUnits="userSpaceOnUse">
                        <feOffset dy="3"/>
                        <feGaussianBlur stdDeviation="10" result="i"/>
                        <feFlood floodColor="#37a6f7" floodOpacity="0.243"/>
                        <feComposite operator="in" in2="i"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <radialGradient id="j" cx="0.233" cy="0.5" r="0.496" gradientTransform="matrix(-0.093, -0.996, 1.699, -0.16, -0.768, 0.654)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#0166ba"/>
                        <stop offset="0.3" stopColor="#2795f4"/>
                        <stop offset="1" stopColor="#93d5ff"/>
                    </radialGradient>
                    <radialGradient id="k" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="0.665" stopColor="#fff"/>
                        <stop offset="1" stopColor="#bce7ff"/>
                    </radialGradient>
                    <radialGradient id="l" cx="0.4" cy="0.3" r="0.506" gradientTransform="translate(0.081 -0.069) rotate(8.622)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="0.785" stopColor="#fff" stopOpacity="0"/>
                        <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="m" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#9dd2ff"/>
                        <stop offset="1" stopColor="#00a8ff"/>
                    </linearGradient>
                    <linearGradient id="n" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#f2f9ff"/>
                        <stop offset="0.155" stopColor="#71c1ff"/>
                        <stop offset="0.649" stopColor="#6cc6ff"/>
                        <stop offset="1" stopColor="#d8f1ff"/>
                    </linearGradient>
                    <radialGradient id="o" cx="0.5" cy="0.5" r="0.986" gradientTransform="translate(0.182 0.17) scale(0.637 0.66)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#21bbf4"/>
                        <stop offset="0.837" stopColor="#58b2ff"/>
                        <stop offset="1" stopColor="#0065bc"/>
                    </radialGradient>
                    <linearGradient id="r" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#d5f0ff" stopOpacity="0.867"/>
                        <stop offset="1" stopColor="#739eff" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id="s" x1="0.5" y1="0.945" x2="0.5" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#33c0ff"/>
                        <stop offset="0.695" stopColor="#0d69af"/>
                        <stop offset="1" stopColor="#004c85"/>
                    </linearGradient>
                    <filter id="t" x="119.056" y="130.739" width="33.842" height="26.634" filterUnits="userSpaceOnUse">
                        <feGaussianBlur stdDeviation="1" result="u"/>
                        <feFlood floodColor="#02a7ff" floodOpacity="0.776"/>
                        <feComposite operator="in" in2="u"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter id="v" x="-25" y="-30" width="43.432" height="41.527" filterUnits="userSpaceOnUse">
                        <feGaussianBlur stdDeviation="2" result="w"/>
                        <feFlood floodColor="#fff"/>
                        <feComposite operator="in" in2="w"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter id="x" x="-22" y="-35" width="42.277" height="47.525" filterUnits="userSpaceOnUse">
                        <feGaussianBlur stdDeviation="3" result="y"/>
                        <feFlood floodColor="#fff"/>
                        <feComposite operator="in" in2="y"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <linearGradient id="z" x1="0.485" y1="0.266" x2="0.809" y2="1.019" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#f5fcff"/>
                        <stop offset="1" stopColor="#ccefff"/>
                    </linearGradient>
                    <filter id="aa" x="35.893" y="104.929" width="54.527" height="74.546" filterUnits="userSpaceOnUse">
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="2" result="ab"/>
                        <feFlood floodColor="#1baaf7" floodOpacity="0.627"/>
                        <feComposite operator="in" in2="ab"/>
                        <feComposite in="SourceGraphic"/>
                    </filter>
                    <radialGradient id="ac" cx="0.34" cy="0.353" r="0.392" gradientTransform="matrix(0.741, 0.671, -0.509, 0.562, 0.336, -0.179)" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#72d9ff"/>
                        <stop offset="0.587" stopColor="#009dff"/>
                        <stop offset="0.852" stopColor="#0079dc"/>
                        <stop offset="1" stopColor="#006cc9"/>
                    </radialGradient>
                    <linearGradient id="ad" x1="0.904" y1="0.994" x2="0.135" y2="-0.003" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#fff"/>
                        <stop offset="0.266" stopColor="#f8fcff"/>
                        <stop offset="1" stopColor="#2fa4ff"/>
                    </linearGradient>
                    <radialGradient id="gradient" cx="0.5040860175490379" cy="0.7225980346202849" r="0.528" spreadMethod="pad" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="rgb(3,75,129)"/>
                        <stop offset="1" stopColor="rgb(3,75,129)"/>
                    </radialGradient>
                    <radialGradient id="gradient2" cx="0.5040860175490379" cy="0.7225980346202849" r="0.528" spreadMethod="pad" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="rgb(181,235,255)"/>
                        <stop offset="0.53" stopColor="rgb(0,157,255)"/>
                        <stop offset="0.85" stopColor="rgba(17,95,154,0.87)"/>
                        <stop offset="1" stopColor="rgba(3,75,129,0)"/>
                    </radialGradient>
                </defs>
                <g id="bot-wrap" transform="matrix(1, 0, 0, 1, 38.64099999999999, 32.66300000000000)">
                    <g transform="translate(1.636 1.87)">
                        <g transform="matrix(1, 0, 0, 1, -40.28, -34.53)" filter="url(#b)">
                            <circle cx="65.591" cy="65.591" r="65.591" transform="translate(54 51)" fill="url(#a)"/>
                        </g>
                        <g id="ear-right" filter="url(#e)" transform="translate(118.409380,57.024959) rotate(0)">
                            <g transform="translate(-158.767962,-91.195564)">
                                <path d="M45.374000,107.700000C20.800000,99.667000,0,54.064000,0,54.064000C0,54.064000,29.535000,39.683000,50.665000,54.064000C71.795000,68.445000,61.191000,84.875000,60.315000,90.200000C58.649000,100.141000,62.259000,113.222000,45.374000,107.700000Z" transform="matrix(-1 0 -0 -1 179.31999999999999 143.55000000000001)" fill="url(#d)" stroke="none" strokeWidth="1"/>
                            </g>
                        </g>
                        <g id="ear-left" filter="url(#h)" transform="translate(43.375011,75.049042) rotate(0)">
                            <g transform="translate(-84.295716,-109.027529)">
                                <path d="M73.739000,32.147000C85.730000,11.895000,105.137000,-12,117.237000,1.460000C123.337000,8.242000,133.660000,30.218000,137.117000,51.501000C140.574000,72.784000,139.666000,99.464000,131.944000,101.433000C116.376000,105.400000,98.300000,81.338000,69.274000,82.470000C60.189000,82.824000,61.748000,52.400000,73.739000,32.147000Z" transform="matrix(-1 0 -0 -1 179.31999999999999 143.55000000000001)" fill="url(#g)" stroke="none" strokeWidth="1"/>
                                <g transform="matrix(1 0 0 1 40.26002461499986 38.68848183999998)">
                                    <path d="M9.268000,0C18.249000,12.291000,22.268000,70.516000,11.415000,71.912000C-0.800000,72.858000,-1.746000,51.549000,1.810000,37.300000C5.366000,23.051000,5.610000,23.974000,7.747000,13.314000C9.100000,8.563000,7.869000,4.186000,9.268000,0Z" transform="matrix(-1 0 -0 -1 18.58900000000000 79.07800000000000)" fill="url(#j)" stroke="none" strokeWidth="1"/>
                                    <path d="M-0.307000,-0.623000C2.509000,-1.293000,10.884000,4.212000,9.349000,22.400000C7.814000,40.588000,3.836000,47.689000,2.125000,56.293000C1.099623,61.244587,0.712143,66.307041,0.972000,71.357000" transform="matrix(1 0 0 1 9.05400000000000 7.82000000000000)" fill="none" stroke="rgb(216,237,255)" strokeWidth="0.800000" strokeLinecap="round"/>
                                </g>
                            </g>
                        </g>
                        <path d="M65.591,0A65.591,65.591,0,1,1,0,65.591,65.591,65.591,0,0,1,65.591,0Z" transform="translate(13.723 16.466)" fill="url(#k)"/>
                        <path d="M-14.18,34.02C-2.144,46.552-.582,48.3,7.864,53.426S21,56.9,18.538,53.426c-1.143-1.613-2.061-4.113-1.494-5.093s1.976-1.125,3.25,0c13.2,10.89,25.794,13.128,39.785,12.11,35.654-2.857,45.464-35.186,46.2-35.567" transform="translate(34.321 80.687)" fill="none" stroke="#2fb6ef" strokeLinecap="round" strokeWidth="0.5" opacity="0.647"/>
                        <path id="chin" d="M31.113000,-0.250000C46.853000,-0.250000,65.234000,-1.450000,65.234000,3.523000C65.234000,8.496000,44.240000,18,28.500000,18C12.760000,18,1.153000,9.623000,1.153000,4.652000C1.153000,-0.319000,15.373000,-0.250000,31.113000,-0.250000Z" transform="matrix(1, 0, 0, 1, 50.33900000000000, 133.47499999999999)" fill="url(#l)" />
                    </g>
                    <g transform="translate(23.83 7.344)">
                        <g transform="translate(0 12.481)" opacity="0.518">
                            <path d="M11.879,59.229s2.7-28.39,23.6-37.056,63.745-10.014,77.808,7.535,25.266,46.615,15.112,61.68S102.938,87.361,85.112,88.5,55.543,103.775,29.27,98.521,11.879,59.229,11.879,59.229Z" transform="translate(-10.433 -12.086)" opacity="0.395" fill="url(#m)"/>
                            <path d="M10.881,67.45c-.593-9.5,4.981-38.121,30.129-48.362s52.977-6.689,69.4,8.547c16.258,15.084,28.943,42.772,18.4,62.993.028-.038-.1.135-.224.306-12.717,17.086-28.2-4.924-44.982-1.971-23.039,4.055-29.73,15-51.563,10.246S11.475,76.947,10.881,67.45Z" transform="translate(-10.03 -13.273)" fill="url(#n)"/>
                        </g>
                        <g transform="translate(2.332 14.733)">
                            <path d="M14.183,23.378C26.05,7.955,75.77,6.2,96.783,16.027c21.539,14.151,28.283,45.079,21.981,59.779-6.356,12.082-13.1,10.379-17.959,9.353s-11.6-7.134-24.728-7.416-18.353,3.213-27.8,6.286S27.143,88.418,19.05,85.16C-6.534,75.454,2.316,38.8,14.183,23.378Z" transform="translate(-2.533 -5.236)" fill="url(#o)"/>
                            <path d="M12.707000,68.730000C11.844000,63.382000,11.567000,46.368000,22.526000,30.888000C38.181000,9.119000,89.863000,9.333000,107.400000,27.715000C107.372000,27.681000,107.522000,27.853000,107.668000,28.027000C123.939000,47.271000,130.920000,70.627000,119.622000,87.086000C108.324000,103.545000,99.052000,83.334000,78.072000,85.100000C57.092000,86.866000,54.462000,95.500000,38.592000,93.300000C22.722000,91.100000,13.460000,79.064000,12.707000,68.730000Z" transform="matrix(1 0 0 1 -10.05600000000000 -14.22500000000000)" opacity="1" fill="url(#gradient)" />
                            <g id="forhead" transform="translate(71,80)">
                                <g id="forhead-scale" transform="scale(1,1)">
                                    <path d="M12.707000,68.730000C11.844000,63.382000,11.567000,46.368000,22.526000,30.888000C38.181000,9.119000,89.863000,9.333000,107.400000,27.715000C107.372000,27.681000,107.522000,27.853000,107.668000,28.027000C123.939000,47.271000,130.920000,70.627000,119.622000,87.086000C108.324000,103.545000,99.052000,83.334000,78.072000,85.100000C57.092000,86.866000,54.462000,95.500000,38.592000,93.300000C22.722000,91.100000,13.460000,79.064000,12.707000,68.730000Z" transform="translate(-80.665030,-93.466082)" fill="url(#gradient2)" stroke="none" strokeWidth="1"/>
                                </g>
                            </g>
                        </g>
                        <path d="M38.051,12.861A15.562,15.562,0,0,1,40,20.5c0,11.322-8.054,20.016-19.1,20.016-7.566,0-15.052-3.822-18.589-10.44.19.069,6.753-7.343,16.276-11.343A104.37,104.37,0,0,1,38.051,12.861Z" transform="translate(7.146 -1)" opacity="0.782" fill="url(#l)"/>
                        <path d="M40.338.039c23.466,0,37.843,10.921,41.57,18.525,3.783,8.826-15.426,16.249-41.57,16.406C17.81,35.107-2.18,26.95-.462,18.329,1.725,10.215,18.8.039,40.338.039Z" transform="translate(17.736 17.683)" opacity="0.873" fill="url(#r)"/>
                    </g>
                    <g id="mouth" transform="translate(96.771000,111.525594) scale(1,1)">
                        <g transform="translate(-13.356000,-10.319385)">
                            <g transform="matrix(1 0 0 1 -122.06000000000000 -133.74000000000001)">
                                <path d="M160.322000,118.955000C159.051000,116.826000,147.680000,114.763000,133.091000,118.955000C131.760000,120.390000,133.157000,140.043000,148.691000,136.798000C157.414000,134.900000,161.593000,121.084000,160.322000,118.955000Z" transform="matrix(1 0 0 1 -11.20882874000000 17.21756039000001)" fill="url(#s)" stroke="none" strokeWidth="1"/>
                            </g>
                            <path d="M135.606000,131.583000C137.794000,135.247000,141.885000,138.219000,148.688000,136.797000C151.847000,136.110000,154.410000,133.861000,156.514000,130.915000C154.990000,133.025000,146.450000,138.761000,135.606000,131.583000Z" transform="matrix(1 0 0 1 -132.70400000000001 -116.52300000000000)" opacity="0.683" fill="rgb(141,214,255)" stroke="none" strokeWidth="1"/>
                        </g>
                    </g>
                    <g id="eyes" transform="translate(90.984131,85.225580) scale(1,1)">
                        <g transform="translate(-90.984131,-85.225580)">
                            <g id="eye-right" transform="translate(120.392590,85.205491) scale(1,1)" filter="url(#v)">
                                <g transform="translate(-159.032590,-117.865491)">
                                    <path d="M269.139000,66.978000C268.770000,69.696000,266.339000,75.810000,261.375000,75.810000C256.411000,75.810000,246.555000,72.600000,245.449000,71.541000C244.343000,70.482000,245.224000,62.757000,246.462000,57.861000C247.700000,52.965000,251.176000,44.227000,260.077000,46.726000C268.978000,49.225000,269.508000,64.260000,269.139000,66.978000Z" transform="matrix(1 0 0 1 -98.05000000000000 47.07000000000000)" fill="rgb(255,255,255)" stroke="none" strokeWidth="1"/>
                                </g>
                            </g>
                            <g id="eye-left" transform="translate(64.980469,85.205491) scale(1,1)" filter="url(#x)">
                                <g transform="translate(-103.620469,-117.865491)">
                                    <path d="M245.051000,66.979000C245.529000,69.698000,248.673000,75.812000,255.103000,75.812000C261.533000,75.812000,274.292000,72.602000,275.723000,71.542000C277.154000,70.482000,276.015000,62.758000,274.412000,57.861000C272.809000,52.964000,268.312000,44.226000,256.784000,46.725000C245.256000,49.224000,244.573000,64.261000,245.051000,66.979000Z" transform="matrix(1 0 0 1 -157.03999999999999 47.07000000000000)" fill="rgb(255,255,255)" stroke="none" strokeWidth="1"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g transform="translate(1.881 77.266)">
                        <g transform="matrix(1, 0, 0, 1, -40.52, -109.93)" filter="url(#aa)">
                            <path d="M6.395.88c2.569-2.143,7.145-.43,8.355,5.747.282,1.436,1.1,16.728,2.306,29.263,1.118,11.626,2.91,23.022.814,24.186C13.611,62.442,2.538,36.449.462,23.136S3.826,3.023,6.395.88Z" transform="translate(41.89 117.89) rotate(-25)" fill="url(#z)"/>
                        </g>
                        <path d="M8.506.018c1.657.219,3.279,3.759,3.252,8.74s1.327,29.742-.063,31.365S2.99,30.926.477,17.238,6.094-.3,8.506.018Z" transform="translate(0 9.313) rotate(-25)" fill="url(#ac)"/>
                        <path d="M2.121,34.986c2.774-1.98,1.139-7.253,1.136-12.937A164.9,164.9,0,0,0,1.784.333C1.315-2.964-.011,19.184,0,25.115S.43,35.664,2.121,34.986Z" transform="translate(26.67 37.361) rotate(150)" opacity="0.35" fill="url(#ad)"/>
                    </g>
                </g>
            </svg>
        </div>
    );
});

Layout.displayName = "BotTurned.Layout";
