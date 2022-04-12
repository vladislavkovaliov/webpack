import React from "react";

export interface InputProps {
    onChange: () => void;
    value: string;
    type: "text" | "password";
    name: string;
    id: string;
}

export function Input({
    onChange,
    value,
    name,
    id,
    type = "text",
}: InputProps) {
    return (
        <input
            onChange={onChange}
            className="py-1 px-2 outline-none bg-slate-800 text-white"
            name={name}
            id={id}
            type={type}
            value={value}
        />
    );
}
