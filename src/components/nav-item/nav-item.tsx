import Link from "next/link";

interface NavItemProps {
    href: string;
    label: string;
    isActive?: boolean
    icon?: JSX.Element;
}

export default function NavItem({ ...props }: NavItemProps) {
    return (
        <li>
            <Link href={props.href} className={`flex flex-row items-center gap-2 p-3 rounded-md hover:bg-gray-200 transition-colors text-slate-600 
                ${props.isActive && 'bg-orange-500 text-white'}`}>
                {props.icon ??
                    <span>
                        {props.icon}
                    </span>
                }
                <span className="font-semibold text-sm">{props.label}</span>
            </Link>
        </li>
    )
}