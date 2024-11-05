import DefaultCheckbox from "../../default-checkbox";

export default function DaysOfWeekCheckbox() {

    const daysOfWeek = [
        { label: "Domingo", value: "Domingo" },
        { label: "Segunda", value: "monday" },
        { label: "Terça", value: "tuesday" },
        { label: "Quarta", value: "wednesday" },
        { label: "Quinta", value: "thursday" },
        { label: "Sexta", value: "friday" },
        { label: "Sábado", value: "saturday" },
    ];

    return (
        <div className="relative border border-slate-300 rounded-lg p-2 pb-0">
            <label className={`relative text-slate-400  transition-all pointer-events-none -top-[21px] left-2 text-sm bg-white px-1 font-semibold`}>
                Dias de Estudo
            </label>
            <div className="flex flex-wrap gap-3 pl-1 relative -top-4">
                {daysOfWeek.map((item, index) => (
                    <DefaultCheckbox label={item.label} key={index} checked />
                ))}
            </div >
        </div>
    )
}