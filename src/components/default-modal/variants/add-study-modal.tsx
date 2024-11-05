import { ForwardedRef, forwardRef } from "react";
import { DefaultModal, DefaultModalRef } from "../default-modal";
import TextField from "@/components/input/text-field/text-field";
import DaysOfWeekCheckbox from "@/components/input/default-checkbox/variants/days-of-week-checkbox/days-os-week-checkbox";
import Select from "@/components/select/select";
import Button from "@/components/button/button";

export const AddStudyModal = forwardRef((props: any, ref: ForwardedRef<DefaultModalRef>) => {
    return (
        <DefaultModal ref={ref} onCloseShadow>
            <div className="flex flex-col w-[450px] h-96 gap-5">
                <h1 className="text-2xl font-semibold text-slate-600">Criar Estudo</h1>

                <TextField label="Nome Estudo" />
                <Select />
                <TextField label="Data de Expiração" type="date" />
                <DaysOfWeekCheckbox />

                <div className="space-x-2 mt-2 flex justify-end w-full">
                    <Button text="Cancelar" className="bg-slate-300" />
                    <Button text="Salvar" className="bg-orange-600 text-white" />
                </div>
            </div>
        </DefaultModal>
    )
})