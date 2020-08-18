import * as React from "react";
import { ControlMessage } from "./control-message";

export const ButtonControlMessage: React.FC<{}> = ({children}) => {
    const id = (children as any).props?.attribute
    return <ControlMessage>
        {children}
        <div className="btn-container v-align">
            <button id={id ? `${id}-submit` : undefined} type="submit" className="btn btn_action">
                <i className="icon icon_airplane"/>
            </button>
        </div>
    </ControlMessage>
};
