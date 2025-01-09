import React from "react";

interface AccordionProps {
    title: string;
    content: React.ReactNode;
    isAccordionOpen?: boolean;
    className?: string;
}

export default function Accordion({title, className="", content, isAccordionOpen=true}: AccordionProps) {
    return (
        <details open={isAccordionOpen} className={className}>
            <summary>{title}</summary>
            <div>{content}</div>
        </details>
    );
}