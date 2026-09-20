import { cn } from "@/lib/utils";

/**
 * Baris daftar tanpa nomor.
 * Bungkus beberapa row dalam container ber-border atas agar garisnya lengkap.
 */
export default function ListRowPlain({
    title,
    onDark = false,
    className,
    children,
}) {
    return (
        <p
            className={cn(
                "border-b py-3.75 text-base",
                onDark ? "border-white/10" : "border-primary/10",
                className,
            )}
        >
            {title ?? children}
        </p>
    );
}
