import { cn } from "@/lib/utils";

/**
 * variant: "text" | "select" | "textarea"
 * Label selalu terlihat di atas kontrol, placeholder hanya contoh isian.
 * Field yang sudah terisi berubah putih dengan border penuh.
 */
export default function Field({
    variant = "text",
    label,
    name,
    type = "text",
    placeholder,
    options = [],
    rows = 4,
    value,
    onChange,
    className,
    ...props
}) {
    const isFilled = Boolean(value);

    const controlClasses = cn(
        "w-full rounded-[9px] border px-4 py-3.5 text-[15px] leading-[1.6] text-primary transition-colors focus:border-primary focus:outline-none",
        isFilled
            ? "border-primary bg-white"
            : "border-primary/18 bg-background",
    );

    return (
        <label className={cn("block", className)}>
            <span className="mb-2.25 block text-[13px] font-medium tracking-[.01em] text-primary/74">
                {label}
            </span>

            {variant === "select" && (
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={controlClasses}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
            )}

            {variant === "textarea" && (
                <textarea
                    name={name}
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={cn(controlClasses, "resize-y")}
                    {...props}
                />
            )}

            {variant === "text" && (
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={controlClasses}
                    {...props}
                />
            )}
        </label>
    );
}
