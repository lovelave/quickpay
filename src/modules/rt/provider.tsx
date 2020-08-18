import * as React from "react";

import * as RealTime from "@bobra-rt/client";
import * as RTReactRouter from "@bobra-rt/client-react-router";

export const Provider: React.FC<{ url: string }> = ({ children, url }) => {
    React.useEffect(() => {
        console.log(`Using RealTime application module: ${url}`);
    }, [ url ]);
    const [ realTime ] = RealTime.Manager.useState(url);

    return (
        <RealTime.Manager.Context.Provider value={realTime}>
            <RealTime.Analytics.Provider>
                <RTReactRouter.TrackPageView/>
                {children}
            </RealTime.Analytics.Provider>
        </RealTime.Manager.Context.Provider>
    );
};
Provider.displayName = "Rt.Wrapper";
