interface ButtonProps {
    text: string;
    className?: string
}

export default function Button({ text, className }: ButtonProps) {
    return (
        <button className={`px-3 py-1 rounded font-semibold text-sm ${className}`}>
            {text}
        </button>
    )
}