import { cn } from "@/lib/utils";

/**
 * Nomor + judul + keterangan, dipakai internal oleh ListRowNumbered
 * dan ListRowLinked. Jangan dipakai langsung di halaman.
 */
export default function ListRowContent({
    number,
    title,
    onDark = false,
    children,
}) {
    return (
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
                            onDark ? "text-white/66" : "text-primary/68",
                        )}
                    >
                        {children}
                    </p>
                )}
            </div>
        </>
    );
}
