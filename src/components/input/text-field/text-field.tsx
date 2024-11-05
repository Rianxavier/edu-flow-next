import { useState } from "react"

interface TextFieldProps {
    label: string;
    type?: "text" | "password" | "date"
}

export default function TextField({ ...props }: TextFieldProps) {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className={`relative w-full border border-slate-300 rounded-lg flex items-center min-h-11
        ${isFocused && "border-blue-900 border-2"}`}>
            <input type={props.type ?? "text"} className="w-full px-5 outline-none bg-transparent text-gray-800 font-normal"
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => setIsFocused(e.target.value.length > 0 ? true : false)} />

            <label className={`absolute left-5 transition-all pointer-events-none ${props.type === "date" && "-top-[11px] left-[15px] text-sm bg-white px-1 font-semibold"}
                ${isFocused ? "-top-[11px] left-[15px] text-sm bg-white px-1 font-semibold text-blue-900" : "top-2 text-base font-medium text-slate-400 "}`}>
                {props.label}
            </label>
        </div>
    )
}