import FieldLabel from "./FieldLabel";
import { controlClasses } from "./fieldStyles";

/** Pilihan dari daftar tertutup. */
export default function FieldSelect({
    label,
    name,
    options = [],
    value,
    onChange,
    className,
    ...props
}) {
    return (
        <FieldLabel label={label} className={className}>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className={controlClasses(value)}
                {...props}
            >
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </FieldLabel>
    );
}
