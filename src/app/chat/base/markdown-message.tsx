import * as React from "react";
import { MessageProps } from "./message";
import { WrapMessage } from "./wrap-message";
import { Markdown, MarkdownProps } from "./markdown";

export type MarkdownMessageProps = MessageProps & MarkdownProps;

export const MarkdownMessage: React.FC<MarkdownMessageProps> =
    React.memo(({ content, ...props }) => {
        return (
            <WrapMessage {...props}>
                <Markdown content={content}/>
            </WrapMessage>
        )
    });
MarkdownMessage.displayName = "MarkdownMessage";
