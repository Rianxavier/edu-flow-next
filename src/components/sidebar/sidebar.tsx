import { MdCategory, MdDashboard, MdPerson, MdSettings } from "react-icons/md";
import NavItem from "../nav-item/nav-item";
import { FaBookOpen } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { BsFilePersonFill } from "react-icons/bs";

export default function Sidebar() {
    return (
        <aside className="w-72 bg-white h-screen p-6 shadow-md shadow-slate-600 gap-4 flex flex-col">
            <div className="flex justify-center">
                LOGO
            </div>
            <div className="border-y border-slate-200 p-3 flex flex-row gap-2 text-slate-600 text-sm">
                <BsFilePersonFill size={20} />
                <span className="font-semibold ">
                    Rian Alves Xavier
                </span>
            </div>

            <nav>
                <ul className="space-y-2">
                    <NavItem href="#" label="Dashboard" icon={<MdDashboard size={20} />} />
                    <NavItem href="#" label="Meus Estudos" icon={<FaBookOpen size={20} />} isActive />
                    <NavItem href="#" label="Temas de Estudo" icon={<MdCategory size={20} />} />
                    <NavItem href="#" label="Histórico de Estudo" icon={<IoTimeOutline size={20} />} />
                    <NavItem href="#" label="Perfil" icon={<MdPerson size={20} />} />
                    <NavItem href="#" label="Configurações" icon={<MdSettings size={20} />} />
                </ul>
            </nav>
        </aside>
    )
}