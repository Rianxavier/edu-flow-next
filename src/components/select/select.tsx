import { useCallback, useState } from "react"

export default function Select() {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState<string | null>(null)

    const options = [{ tema: "back-end" }, { tema: "Front-end" }, { tema: "Inglês" }]

    const handleChange = useCallback((value: string) => {
        setValue(value)
        setIsOpen(false)
    }, [])

    return (
        <div className="relative">
            <div className={`relative w-full border border-slate-300 rounded-lg flex items-center h-11 px-5 cursor-pointer flex-row justify-between
            ${value !== null && "border-blue-900 border-2"}`}
                onClick={() => setIsOpen(!isOpen)}>

                <label className={`absolute transition-all pointer-events-none 
                ${value !== null ? "-top-[11px] left-2 text-sm bg-white px-1 font-semibold text-blue-900" : "top-2 text-base font-medium text-slate-400 "}`}>
                    Tema de Estudo
                </label>

                <span className="text-gray-900 font-normal">{value}</span>

                <div>s</div>
            </div>

            {isOpen &&
                <div className="absolute top-12 left-0 w-full border border-slate-300 rounded-lg bg-white flex flex-col gap-1 z-50 max-h-[160px] overflow-auto">
                    {options.map((item, index) => (
                        <span key={index} className="cursor-pointer font-semibold text-base text-slate-600 py-2 px-5 rounded-md hover:bg-slate-100" onClick={() => handleChange(item.tema)}>
                            {item.tema}
                        </span>
                    ))}
                </div>}
        </div>
    )
}