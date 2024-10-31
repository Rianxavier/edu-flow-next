interface InfoDisplayProps {
    label: string;
    value: string;
}

export default function InfoDisplay({ ...props }: InfoDisplayProps) {
    return (
        <div className="flex space-x-2 text-xs">
            <span className="font-bold">{props.label}</span>
            <span className="font-semibold">{props.value}</span>
        </div>
    )
}