"use client"

import { DefaultModalRef } from "@/components/default-modal/default-modal"
import { AddStudyModal } from "@/components/default-modal/variants/add-study-modal"
import StudyCard from "@/components/study-card/study-card"
import { useRef, useState } from "react"

export default function Estudos() {
    const [list, setList] = useState<1 | 2>(1)

    const addStudyModalRef = useRef<DefaultModalRef>(null);

    return (
        <div className="bg-white w-full h-full rounded-lg shadow-slate-600 shadow p-6 gap-4 flex flex-col">
            <div>
                CALENDAR
            </div>

            <div className="flex justify-between flex-row items-center">
                <h1 className="text-2xl font-semibold text-slate-600">Meus Estudos</h1>
                <button onClick={() => addStudyModalRef.current?.open()} className="bg-blue-900 text-white px-7 py-3 font-bold rounded-lg hover:bg-blue-800 hover:brightness-110 transition duration-200">
                    Criar Estudo
                </button>

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
            <AddStudyModal ref={addStudyModalRef} />

        </div>
    )
}