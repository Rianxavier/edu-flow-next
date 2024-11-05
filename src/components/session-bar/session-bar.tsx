export default function SessionBar() {
    return (
        <div className="flex flex-col">
            <div className="w-full h-2 bg-slate-300 rounded-md">
                <div className="w-[50%] h-2 bg-blue-900 rounded-md"></div>
            </div>
            <span className="font-semibold text-slate-700 text-xs">5 de 10 sessões</span>
        </div>
    )
}