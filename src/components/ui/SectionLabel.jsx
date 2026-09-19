import { cn } from "@/lib/utils";

/**
 * Penanda nama section, tanpa penomoran dan tanpa garis dekoratif.
 * variant: "plain" | "tag"
 * Jangan dibuat uppercase + letterspacing.
 */
export default function SectionLabel({
    variant = "plain",
    onDark = false,
    className,
    children,
}) {
    const textColor = onDark ? "text-white/66" : "text-primary/74";

    if (variant === "tag") {
        return (
            <span
                className={cn(
                    "inline-block rounded-full border px-4 py-2 text-[13px] font-medium",
                    onDark ? "border-white/30" : "border-primary/22",
                    textColor,
                    className,
                )}
            >
                {children}
            </span>
        );
    }

    // inline-block supaya tetap bisa di-center oleh parent yang text-center
    return (
        <p
            className={cn(
                "inline-block text-sm font-medium",
                textColor,
                className,
            )}
        >
            {children}
        </p>
    );
}
