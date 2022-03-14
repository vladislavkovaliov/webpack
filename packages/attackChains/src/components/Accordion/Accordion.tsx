import React, { useCallback, useState } from "react";

export interface TitleProps {
    text: string;

    length: number;
}

export function Title({ text, length }: TitleProps
) {
    return (
        <>
            {text} <span className="font-bold">({length}) </span>
        </>
    );
}

export interface AccordionProps {
    title: React.ReactNode;
    length: number;
    children: React.ReactNode;
    depth: number;
}

export function Accordion({ title, length, children, depth }: AccordionProps) {
    const [active, setActive] = useState<boolean>(false);

    const handleClick = useCallback(() => setActive((x) => !x), []);

    return (
        <div>
            <div
                onClick={handleClick}
                className={`border-b-2 border-gray-200 py-3 px-3 flex justify-between pr-6 ${
                    depth === 1 && "border-2 shadow-lg rounded-md"
                }`}
            >
                <div className="font-light">{title}</div>
                <div>
                    <span className="font-bold">{length} </span>
                    <span className="font-light">{length > 1 ? "items" : "item"}</span>
                </div>
            </div>
            <div
                style={{
                    // Dirty hack because there is no possible to setup tailwind config
                    transition: "max-height 0.3s ease-out 0s",
                    maxHeight: active ? "1000px" : "0"
                }}
                className={`overflow-hidden h-auto`}
            >
                {children}
            </div>
        </div>
    );
}
