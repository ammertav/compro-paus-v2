import { cn } from "@/lib/utils";

/**
 * Deretan angka bersebelahan dengan garis pemisah.
 * items: [{ value, label }]
 * Pakai angka biasa, 2 bukan 002.
 */
export default function FigureRow({ items = [], className }) {
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
