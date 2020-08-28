import * as React from "react";
import dayjs from "dayjs";

export const Time: React.FC<{ value: dayjs.ConfigType }> = React.memo(({ value }) => {
    const d = dayjs(value);
    return <time dateTime={d.toISOString()}>{d.format("HH:mm")}</time>;
});
