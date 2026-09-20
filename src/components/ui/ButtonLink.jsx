import { cn } from "@/lib/utils";
import ButtonBase from "./ButtonBase";

/**
 * Tautan teks bergaris bawah. Hanya varian ini yang memakai panah,
 * tombol primary dan secondary tidak.
 */
export default function ButtonLink({
    onDark = false,
    className,
    children,
    ...props
}) {
    return (
        <ButtonBase
            className={cn(
                "inline-flex items-center gap-2.5 border-b pb-0.75 text-[15px] font-medium",
                onDark ? "border-white/40 text-white" : "border-primary/30",
                className,
            )}
            {...props}
        >
            {children}
            <span aria-hidden="true" className="text-sm">
                →
            </span>
        </ButtonBase>
    );
}
