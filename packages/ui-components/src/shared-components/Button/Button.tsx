import React from "react";

export interface ButtonProps {
    onClick: () => void;
    text: string;
}

export function Button({ onClick, text }: ButtonProps) {
    return (
        <button className="bg-sky-500 uppercase" onClick={onClick}>
            {text}
        </button>
    );
}
