import { useId, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * variant: "default" | "compact"
 * items:   [{ question, answer }]
 * Hanya satu item terbuka dalam satu waktu. Ikon BERGANTI glyph (+ / ×),
 * bukan berotasi, supaya tidak tersangkut di tengah putaran.
 */
export default function Accordion({
    items = [],
    variant = "default",
    onDark = false,
    defaultOpen = -1,
    className,
}) {
    const [openIndex, setOpenIndex] = useState(defaultOpen);
    const id = useId();
    const isCompact = variant === "compact";

    return (
        <div
            className={cn(
                "border-t",
                onDark ? "border-white/20" : "border-primary/20",
                className,
            )}
        >
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `${id}-panel-${index}`;

                return (
                    <div
                        key={item.question}
                        className={cn(
                            "border-b transition-colors duration-400",
                            onDark
                                ? "border-white/16 hover:bg-white/3"
                                : "border-primary/16 hover:bg-primary/3",
                        )}
                    >
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => setOpenIndex(isOpen ? -1 : index)}
                            className={cn(
                                "flex w-full cursor-pointer items-baseline justify-between gap-6 text-left",
                                isCompact ? "py-3.25" : "py-7.5 pr-4",
                            )}
                        >
                            <span
                                className={cn(
                                    "leading-[1.45]",
                                    isCompact
                                        ? "text-[15px]"
                                        : "text-[clamp(17px,1.6vw,19px)] font-medium",
                                )}
                            >
                                {item.question}
                            </span>
                            <span
                                aria-hidden="true"
                                className={cn(
                                    "shrink-0 leading-none",
                                    isCompact ? "text-[17px]" : "text-[22px]",
                                    onDark
                                        ? "text-white/60"
                                        : "text-primary/74",
                                )}
                            >
                                {isOpen ? "×" : "+"}
                            </span>
                        </button>

                        {isOpen && (
                            <p
                                id={panelId}
                                className={cn(
                                    "text-base leading-[1.8]",
                                    isCompact ? "pr-7.5 pb-5.5" : "pr-12 pb-8",
                                    onDark
                                        ? "text-white/66"
                                        : "text-primary/68",
                                )}
                            >
                                {item.answer}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
