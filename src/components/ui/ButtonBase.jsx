import { Link } from "react-router";
import { cn } from "@/lib/utils";

/**
 * Dipakai internal oleh varian Button, jangan dipakai langsung di halaman.
 * href internal ("/...") dirender sebagai <Link>, href lain sebagai <a>,
 * tanpa href dirender sebagai <button>.
 */
export default function ButtonBase({
    href,
    disabled = false,
    className,
    children,
    ...props
}) {
    const classes = cn(
        "transition-opacity duration-300 hover:opacity-62",
        className,
        disabled &&
            "pointer-events-none cursor-not-allowed border-none bg-muted text-white",
    );

    if (!href || disabled) {
        return (
            <button
                type="button"
                disabled={disabled}
                className={cn("cursor-pointer", classes)}
                {...props}
            >
                {children}
            </button>
        );
    }

    if (href.startsWith("/")) {
        return (
            <Link to={href} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <a href={href} className={classes} {...props}>
            {children}
        </a>
    );
}
