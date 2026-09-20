import { cn } from "@/lib/utils";
import ButtonBase from "./ButtonBase";
import { BUTTON_SHAPE, BUTTON_SIZES } from "./buttonStyles";

/**
 * Tombol aksi utama, satu saja per tampilan.
 * size:   "sm" | "md" | "lg"
 * onDark: true jika diletakkan di atas latar navy
 */
export default function ButtonPrimary({
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
                "font-medium",
                onDark ? "bg-white text-primary" : "bg-primary text-white",
                className,
            )}
            {...props}
        >
            {children}
        </ButtonBase>
    );
}
