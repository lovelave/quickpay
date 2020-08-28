// tslint:disable:max-line-length
import * as React from "react";

export const Layout = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 220 220" className="bot bot_error">
            <defs>
                <radialGradient id="a" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff"/>
                    <stop offset="0.695" stopColor="#fff"/>
                    <stop offset="1" stopColor="#f5f5f5"/>
                </radialGradient>
                <filter id="b" x="9" y="10.175" width="221.181" height="221.181" filterUnits="userSpaceOnUse">
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="15" result="c"/>
                    <feFlood floodColor="#0081e0" floodOpacity="0.302"/>
                    <feComposite operator="in" in2="c"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <linearGradient id="d" x1="0.038" y1="0.895" x2="0.84" y2="0.234" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#0b5b90"/>
                    <stop offset="0.269" stopColor="#65c4ff"/>
                    <stop offset="0.755" stopColor="#fff"/>
                    <stop offset="1" stopColor="#fff"/>
                </linearGradient>
                <filter id="e" x="6.575" y="1.388" width="140.598" height="138.547" filterUnits="userSpaceOnUse">
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="10" result="f"/>
                    <feFlood floodColor="#37a6f7" floodOpacity="0.243"/>
                    <feComposite operator="in" in2="f"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <radialGradient id="g" cx="0.36" cy="0.591" r="0.402" gradientTransform="matrix(-0.457, -0.889, 2.349, -1.208, -1.185, 1.707)" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#0166ba"/>
                    <stop offset="0.3" stopColor="#2795f4"/>
                    <stop offset="1" stopColor="#93d5ff"/>
                </radialGradient>
                <linearGradient id="h" x1="0.038" y1="0.105" x2="0.84" y2="0.766" xlinkHref="#d"/>
                <filter id="i" x="91.968" y="1.387" width="140.597" height="138.547" filterUnits="userSpaceOnUse">
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="10" result="j"/>
                    <feFlood floodColor="#37a6f7" floodOpacity="0.243"/>
                    <feComposite operator="in" in2="j"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <radialGradient id="k" cx="0.36" cy="0.409" r="0.402" gradientTransform="matrix(-0.457, 0.889, 2.349, 1.208, -0.757, -0.487)" xlinkHref="#g"/>
                <radialGradient id="l" cx="0.5" cy="0.533" r="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff"/>
                    <stop offset="0.72" stopColor="#fff"/>
                    <stop offset="1" stopColor="#bce7ff"/>
                </radialGradient>
                <filter id="m" x="0" y="0" width="239.181" height="239.355" filterUnits="userSpaceOnUse">
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
                <filter id="q" x="37.249" y="110.194" width="48.526" height="69.238" filterUnits="userSpaceOnUse">
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
                <linearGradient id="u" x1="0.605" y1="0.971" x2="0.922" y2="-0.041" xlinkHref="#p"/>
                <filter id="v" x="153" y="110.195" width="48.526" height="69.238" filterUnits="userSpaceOnUse">
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
                <radialGradient id="ac" cx="0.514" cy="0.714" r="0.518" gradientTransform="matrix(0.927, 0.374, -0.387, 0.96, 0.314, -0.164)" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#b5ebff"/>
                    <stop offset="0.673" stopColor="#009dff"/>
                    <stop offset="0.906" stopColor="#11649d"/>
                    <stop offset="1" stopColor="#034b81"/>
                </radialGradient>
                <linearGradient id="ad" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#d5f0ff" stopOpacity="0.867"/>
                    <stop offset="1" stopColor="#739eff" stopOpacity="0"/>
                </linearGradient>
                <radialGradient id="ae" cx="0.423" cy="0.304" r="0.577" gradientTransform="matrix(1, 0, 0, 1.206, 0, -0.063)" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff"/>
                    <stop offset="0.72" stopColor="#fff" stopOpacity="0"/>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="af" x1="0.235" y1="0.977" x2="0.645" y2="0.09" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#fff" stopOpacity="0"/>
                    <stop offset="0.256" stopColor="#fff" stopOpacity="0.725"/>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="ag" x1="0.5" y1="0.945" x2="0.5" gradientUnits="objectBoundingBox">
                    <stop offset="0" stopColor="#33c0ff"/>
                    <stop offset="0.695" stopColor="#0d69af"/>
                    <stop offset="1" stopColor="#004c85"/>
                </linearGradient>
                <filter id="ah" x="108.097" y="131.201" width="23.919" height="26.045" filterUnits="userSpaceOnUse">
                    <feOffset/>
                    <feGaussianBlur stdDeviation="1" result="ai"/>
                    <feFlood floodColor="#02a7ff" floodOpacity="0.776"/>
                    <feComposite operator="in" in2="ai"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <filter id="aj" x="72" y="83.102" width="42" height="47.998" filterUnits="userSpaceOnUse">
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2" result="ak"/>
                    <feFlood floodColor="#fff"/>
                    <feComposite operator="in" in2="ak"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
                <filter id="al" x="126.727" y="83.102" width="42" height="47.998" filterUnits="userSpaceOnUse">
                    <feOffset/>
                    <feGaussianBlur stdDeviation="2" result="am"/>
                    <feFlood floodColor="#fff"/>
                    <feComposite operator="in" in2="am"/>
                    <feComposite in="SourceGraphic"/>
                </filter>
            </defs>
            <g transform="translate(23.495 31.2)">
                <g transform="translate(-1.3 0)">
                    <g transform="matrix(1, 0, 0, 1, -22.19, -31.2)" filter="url(#b)">
                        <circle cx="65.59" cy="65.59" r="65.59" transform="translate(54 51.17)" fill="url(#a)"/>
                    </g>
                    <g transform="translate(-0.195)">
                        <g id="ear-left" transform="matrix(0.97029600000000 0.24192200000000 -0.24192200000000 0.97029600000000 23.04100000000000 -15.84900000000000)">
                            <g transform="matrix(0.97, -0.24, 0.24, 0.97, -47.42, -4)" filter="url(#e)">
                                <path d="M37.4.55C22.75,6.387,8.265,32.633.558,54.144S67.553,39.631,64.142,35.769C46.559,4.452,47.14-2.159,37.4.55Z" transform="translate(36.57 49.31) rotate(-19)" fill="url(#d)"/>
                            </g>
                            <path d="M36-.037C26.1,3.909,9.819,26.727-.992,57.6,7.48,42.043,21.442,27.565,29.045,19.127,39.761,6.208,45.743-2.746,36-.037Z" transform="matrix(0.839, -0.545, 0.545, 0.839, 0.491, 34.727)" fill="url(#g)"/>
                            <path d="M4.25-1.682c6.5,6.963-6.754,45.3-4.023,71.2" transform="translate(30.697 14.4)" fill="none" stroke="#d8edff" strokeLinecap="round" strokeWidth="1"/>
                        </g>
                        <g id="ear-right" transform="matrix(-0.97029600000000 0.24192200000000 -0.24192200000000 -0.97029600000000 193.53800000000001 67.55200000000001)">
                            <g transform="matrix(-0.97, -0.24, 0.24, -0.97, 185.25, 147.96)" filter="url(#i)">
                                <path d="M37.4,60.4C22.75,54.561,8.265,28.315.558,6.8S67.553,21.317,64.142,25.179C46.558,56.5,47.14,63.107,37.4,60.4Z" transform="translate(182.72 106.93) rotate(-161)" fill="url(#h)"/>
                            </g>
                            <path d="M36.993,57.632C27.091,53.687,10.811,30.869,0,0,8.472,15.553,22.434,30.031,30.037,38.469,40.753,51.387,46.735,60.342,36.993,57.632Z" transform="matrix(0.839, 0.545, -0.545, 0.839, 31.653, 2.54)" fill="url(#k)"/>
                            <path d="M4.4,71.2C10.9,64.234-2.355,25.9.376,0" transform="translate(31.171 2.197)" fill="none" stroke="#d8edff" strokeLinecap="round" strokeWidth="1"/>
                        </g>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -22.19, -31.2)" filter="url(#m)">
                        <path d="M65.762-.174A65.677,65.677,0,1,1,0,65.59,65.593,65.593,0,0,1,65.762-.174Z" transform="translate(54 51.17)" fill="url(#l)"/>
                    </g>
                    <path d="M18.528,64.262c2.593-2.551-5.22-6.334-2.093-8.348,3.269-1.848,9.552,12.506,36.811,12.8" transform="translate(44.191 76.738)" fill="none" stroke="#2fb6ef" strokeLinecap="round" strokeWidth="0.5" opacity="0.647"/>
                    <path d="M50.974,64.262c-2.593-2.551,5.22-6.334,2.093-8.348-3.269-1.849-9.552,12.507-36.811,12.8" transform="translate(81.191 76.738)" fill="none" stroke="#2fb6ef" strokeLinecap="round" strokeWidth="0.5" opacity="0.647"/>
                    <path d="M46,6.409c13.961-.105,40.227-8.8,40.227-3S69.071,19.053,46,19.337,2.173,9.21,2.173,3.411,32.039,6.514,46,6.409Z" transform="translate(53.805 133.302)" opacity="0.996" fill="url(#o)"/>
                </g>
                <g transform="translate(-0.301 0)">
                    <g id="antenna-left" transform="matrix(1, 0, 0 1 17.35800000000000 80.88400000000000)">
                        <g transform="matrix(1, 0, 0, 1, -40.55, -112.08)" filter="url(#q)">
                            <path d="M13.585,2.386C10.368,6.912,7.348,24.392,7.251,33.252a66.132,66.132,0,0,0,5,24.836c-.081.182-.1,1.884-1.589-.082C5.817,51.64-.848,34.24-.245,19.942S11.489,1.431,13.585,2.386Z" transform="translate(40.55 117.89) rotate(-25)" fill="url(#p)"/>
                        </g>
                        <path d="M10.36-5.553C11.792-4.232,6.012,6.214,4.641,15.1a58.454,58.454,0,0,0-.678,14.34c.045.124.179,1.081-.83-.111C-.282,24.523-1.766,10.716.458,1.872,2.692-7.017,8.927-6.874,10.36-5.553Z" transform="translate(3.347 13.558) rotate(-25)" fill="url(#s)"/>
                        <path d="M8.5-5.264C10.2-4.372,3.215-3.17,1.839,5.4S.482,23.711,3.174,28.953C-1.9,19.857.686,3.938.741,3.68,2.517-4.77,6.809-6.156,8.5-5.264Z" transform="translate(3.347 13.557) rotate(-25)" opacity="0.485" fill="url(#t)"/>
                    </g>
                    <g id="antenna-right" transform="matrix(1 0 0 1 137.80699999999999 82.99500000000000)">
                        <g transform="matrix(1, 0, 0, 1, -161, -114.19)" filter="url(#v)">
                            <path d="M13.868,56.56c-3.217-4.526-6.236-22.006-6.334-30.866a66.133,66.133,0,0,1,5-24.836c-.081-.182-.1-1.884-1.589.082C6.1,7.305-.565,24.706.038,39S11.773,57.515,13.868,56.56Z" transform="translate(173.57 171.43) rotate(-155)" fill="url(#u)"/>
                        </g>
                        <path d="M10.956,35.479c1.433-1.321-4.348-11.767-5.719-20.657A58.455,58.455,0,0,1,4.56.481C4.6.357,4.739-.6,3.73.592.314,5.4-1.169,19.21,1.054,28.054,3.288,36.943,9.524,36.8,10.956,35.479Z" transform="translate(21.769 38.822) rotate(-155)" fill="url(#x)"/>
                        <path d="M8.471,34.217c1.7-.892-5.29-2.093-6.666-10.667S.448,5.242,3.14,0C-1.934,9.1.652,25.015.707,25.273,2.484,33.723,6.775,35.109,8.471,34.217Z" transform="translate(21.609 37.673) rotate(-155)" opacity="0.485" fill="url(#y)"/>
                    </g>
                </g>
                <g id="forhead" transform="matrix(1 0 0 1 27.82500000000000 7.56600000000000)" opacity="0.997">
                    <g transform="translate(0 15.021)" opacity="0.518">
                        <path d="M15.507,73c0-16.077,15.023-60.538,64.73-60.538S146.75,57.65,146.75,73s-4.478,26.032-22.618,26.032-30.19-11.555-43.016-11.2-23.672,11.2-42.862,11.2S15.507,89.078,15.507,73Z" transform="translate(-12.795 -13.17)" opacity="0.395" fill="url(#z)"/>
                        <path d="M15.612,71.844c0-15.764,15.418-59.271,65.5-59.271s65.447,44.751,65.447,59.8-5.291,25.979-23.431,25.979-29.19-11.33-42.016-10.983S59.444,98.355,40.253,98.355,15.612,87.609,15.612,71.844Z" transform="translate(-12.795 -13.17)" fill="url(#aa)"/>
                    </g>
                    <g transform="translate(5.238 15.426)">
                        <path d="M14.475,70.633c0-15.431,13.425-56.051,62.316-56.051S139.108,55.9,139.108,70.633s-7,25.949-23.961,25.949-24.879-9.772-38.355-9.772-19.331,9.772-37.276,9.772S14.475,86.064,14.475,70.633Z" transform="translate(-13.614 -13.575)" fill="url(#ab)"/>
                        <path d="M14.475,68.582c0-13.9,16.629-54,60-54s60,40.07,60,54-9.509,22.939-24.409,25.577-22.608-9.991-35.591-9.991S57.409,95.032,42.692,94.159,14.475,82.487,14.475,68.582Z" transform="translate(-11.314 -13.574)" fill="url(#ac)"/>
                    </g>
                    <path d="M39.459.039c22.962,0,37.029,10.921,40.676,18.525,3.7,8.826-15.095,16.249-40.676,16.406-22.044.136-41.6-8.021-39.923-16.642C1.675,10.215,18.38.039,39.459.039Z" transform="translate(28.941 19.462)" fill="url(#ad)"/>
                    <path d="M38.051,12.861A15.562,15.562,0,0,1,40,20.5c0,11.322-8.054,20.016-19.1,20.016-7.566,0-15.052-3.822-18.589-10.44.19.069,6.753-7.343,16.276-11.343A104.37,104.37,0,0,1,38.051,12.861Z" transform="translate(23.451 -0.223)" opacity="0.782" fill="url(#ae)"/>
                    <path d="M27.294,79.751c-9.2-5.539-8.144-30.779,6.442-51.644,4.456-6.069,18.351-14.552,18.329-13.313C42.788,33.181,42.026,54.666,50.4,85.1,42.237,88.034,29.211,81.507,27.294,79.751Z" transform="translate(-6.339 9.348)" opacity="0.546" fill="url(#af)"/>
                </g>
                <g transform="translate(55.505 62.334)">
                    <g id="mouth" transform="matrix(1 0 0 1 29.527 40.667)">
                        <g id="mouth-scale" transform="matrix(1 0 0 1 -108.52999999999999 -134.19999999999999)" filter="url(#ah)">
                            <path d="M154.131,123.891s-3.679-7.279-7.774-7.279-7.762,7.279-7.762,7.279-5.687,12.766,7.762,12.766S154.131,123.891,154.131,123.891Z" transform="translate(-26.3 17.59)" fill="url(#ag)"/>
                            <path d="M136.978,131.526c.976,2.205,2.611,5.132,9,5.132,6.366,0,8.078-3.063,8.915-4.967C151.868,136.817,139.74,136.471,136.978,131.526Z" transform="translate(-26.3 17.59)" fill="#8dd6ff" opacity="0.683"/>
                        </g>
                    </g>
                    <g id="eyes" transform="matrix(1 0 0 1 -1 0)">
                        <g id="eye-left" transform="matrix(1, 0, 0, 1, -78, -93.53)" filter="url(#aj)">
                            <path d="M245.046,71.514c.456,3.314,3.457,10.769,9.595,10.769s18.314-3.914,19.681-5.205.278-10.709-1.251-16.679-5.825-16.623-16.825-13.577S244.589,68.2,245.046,71.514Z" transform="translate(-166.94 42.82)" fill="#fff"/>
                        </g>
                        <g id="eye-right" transform="matrix(1, 0, 0, 1, -78, -93.53)" filter="url(#al)">
                            <path d="M274.843,71.514c-.456,3.314-3.457,10.769-9.595,10.769s-18.315-3.914-19.681-5.205-.278-10.71,1.251-16.679,5.825-16.623,16.825-13.577S275.3,68.2,274.843,71.514Z" transform="translate(-112.22 42.82)" fill="#fff"/>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Layout.displayName = "BotError.Layout";
