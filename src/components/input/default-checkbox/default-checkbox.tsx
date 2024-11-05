interface DefaultCheckboxProps {
    label: string;
    checked?: boolean;
    onChange?: () => void;
}

export default function DefaultCheckbox({ label, checked, onChange }: DefaultCheckboxProps) {
    return (
        <label className="flex items-center cursor-pointer space-x-2">
            <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />

            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-200
                    ${checked ? 'bg-blue-900 border-blue-900' : 'bg-white border-gray-400'}`}>

                {checked && <span className="w-2.5 h-2.5 bg-white rounded"></span>}
            </div>

            <span className="text-gray-700 text-sm font-semibold">{label}</span>
        </label>
    );
}
