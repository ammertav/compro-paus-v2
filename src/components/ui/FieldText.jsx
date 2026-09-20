import FieldLabel from "./FieldLabel";
import { controlClasses } from "./fieldStyles";

/** Isian satu baris: text, email, tel, dan sejenisnya. */
export default function FieldText({
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    className,
    ...props
}) {
    return (
        <FieldLabel label={label} className={className}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={controlClasses(value)}
                {...props}
            />
        </FieldLabel>
    );
}
