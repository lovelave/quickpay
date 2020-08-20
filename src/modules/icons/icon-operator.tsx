import * as React from "react";
import { PhoneNumberOperator } from "modules/data/PhoneNumberList";
import { IconKyivstar } from "./IconKyivstar";
import { IconVodafone } from "./IconVodafone";

export const IconOperator: React.FC<{operator: PhoneNumberOperator}> = ({operator}) => {
    switch (operator) {
        case "kyivstar": {
           return <IconKyivstar />;
        }
        case "vodafone": {
          return <IconVodafone/>;
        }
    }
}
