import { Link } from "react-router";
import { cn } from "@/lib/utils";

const VARIANTS = {
    primary: {
        light: "bg-primary font-medium text-white",
        dark: "bg-white font-medium text-primary",
    },
    secondary: {
        light: "border border-primary/30 text-primary",
        dark: "border border-white/34 text-white",
    },
    link: {
        light: "border-b border-primary/30",
        dark: "border-b border-white/40 text-white",
    },
};

const SIZES = {
    sm: "px-6.5 py-3.5 text-[13px]",
    md: "px-7 py-3.75 text-sm",
    lg: "px-8 py-4.25 text-sm",
};

/**
 * variant: "primary" | "secondary" | "link"
 * size:    "sm" | "md" | "lg" (tidak berlaku untuk "link")
 * onDark:  true jika diletakkan di atas latar navy
 *
 * Satu primary per tampilan. Panah hanya untuk variant "link".
 * href internal ("/...") dirender sebagai <Link>, href lain sebagai <a>,
 * tanpa href dirender sebagai <button>.
 */
export default function Button({
    variant = "primary",
    size = "lg",
    onDark = false,
    disabled = false,
    href,
    className,
    children,
    ...props
}) {
    const isLink = variant === "link";

    const classes = cn(
        "transition-opacity duration-300 hover:opacity-62",
        isLink
            ? "inline-flex items-center gap-2.5 pb-0.75 text-[15px] font-medium"
            : "inline-block rounded-full text-center",
        !isLink && SIZES[size],
        VARIANTS[variant][onDark ? "dark" : "light"],
        disabled &&
            "pointer-events-none cursor-not-allowed border-none bg-muted text-white",
        className,
    );

    const content = (
        <>
            {children}
            {isLink && (
                <span aria-hidden="true" className="text-sm">
                    →
                </span>
            )}
        </>
    );

    if (!href || disabled) {
        return (
            <button
                type="button"
                disabled={disabled}
                className={cn("cursor-pointer", classes)}
                {...props}
            >
                {content}
            </button>
        );
    }

    if (href.startsWith("/")) {
        return (
            <Link to={href} className={classes} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <a href={href} className={classes} {...props}>
            {content}
        </a>
    );
}
