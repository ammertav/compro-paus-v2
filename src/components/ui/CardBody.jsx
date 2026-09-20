import { cn } from "@/lib/utils";

/**
 * Isi teks kartu, dipakai internal oleh varian Card.
 * Jangan dipakai langsung di halaman.
 */
export default function CardBody({
    eyebrow,
    title,
    isDark = false,
    eyebrowClassName,
    titleClassName,
    children,
}) {
    return (
        <>
            {eyebrow && (
                <p
                    className={cn(
                        "text-[13px] font-medium tracking-[.01em]",
                        isDark ? "text-white/66" : "text-primary/74",
                        eyebrowClassName,
                    )}
                >
                    {eyebrow}
                </p>
            )}
            {title && (
                <h3 className={cn("font-medium", titleClassName)}>{title}</h3>
            )}
            {children && (
                <p
                    className={cn(
                        "text-base leading-[1.75]",
                        isDark ? "text-white/64" : "text-primary/68",
                    )}
                >
                    {children}
                </p>
            )}
        </>
    );
}
