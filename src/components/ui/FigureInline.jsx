import { cn } from "@/lib/utils";

/**
 * Angka dan keterangan sebaris, ditumpuk ke bawah.
 * items: [{ value, label }]
 */
export default function FigureInline({ items = [], className }) {
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
