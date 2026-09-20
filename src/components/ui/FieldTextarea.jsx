import FieldLabel from "./FieldLabel";
import { controlClasses } from "./fieldStyles";

/** Isian panjang beberapa baris. */
export default function FieldTextarea({
    label,
    name,
    rows = 4,
    placeholder,
    value,
    onChange,
    className,
    ...props
}) {
    return (
        <FieldLabel label={label} className={className}>
            <textarea
                name={name}
                rows={rows}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={controlClasses(value, "resize-y")}
                {...props}
            />
        </FieldLabel>
    );
}
