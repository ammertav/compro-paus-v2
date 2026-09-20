import { cn } from "@/lib/utils";

/**
 * Penanda nama section, tanpa penomoran dan tanpa garis dekoratif.
 * Jangan dibuat uppercase + letterspacing.
 * inline-block supaya tetap bisa di-center oleh parent yang text-center.
 */
export default function SectionLabelPlain({
    onDark = false,
    className,
    children,
}) {
    return (
        <p
            className={cn(
                "inline-block text-sm font-medium",
                onDark ? "text-white/66" : "text-primary/74",
                className,
            )}
        >
            {children}
        </p>
    );
}
