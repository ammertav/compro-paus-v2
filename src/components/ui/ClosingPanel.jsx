import { cn } from "@/lib/utils";
import Button from "./Button";
import Glow from "./Glow";

const TITLE_CLASSES = "font-light tracking-[-.03em] text-balance";

/**
 * Panel ajakan (CTA) penutup, satu per halaman tepat di atas footer.
 * variant: "filled" | "light" | "split" | "minimal"
 * actions: [{ label, href, variant }]
 */
export default function ClosingPanel({
    variant = "filled",
    title,
    actions = [],
    glow = true,
    className,
    titleClassName,
    children,
}) {
    if (variant === "split") {
        return (
            <div
                className={cn(
                    "grid items-center gap-7 rounded-[18px] bg-background px-9 py-11 md:grid-cols-2",
                    className,
                )}
            >
                <h2
                    className={cn(
                        "text-[clamp(22px,2.4vw,30px)] leading-[1.14]",
                        TITLE_CLASSES,
                        titleClassName,
                    )}
                >
                    {title}
                </h2>
                <div className="flex flex-wrap gap-3">
                    {actions.map((action) => (
                        <Button
                            key={action.label}
                            href={action.href}
                            variant={action.variant}
                            size="md"
                        >
                            {action.label}
                        </Button>
                    ))}
                </div>
            </div>
        );
    }

    if (variant === "minimal") {
        return (
            <div
                className={cn(
                    "border-t border-primary/20 pt-9.5 pb-2",
                    className,
                )}
            >
                <h2
                    className={cn(
                        "mb-5 text-[clamp(22px,2.4vw,30px)] leading-[1.14]",
                        TITLE_CLASSES,
                        titleClassName,
                    )}
                >
                    {title}
                </h2>
                {actions.map((action) => (
                    <Button
                        key={action.label}
                        href={action.href}
                        variant="link"
                    >
                        {action.label}
                    </Button>
                ))}
            </div>
        );
    }

    const isFilled = variant === "filled";

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-[22px] px-6 text-center md:px-14",
                isFilled ? "bg-primary py-25 text-white" : "bg-white py-20",
                className,
            )}
        >
            {isFilled && glow && <Glow position="bottom-left" onDark />}

            <div className="relative z-10">
                <h2
                    className={cn(
                        "mx-auto max-w-[20em]",
                        isFilled
                            ? "text-[clamp(30px,4vw,62px)] leading-[1.05]"
                            : "text-[clamp(26px,3.2vw,46px)] leading-[1.1]",
                        TITLE_CLASSES,
                        titleClassName,
                    )}
                >
                    {title}
                </h2>

                {children && (
                    <p
                        className={cn(
                            "mx-auto mt-6.5 max-w-[30em] text-[17px] leading-[1.75]",
                            isFilled ? "text-white/68" : "text-primary/68",
                        )}
                    >
                        {children}
                    </p>
                )}

                <div
                    className={cn(
                        "flex flex-wrap justify-center gap-3.5",
                        isFilled ? "mt-10" : "mt-8.5",
                    )}
                >
                    {actions.map((action) => (
                        <Button
                            key={action.label}
                            href={action.href}
                            variant={action.variant}
                            onDark={isFilled}
                        >
                            {action.label}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
}
