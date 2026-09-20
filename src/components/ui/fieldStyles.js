import { cn } from "@/lib/utils";

// Field yang sudah terisi berubah putih dengan border penuh
export function controlClasses(value, className) {
    return cn(
        "w-full rounded-[9px] border px-4 py-3.5 text-[15px] leading-[1.6] text-primary transition-colors focus:border-primary focus:outline-none",
        value ? "border-primary bg-white" : "border-primary/18 bg-background",
        className,
    );
}
