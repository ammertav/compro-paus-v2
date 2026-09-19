import { Link } from "react-router";
import { cn } from "@/lib/utils";

const SHELLS = {
    media: "overflow-hidden rounded-[18px] bg-white text-primary",
    outlined: "rounded-2xl border border-primary/20 px-8 py-9 text-primary",
    filled: "rounded-2xl bg-primary px-8 py-9 text-white",
};

/**
 * variant: "media" | "outlined" | "filled"
 * isDarkMediaBg: latar di belakang logo, tentukan PER ASSET. Logo putih
 *                butuh navy, logo dengan plate putih butuh putih.
 * Jangan campur variant dalam satu grid. "filled" maksimal satu per grid.
 */
export default function Card({
    variant = "outlined",
    onDark = false,
    eyebrow,
    title,
    image,
    imageAlt = "",
    isDarkMediaBg = true,
    href,
    className,
    children,
}) {
    const isMedia = variant === "media";
    const isDark = variant === "filled" || onDark;
    const mutedText = isDark ? "text-white/64" : "text-primary/68";

    const body = (
        <>
            {eyebrow && (
                <p
                    className={cn(
                        "text-[13px] font-medium tracking-[.01em]",
                        isMedia ? "mb-3" : "mb-5.5",
                        isDark ? "text-white/66" : "text-primary/74",
                    )}
                >
                    {eyebrow}
                </p>
            )}
            {title && (
                <h3
                    className={cn(
                        "font-medium",
                        isMedia
                            ? "mb-3.5 text-[28px] tracking-[-.02em]"
                            : "mb-3 text-[26px]",
                    )}
                >
                    {title}
                </h3>
            )}
            {children && (
                <p className={cn("text-base leading-[1.75]", mutedText)}>
                    {children}
                </p>
            )}
        </>
    );

    const classes = cn(
        "block",
        SHELLS[variant],
        onDark && variant === "outlined" && "border-white/20 text-white",
        href &&
            "transition-[translate,box-shadow] duration-600 ease-out-expo hover:-translate-y-1.5 hover:opacity-100 hover:shadow-[0_30px_60px_-30px_rgba(1,34,63,.35)]",
        className,
    );

    const content = isMedia ? (
        <>
            <figure
                className={cn(
                    "flex aspect-video w-full items-center justify-center border-b border-primary/10 p-7",
                    isDarkMediaBg ? "bg-primary" : "bg-white",
                )}
            >
                <img
                    src={image}
                    alt={imageAlt}
                    className="block h-auto max-h-full w-auto max-w-full object-contain"
                />
            </figure>
            <div className="px-8 pt-8.5 pb-9.5">{body}</div>
        </>
    ) : (
        body
    );

    if (href) {
        return (
            <Link to={href} className={classes}>
                {content}
            </Link>
        );
    }

    return <div className={classes}>{content}</div>;
}
