import { Link } from "react-router";
import { cn } from "@/lib/utils";

/**
 * variant: "plain" | "numbered" | "linked"
 * Beri nomor HANYA jika urutannya memang bermakna.
 * Bungkus beberapa row dalam container ber-border atas agar garisnya lengkap.
 */
export default function ListRow({
    variant = "plain",
    number,
    title,
    href,
    onDark = false,
    className,
    children,
}) {
    if (variant === "plain") {
        return (
            <p
                className={cn(
                    "border-b py-3.75 text-base",
                    onDark ? "border-white/10" : "border-primary/10",
                    className,
                )}
            >
                {title ?? children}
            </p>
        );
    }

    const isLinked = variant === "linked";
    const mutedText = onDark ? "text-white/66" : "text-primary/68";

    const classes = cn(
        "grid items-baseline gap-5 border-t py-8.5",
        isLinked
            ? "group grid-cols-[40px_minmax(0,1fr)_24px] transition-[padding-left,background-color] duration-500 ease-out-expo hover:bg-primary/3 hover:pl-3.5 hover:opacity-100 md:grid-cols-[56px_minmax(0,1fr)_40px]"
            : "grid-cols-[40px_minmax(0,1fr)] md:grid-cols-[56px_minmax(0,1fr)]",
        onDark ? "border-white/18" : "border-primary/18",
        className,
    );

    const content = (
        <>
            <span
                className={cn(
                    "text-xs",
                    onDark ? "text-white/66" : "text-primary/74",
                )}
            >
                {number}
            </span>
            <div>
                <h3 className="mb-2.5 text-[clamp(20px,2vw,25px)] font-medium tracking-[-.01em]">
                    {title}
                </h3>
                {children && (
                    <p
                        className={cn(
                            "max-w-[42em] text-base leading-[1.8]",
                            mutedText,
                        )}
                    >
                        {children}
                    </p>
                )}
            </div>
            {isLinked && (
                <span
                    aria-hidden="true"
                    className="text-right text-sm opacity-0 transition-opacity duration-450 group-hover:opacity-100"
                >
                    →
                </span>
            )}
        </>
    );

    if (isLinked && href) {
        return (
            <Link to={href} className={classes}>
                {content}
            </Link>
        );
    }

    return <div className={classes}>{content}</div>;
}
