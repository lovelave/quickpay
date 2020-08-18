import * as React from "react";
import escape from "lodash/escape";
import snarkdown from "snarkdown";

export const markdown = (content: string): string => {
    const html = snarkdown(escape(content));
    return html.replace(
        /:([a-z]+):/, (name) =>
            `<span class="emoji emoji_${name.slice(1, name.length - 1)}"/>`
    );
};

export type MarkdownContentType = string | string[];
export interface MarkdownProps { content: MarkdownContentType }

export const Markdown: React.FC<MarkdownProps> = ({ content }) => {
    if (Array.isArray(content)) {
        return <>
            {content.map((item, i) => <Markdown content={item} key={i}/>)}
        </>
    }
    const __html = React.useMemo<string>(markdown.bind(undefined, content), [content]);
    return <p dangerouslySetInnerHTML={{ __html }}/>;
};
