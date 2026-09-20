import { cn } from "@/lib/utils";

/**
 * Pembungkus label + kontrol, dipakai internal oleh varian Field.
 * Label selalu terlihat di atas kontrol, placeholder hanya contoh isian.
 */
export default function FieldLabel({ label, className, children }) {
    return (
        <label className={cn("block", className)}>
            <span className="mb-2.25 block text-[13px] font-medium tracking-[.01em] text-primary/74">
                {label}
            </span>
            {children}
        </label>
    );
}
