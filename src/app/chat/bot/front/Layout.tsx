// tslint:disable:max-line-length
import * as React from "react";

export const Layout = () => {
    const gradientDefault = "0.927, 0.374, -0.387, 0.96, 0.314, -0.164";
    const gradientModified = "0.996, -0.094, 0.075, 0.799, -0.052, 0.192";
    const eyeRightBasic = "M276.270000,66.979000C275.792000,69.698000,272.648000,75.812000,266.217000,75.812000C259.786000,75.812000,247.028000,72.602000,245.597000,71.542000C244.166000,70.482000,245.305000,62.758000,246.908000,57.861000C248.511000,52.964000,253.008000,44.226000,264.536000,46.725000C276.064000,49.224000,276.748000,64.261000,276.270000,66.979000Z";
    const eyeRightBlink = "M276.270000,66.979000C275.792000,69.698000,268.540193,65.529785,262.109193,65.217000C250.204460,64.904215,246.089645,71.976430,245.597000,71.542000C244.166000,70.482000,247.163394,67.768114,250.643103,65.217000C254.904775,62.353100,262.726873,60.864531,267.530000,61.956000C272.645912,63.047468,276.748000,64.261000,276.270000,66.979000Z";
    const eyeLeftBasic = "M245.051000,66.979000C245.529000,69.698000,248.673000,75.812000,255.103000,75.812000C261.533000,75.812000,274.291000,72.602000,275.723000,71.542000C277.155000,70.482000,276.015000,62.758000,274.412000,57.861000C272.809000,52.964000,268.312000,44.226000,256.784000,46.725000C245.256000,49.224000,244.573000,64.261000,245.051000,66.979000Z";
    const eyeLeftBlink = "M245.051000,66.979000C246.623747,69.541607,257.481616,62.714722,265.475540,65.217000C273.625857,68.188455,274.916570,72.132823,275.723000,71.542000C277.155000,70.482000,272.957820,66.400722,269.790897,64.006000C264.278088,61.142101,259.798314,60.082570,252.180124,61.956000C248.628136,63.047469,243.478253,64.730177,245.051000,66.979000Z";
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="35 35 220 220" className="bot bot_full-face">
            <defs>
                <radialGradient id="a" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff"/>
                    <stop offset="0.695" stopColor="#fff"/>
                    <stop offset="1" stopColor="#f5f5f5"/>
                </radialGradient>
                <filter id="b" x="0" y="0" width="296.181" height="296.181" filterUnits="userSpaceOnUse">
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="27.5" result="c"/>
                    <feFlood floodColor="#0081e0" floodOpacity="0.384"/>
                    <feComposite operator="in" in2="c"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <linearGradient id="d" x1="0.043" y1="0.123" x2="0.848" y2="0.759" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#0b5b90"/>
                    <stop offset="0.269" stopColor="#65c4ff"/>
                    <stop offset="0.755" stopColor="#fff"/>
                    <stop offset="1" stopColor="#fff"/>
                </linearGradient>
                <filter id="e" x="127.5" y="30.525" width="147.084" height="146.111" filterUnits="userSpaceOnUse">
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="10" result="f"/>
                    <feFlood floodColor="#37a6f7" floodOpacity="0.243"/>
                    <feComposite operator="in" in2="f"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <radialGradient id="g" cx="0.388" cy="0.44" r="0.332" gradientTransform="matrix(-0.615, 0.788, -1.827, -1.426, 1.532, 0.72)" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#0166ba"/>
                    <stop offset="0.3" stopColor="#2795f4"/>
                    <stop offset="1" stopColor="#93d5ff"/>
                </radialGradient>
                <linearGradient id="h" x1="0.038" y1="0.895" x2="0.84" y2="0.234" xlinkHref="#d"/>
                <filter id="i" x="21.841" y="30.525" width="147.084" height="146.112" filterUnits="userSpaceOnUse">
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="10" result="j"/>
                    <feFlood floodColor="#37a6f7" floodOpacity="0.243"/>
                    <feComposite operator="in" in2="j"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <radialGradient id="k" cx="0.36" cy="0.591" r="0.402" gradientTransform="matrix(-0.457, -0.889, 2.349, -1.208, -1.185, 1.707)" xlinkHref="#g"/>
                <radialGradient id="l" cx="0.5" cy="0.533" r="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff"/>
                    <stop offset="0.72" stopColor="#fff"/>
                    <stop offset="1" stopColor="#bce7ff"/>
                </radialGradient>
                <filter id="m" x="28.5" y="27.325" width="239.181" height="239.355" filterUnits="userSpaceOnUse">
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="18" result="n"/>
                    <feFlood floodColor="#1098ff" floodOpacity="0.098"/>
                    <feComposite operator="in" in2="n"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <radialGradient id="o" cx="0.5" cy="0.624" r="0.506" gradientTransform="translate(0.081 -0.069) rotate(8.622)" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff"/>
                    <stop offset="0.578" stopColor="#fff" stopOpacity="0"/>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="p" x1="0.485" y1="0.266" x2="0.809" y2="1.019" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#f5fcff"/>
                    <stop offset="1" stopColor="#ccefff"/>
                </linearGradient>
                <filter id="q" x="65.749" y="137.519" width="48.526" height="69.238" filterUnits="userSpaceOnUse">
                    <feOffset dx="2" dy="2"/>
                    <feGaussianBlur stdDeviation="2" result="r"/>
                    <feFlood floodColor="#1e91f4" floodOpacity="0.447"/>
                    <feComposite operator="in" in2="r"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <radialGradient id="s" cx="0.411" cy="0.229" r="0.714" gradientTransform="matrix(-0.784, 0.621, -0.22, -0.278, 0.784, 0.037)" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#72d9ff"/>
                    <stop offset="0.587" stopColor="#009dff"/>
                    <stop offset="0.852" stopColor="#0079dc"/>
                    <stop offset="1" stopColor="#006cc9"/>
                </radialGradient>
                <linearGradient id="t" x1="0.904" y1="0.006" x2="0.135" y2="1.003" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff"/>
                    <stop offset="0.32" stopColor="#f8fcff"/>
                    <stop offset="1" stopColor="#006e9f"/>
                </linearGradient>
                <filter id="v" x="181.5" y="137.52" width="48.526" height="69.238" filterUnits="userSpaceOnUse">
                    <feOffset dx="-2" dy="2"/>
                    <feGaussianBlur stdDeviation="2" result="w"/>
                    <feFlood floodColor="#1e91f4" floodOpacity="0.447"/>
                    <feComposite operator="in" in2="w"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <radialGradient id="x" cx="0.411" cy="0.771" r="0.714" gradientTransform="matrix(-0.784, -0.621, -0.22, 0.278, 0.903, 0.812)" xlinkHref="#s"/>
                <linearGradient id="y" x1="0.904" y1="0.994" x2="0.135" y2="-0.003" xlinkHref="#t"/>
                <linearGradient id="z" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#9dd2ff"/>
                    <stop offset="1" stopColor="#00a8ff"/>
                </linearGradient>
                <linearGradient id="aa" x1="0.5" x2="0.5" y2="0.918" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#f2f9ff"/>
                    <stop offset="0.155" stopColor="#71c1ff"/>
                    <stop offset="0.649" stopColor="#6cc6ff"/>
                    <stop offset="1" stopColor="#d8f1ff"/>
                </linearGradient>
                <radialGradient id="ab" cx="0.5" cy="0.5" r="0.986" gradientTransform="translate(0.182 0.17) scale(0.637 0.66)" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#21bbf4"/>
                    <stop offset="0.842" stopColor="#58b2ff"/>
                    <stop offset="1" stopColor="#0065bc"/>
                </radialGradient>
                <radialGradient id="gradient2" cx="0.514" cy="0.714" r="0.518" gradientTransform="matrix(0.927, 0.374, -0.387, 0.96, 0.314, -0.164)" gradientUnits="objectBoundingBox">
                    <animateTransform
                        attributeName="gradientTransform"
                        type="matrix"
                        values={`${gradientDefault}; ${gradientDefault}; ${gradientModified}; ${gradientDefault};`}
                        dur="2.5s"
                        repeatCount="indefinite"
                        keyTimes="0; .87; .9; 1"
                    />
                    <stop offset="0" stopColor="#b5ebff"/>
                    <stop offset="0.673" stopColor="#009dff">
                        <animate
                            attributeName="offset"
                            values="0.673;0.673;0.456;0.673;0.673"
                            dur="2.5s"
                            repeatCount="indefinite"
                            keyTimes="0; .87; .9; .95; 1"
                        />
                    </stop>
                    <stop offset="0.906" stopColor="#11649d"/>
                    <stop offset="1" stopColor="#034b81"/>
                </radialGradient>
                <linearGradient id="ad" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#d5f0ff" stopOpacity="0.867"/>
                    <stop offset="1" stopColor="#739eff" stopOpacity="0"/>
                </linearGradient>
                <radialGradient id="ae" cx="0.5" cy="0.5" r="0.506" gradientTransform="translate(0.081 -0.069) rotate(8.622)" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff"/>
                    <stop offset="0.685" stopColor="#fff" stopOpacity="0"/>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="af" x1="0.235" y1="0.977" x2="0.645" y2="0.09" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff" stopOpacity="0.059"/>
                    <stop offset="0.207" stopColor="#fff" stopOpacity="0.937"/>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="ag" x1="0.5" y1="0.945" x2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#33c0ff"/>
                    <stop offset="0.695" stopColor="#0d69af"/>
                    <stop offset="1" stopColor="#004c85"/>
                </linearGradient>
                <filter id="ah" x="132.311" y="158.526" width="32.557" height="26.045" filterUnits="userSpaceOnUse">
                    <feOffset/>
                    <feGaussianBlur stdDeviation="1" result="ai"/>
                    <feFlood floodColor="#02a7ff" floodOpacity="0.776"/>
                    <feComposite operator="in" in2="ai"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <filter id="aj" x="98.5" y="114.859" width="43.432" height="41.527" filterUnits="userSpaceOnUse">
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2" result="ak"/>
                    <feFlood floodColor="#fff"/>
                    <feComposite operator="in" in2="ak"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <filter id="al" x="155.227" y="114.859" width="43.432" height="41.527" filterUnits="userSpaceOnUse">
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2" result="am"/>
                    <feFlood floodColor="#fff"/>
                    <feComposite operator="in" in2="am"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
            </defs>
            <g transform="translate(51.995 58.525)">
                <g transform="translate(-1.3 0)">
                    <g transform="matrix(1, 0, 0, 1, -50.69, -58.52)" filter="url(#b)">
                        <circle cx="65.59" cy="65.59" r="65.59" transform="translate(82.5 78.5)" fill="url(#a)"/>
                    </g>
                    <g transform="translate(-0.195)">
                        <g id="ear-right" transform="matrix(1 0 0 1 107 -1)">
                            <g transform="matrix(1, 0, 0, 1, -157.5, -57.53)" filter="url(#e)">
                                <path d="M37.4,60.4C22.75,54.561,8.265,28.316.558,6.8S67.553,21.317,64.142,25.179C46.559,56.5,47.14,63.107,37.4,60.4Z" transform="matrix(-0.84, -0.54, 0.54, -0.84, 211.39, 143.64)" fill="url(#d)"/>
                            </g>
                            <path d="M36.993,57.633C27.091,53.687,10.811,30.869,0,0,8.472,15.553,22.434,30.031,30.037,38.469,40.753,51.388,46.735,60.342,36.993,57.633Z" transform="matrix(-0.839, -0.545, 0.545, -0.839, 56.056, 83.571)" fill="url(#g)"/>
                            <path d="M1.667-1.682c-6.5,6.963,6.754,45.3,4.023,71.2" transform="translate(50.471 14.4)" fill="none" stroke="#d8edff" strokeLinecap="round" strokeWidth="1"/>
                        </g>
                        <g id="ear-left" transform="matrix(1 0 0 1 1.34100000000001 -1)">
                            <g transform="matrix(1, 0, 0, 1, -51.84, -57.52)" filter="url(#i)">
                                <path d="M37.4.55C22.75,6.387,8.265,32.633.558,54.144S67.553,39.631,64.142,35.769C46.559,4.452,47.14-2.159,37.4.55Z" transform="matrix(0.84, -0.54, 0.54, 0.84, 51.84, 92.52)" fill="url(#h)"/>
                            </g>
                            <path d="M36-.037C26.1,3.909,9.819,26.727-.992,57.6,7.48,42.043,21.442,27.565,29.045,19.127,39.761,6.208,45.743-2.746,36-.037Z" transform="matrix(0.839, -0.545, 0.545, 0.839, 0.491, 34.727)" fill="url(#k)"/>
                            <path d="M4.25-1.682c6.5,6.963-6.754,45.3-4.023,71.2" transform="translate(30.697 14.4)" fill="none" stroke="#d8edff" strokeLinecap="round" strokeWidth="1"/>
                        </g>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -50.69, -58.52)" filter="url(#m)">
                        <path d="M65.762-.174A65.677,65.677,0,1,1,0,65.59,65.593,65.593,0,0,1,65.762-.174Z" transform="translate(82.5 78.5)" fill="url(#l)"/>
                    </g>
                    <path d="M18.528,64.262c2.593-2.551-5.22-6.334-2.093-8.348,3.269-1.848,9.552,12.506,36.811,12.8" transform="translate(44.191 76.738)" fill="none" stroke="#2fb6ef" strokeLinecap="round" strokeWidth="0.5" opacity="0.647"/>
                    <path d="M50.974,64.262c-2.593-2.551,5.22-6.334,2.093-8.348-3.269-1.849-9.552,12.507-36.811,12.8" transform="translate(81.191 76.738)" fill="none" stroke="#2fb6ef" strokeLinecap="round" strokeWidth="0.5" opacity="0.647"/>
                    <path d="M46,6.409c13.961-.105,40.227-8.8,40.227-3S69.071,19.053,46,19.337,2.173,9.21,2.173,3.411,32.039,6.514,46,6.409Z" transform="translate(53.805 133.302)" opacity="0.996" fill="url(#o)"/>
                </g>
                <g transform="translate(-0.301 0)">
                    <g transform="translate(17.358 80.884)">
                        <g transform="matrix(1, 0, 0, 1, -69.05, -139.41)" filter="url(#q)">
                            <path d="M13.585,2.386C10.368,6.912,7.348,24.392,7.251,33.252a66.132,66.132,0,0,0,5,24.836c-.081.182-.1,1.884-1.589-.082C5.817,51.64-.848,34.24-.245,19.942S11.489,1.431,13.585,2.386Z" transform="translate(69.05 145.21) rotate(-25)" fill="url(#p)"/>
                        </g>
                        <path d="M10.36-5.553C11.792-4.232,6.012,6.214,4.641,15.1a58.454,58.454,0,0,0-.678,14.34c.045.124.179,1.081-.83-.111C-.282,24.523-1.766,10.716.458,1.872,2.692-7.017,8.927-6.874,10.36-5.553Z" transform="translate(3.347 13.558) rotate(-25)" fill="url(#s)"/>
                        <path d="M8.5-5.264C10.2-4.372,3.215-3.17,1.839,5.4S.482,23.711,3.174,28.953C-1.9,19.857.686,3.938.741,3.68,2.517-4.77,6.809-6.156,8.5-5.264Z" transform="translate(3.347 13.557) rotate(-25)" opacity="0.485" fill="url(#t)"/>
                    </g>
                    <g transform="translate(137.807 82.995)">
                        <g transform="matrix(1, 0, 0, 1, -189.5, -141.52)" filter="url(#v)">
                            <path d="M13.868,56.56c-3.217-4.526-6.236-22.006-6.334-30.866a66.133,66.133,0,0,1,5-24.836c-.081-.182-.1-1.884-1.589.082C6.1,7.305-.565,24.706.038,39S11.773,57.515,13.868,56.56Z" transform="translate(202.07 198.76) rotate(-155)" fill="url(#p)"/>
                        </g>
                        <path d="M10.956,35.479c1.433-1.321-4.348-11.767-5.719-20.657A58.455,58.455,0,0,1,4.56.481C4.6.357,4.739-.6,3.73.592.314,5.4-1.169,19.21,1.054,28.054,3.288,36.943,9.524,36.8,10.956,35.479Z" transform="translate(21.769 38.822) rotate(-155)" fill="url(#x)"/>
                        <path d="M8.471,34.217c1.7-.892-5.29-2.093-6.666-10.667S.448,5.242,3.14,0C-1.934,9.1.652,25.015.707,25.273,2.484,33.723,6.775,35.109,8.471,34.217Z" transform="translate(21.609 37.673) rotate(-155)" opacity="0.485" fill="url(#y)"/>
                    </g>
                </g>
                <g id="forhead" transform="matrix(1 0 0 1 27.825 7.566)" opacity="0.997">
                    <g transform="translate(0 15.021)" opacity="0.518">
                        <path d="M15.507,73c0-16.077,15.023-60.538,64.73-60.538S146.75,57.65,146.75,73s-4.478,26.032-22.618,26.032-30.19-11.555-43.016-11.2-23.672,11.2-42.862,11.2S15.507,89.078,15.507,73Z" transform="translate(-12.795 -13.17)" opacity="0.395" fill="url(#z)"/>
                        <path d="M15.612,71.844c0-15.764,15.418-59.271,65.5-59.271s65.447,44.751,65.447,59.8-5.291,25.979-23.431,25.979-29.19-11.33-42.016-10.983S59.444,98.355,40.253,98.355,15.612,87.609,15.612,71.844Z" transform="translate(-12.795 -13.17)" fill="url(#aa)"/>
                    </g>
                    <g transform="translate(5.238 15.426)">
                        <path d="M14.475,70.633c0-15.431,13.425-56.051,62.316-56.051S139.108,55.9,139.108,70.633s-7,25.949-23.961,25.949-24.879-9.772-38.355-9.772-19.331,9.772-37.276,9.772S14.475,86.064,14.475,70.633Z" transform="translate(-13.614 -13.575)" fill="url(#ab)"/>
                        <path d="M14.475,68.582c0-13.9,16.629-54,60-54s60,40.07,60,54-9.509,22.939-24.409,25.577-22.608-9.991-35.591-9.991S57.409,95.032,42.692,94.159,14.475,82.487,14.475,68.582Z" transform="translate(-11.314 -13.574)" fill="url(#gradient2)"/>
                    </g>
                    <path d="M39.459.039c22.962,0,37.029,10.921,40.676,18.525,3.7,8.826-15.095,16.249-40.676,16.406-22.044.136-41.6-8.021-39.923-16.642C1.675,10.215,18.38.039,39.459.039Z" transform="translate(28.941 19.462)" fill="url(#ad)"/>
                    <path d="M38.051,12.861A15.562,15.562,0,0,1,40,20.5c0,11.322-8.054,20.016-19.1,20.016-7.566,0-15.052-3.822-18.589-10.44.19.069,6.753-7.343,16.276-11.343A104.37,104.37,0,0,1,38.051,12.861Z" transform="translate(22.167 -0.223)" opacity="0.782" fill="url(#ae)"/>
                    <path d="M27.294,79.751c-9.2-5.539-8.144-30.779,6.442-51.644,4.456-6.069,18.351-14.552,18.329-13.313C42.788,33.181,42.026,54.666,50.4,85.1,42.237,88.034,29.211,81.507,27.294,79.751Z" transform="translate(-6.339 9.348)" opacity="0.546" fill="url(#af)"/>
                </g>
                <g transform="translate(55.505 62.334)">
                    <g id="mouth" transform="matrix(1 0 0 1 29.52700000000000 40.66700000000000)">
                        <g transform="matrix(1, 0, 0, 1, -137.03, -161.53)" filter="url(#ah)">
                            <path d="M159.672,118.885a52.206,52.206,0,0,0-13.314-2.272,51.323,51.323,0,0,0-13.242,2.272s.7,17.772,13.242,17.772S159.672,118.885,159.672,118.885Z" transform="translate(2.2 44.91)" fill="url(#ag)"/>
                        </g>
                        <path d="M136.978,131.526a10.794,10.794,0,0,0,9.379,5.132,11.006,11.006,0,0,0,9.285-4.967C150.3,136.126,143.491,137.494,136.978,131.526Z" transform="translate(-134.831 -116.613)" fill="#8dd6ff" opacity="0.683"/>
                    </g>
                    <g transform="translate(-1)">
                        <g transform="matrix(1, 0, 0, 1, -106.5, -120.86)" filter="url(#aj)">
                            <path id="eye-left" d="M245.051000,66.979000C245.529000,69.698000,248.673000,75.812000,255.103000,75.812000C261.533000,75.812000,274.291000,72.602000,275.723000,71.542000C277.155000,70.482000,276.015000,62.758000,274.412000,57.861000C272.809000,52.964000,268.312000,44.226000,256.784000,46.725000C245.256000,49.224000,244.573000,64.261000,245.051000,66.979000Z" transform="matrix(1 0 0 1 -140.44000000000000 74.56999999999999)" opacity="1" fill="rgb(255,255,255)" />
                        </g>
                        <g transform="matrix(1, 0, 0, 1, -106.5, -120.86)" filter="url(#al)">
                            <path id="eye-right" d="M276.270000,66.979000C275.792000,69.698000,272.648000,75.812000,266.217000,75.812000C259.786000,75.812000,247.028000,72.602000,245.597000,71.542000C244.166000,70.482000,245.305000,62.758000,246.908000,57.861000C248.511000,52.964000,253.008000,44.226000,264.536000,46.725000C276.064000,49.224000,276.748000,64.261000,276.270000,66.979000Z" transform="matrix(1 0 0 1 -83.72000000000003 74.56999999999999)" opacity="1" fill="rgb(255,255,255)" />
                        </g>
                    </g>
                </g>
            </g>
            <animate
                xlinkHref="#eye-right"
                attributeName="d"
                dur="2.5s"
                repeatCount="indefinite"
                keyTimes="0; .88; .95; .98; 1"
                values={`${eyeRightBasic}; ${eyeRightBasic}; ${eyeRightBlink}; ${eyeRightBasic}; ${eyeRightBasic}`}
            />
            <animate
                xlinkHref="#eye-left"
                attributeName="d"
                dur="2.5s"
                repeatCount="indefinite"
                keyTimes="0; .88; .95; .98; 1"
                values={`${eyeLeftBasic}; ${eyeLeftBasic}; ${eyeLeftBlink}; ${eyeLeftBasic}; ${eyeLeftBasic}`}
            />
        </svg>
    );
}

Layout.displayName = "BotFullFace.Layout";
