import { cn } from "@/lib/utils";

/**
 * Penanda nama section berbentuk pil bergaris tepi.
 * Jangan dibuat uppercase + letterspacing.
 */
export default function SectionLabelTag({
    onDark = false,
    className,
    children,
}) {
    return (
        <span
            className={cn(
                "inline-block rounded-full border px-4 py-2 text-[13px] font-medium",
                onDark
                    ? "border-white/30 text-white/66"
                    : "border-primary/22 text-primary/74",
                className,
            )}
        >
            {children}
        </span>
    );
}
