import React from "react";

interface AccordionProps {
    title: string;
    content: React.ReactNode;
    isAccordionOpen?: boolean;
}

export default function Accordion({title, content, isAccordionOpen=true}: AccordionProps) {
    return (
        <details open={isAccordionOpen}>
            <summary>{title}</summary>
            <div>{content}</div>
        </details>
    );
}