import Button from "../button/button";
import InfoDisplay from "../info-display/info-display";
import SessionBar from "../session-bar/session-bar";

export default function StudyCard() {
    return (
        <div className="w-full rounded-lg border-slate-300 bg-slate-100 p-4 flex flex-row">
            <div className="flex gap-2 flex-col flex-1">
                <h2 className="font-semibold text-slate-700 text-base">Node com Express</h2>
                <SessionBar />

                <div className="flex flex-row gap-1">
                    <span className="py-1 px-2 bg-gray-300 w-fit h-fit text-[10px] font-bold uppercase rounded">
                        terça-feira
                    </span>
                    <span className="py-1 px-2 bg-gray-300 w-fit h-fit text-[10px] font-bold uppercase rounded">
                        quinta-feira
                    </span>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-end gap-1">
                <strong className="py-1 px-2 bg-gray-400 w-fit h-fit text-xs font-bold uppercase rounded">
                    back-end
                </strong>
                <InfoDisplay label="Tempo de estudo" value="02:40:00" />
                <InfoDisplay label="Expira:" value="10/11/2024" />

                <div className="space-x-2 mt-2">
                    <Button text="Editar" className="bg-slate-300" />
                    <Button text="Concluir" className="bg-orange-600 text-white" />
                </div>
            </div>
        </div>
    )
}