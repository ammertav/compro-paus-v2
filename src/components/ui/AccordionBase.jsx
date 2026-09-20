import { useId, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Mesin buka-tutup accordion, dipakai internal oleh varian Accordion.
 * Jangan dipakai langsung di halaman.
 *
 * Hanya satu item terbuka dalam satu waktu. Ikon BERGANTI glyph (+ / ×),
 * bukan berotasi, supaya tidak tersangkut di tengah putaran.
 */
export default function AccordionBase({
    items = [],
    onDark = false,
    defaultOpen = -1,
    className,
    headerClassName,
    questionClassName,
    iconClassName,
    answerClassName,
}) {
    const [openIndex, setOpenIndex] = useState(defaultOpen);
    const id = useId();

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
                                headerClassName,
                            )}
                        >
                            <span
                                className={cn(
                                    "leading-[1.45]",
                                    questionClassName,
                                )}
                            >
                                {item.question}
                            </span>
                            <span
                                aria-hidden="true"
                                className={cn(
                                    "shrink-0 leading-none",
                                    onDark
                                        ? "text-white/60"
                                        : "text-primary/74",
                                    iconClassName,
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
                                    onDark
                                        ? "text-white/66"
                                        : "text-primary/68",
                                    answerClassName,
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
