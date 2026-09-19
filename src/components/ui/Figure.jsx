import { cn } from "@/lib/utils";

/**
 * Angka/statistik.
 * variant: "row" | "stacked" | "inline"
 * items:   [{ value, label }]
 * Pakai angka biasa, 2 bukan 002.
 */
export default function Figure({ variant = "row", items = [], className }) {
    if (variant === "stacked") {
        const { value, label } = items[0] ?? {};

        return (
            <div className={className}>
                <p className="text-[clamp(44px,5vw,64px)] leading-[.95] font-light tracking-[-.03em]">
                    {value}
                </p>
                <p className="mt-3.5 text-base leading-[1.6] text-primary/74">
                    {label}
                </p>
            </div>
        );
    }

    if (variant === "inline") {
        return (
            <div className={cn("flex flex-col gap-3.5", className)}>
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-baseline gap-3.5 border-b border-primary/14 pb-3"
                    >
                        <span className="min-w-13 text-2xl font-medium">
                            {item.value}
                        </span>
                        <span className="text-[15px] text-primary/74">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div
            className={cn(
                "grid grid-cols-2 gap-px border-y border-primary/16 bg-primary/16 lg:grid-cols-4",
                className,
            )}
        >
            {items.map((item) => (
                <div
                    key={item.label}
                    className="bg-background pt-11 pr-6 pb-11.5"
                >
                    <p className="text-[clamp(38px,4vw,60px)] leading-none">
                        {item.value}
                    </p>
                    <p className="mt-4 text-[13px] font-medium tracking-[.01em] text-primary/74">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    );
}
