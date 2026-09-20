import { cn } from "@/lib/utils";
import ButtonBase from "./ButtonBase";
import { BUTTON_SHAPE, BUTTON_SIZES } from "./buttonStyles";

/**
 * Tombol aksi pendamping, hanya garis tepi tanpa isian.
 * size:   "sm" | "md" | "lg"
 * onDark: true jika diletakkan di atas latar navy
 */
export default function ButtonSecondary({
    size = "lg",
    onDark = false,
    className,
    children,
    ...props
}) {
    return (
        <ButtonBase
            className={cn(
                BUTTON_SHAPE,
                BUTTON_SIZES[size],
                "border",
                onDark ? "border-white/34 text-white" : "border-primary/30",
                className,
            )}
            {...props}
        >
            {children}
        </ButtonBase>
    );
}
