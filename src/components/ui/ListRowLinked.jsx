import { Link } from "react-router";
import { cn } from "@/lib/utils";
import ListRowContent from "./ListRowContent";

/**
 * Baris daftar bernomor yang menggeser dan memunculkan panah saat hover.
 * Tanpa href, baris tetap tampil sama tetapi tidak bisa diklik.
 */
export default function ListRowLinked({
    number,
    title,
    href,
    onDark = false,
    className,
    children,
}) {
    const classes = cn(
        "group grid grid-cols-[40px_minmax(0,1fr)_24px] items-baseline gap-5 border-t py-8.5 transition-[padding-left,background-color] duration-500 ease-out-expo hover:bg-primary/3 hover:pl-3.5 hover:opacity-100 md:grid-cols-[56px_minmax(0,1fr)_40px]",
        onDark ? "border-white/18" : "border-primary/18",
        className,
    );

    const content = (
        <>
            <ListRowContent number={number} title={title} onDark={onDark}>
                {children}
            </ListRowContent>
            <span
                aria-hidden="true"
                className="text-right text-sm opacity-0 transition-opacity duration-450 group-hover:opacity-100"
            >
                →
            </span>
        </>
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
