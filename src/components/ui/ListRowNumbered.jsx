import { cn } from "@/lib/utils";
import ListRowContent from "./ListRowContent";

/**
 * Baris daftar bernomor.
 * Beri nomor HANYA jika urutannya memang bermakna.
 */
export default function ListRowNumbered({
    number,
    title,
    onDark = false,
    className,
    children,
}) {
    return (
        <div
            className={cn(
                "grid grid-cols-[40px_minmax(0,1fr)] items-baseline gap-5 border-t py-8.5 md:grid-cols-[56px_minmax(0,1fr)]",
                onDark ? "border-white/18" : "border-primary/18",
                className,
            )}
        >
            <ListRowContent number={number} title={title} onDark={onDark}>
                {children}
            </ListRowContent>
        </div>
    );
}
