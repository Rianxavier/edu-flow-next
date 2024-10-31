"use client"

import StudyCard from "@/components/study-card/study-card"
import EstudoCard from "@/components/study-card/study-card"
import { useState } from "react"

export default function Estudos() {
    const [list, setList] = useState<1 | 2>(1)


    return (
        <div className="bg-white w-full h-full rounded-lg shadow-slate-600 shadow p-6 gap-4 flex flex-col">
            <div>
                CALENDAR
            </div>

            <div>
                <h1 className="text-2xl font-semibold text-slate-600">Meus Estudos</h1>
            </div>

            <div className="mx-auto flex flex-row w-[600px] h-10 bg-slate-300 rounded-xl items-center font-semibold text-base text-slate-700">
                <button className={`flex-1 flex justify-center items-center h-full ${list === 1 && "bg-orange-400 text-white"} rounded-l-xl`} onClick={() => setList(1)}>
                    Hoje
                </button>
                <button className={`flex-1 flex justify-center items-center h-full ${list === 2 && "bg-orange-400 text-white"} rounded-r-xl`} onClick={() => setList(2)}>
                    Todos
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <StudyCard />
                <StudyCard />
                <StudyCard />
                <StudyCard />
            </div>
        </div>
    )
}