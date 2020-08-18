import * as React from "react";

export const TypingSpinner: React.FC<{}> = React.memo(() => (
    <div className="typing-spinner">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
    </div>
));
TypingSpinner.displayName = "TypingSpinner";
