import { cn } from "@/lib/utils";

// Class ditulis lengkap agar tetap terbaca oleh scanner Tailwind
const GLOWS = {
    "top-right": {
        light: "bg-[radial-gradient(64%_58%_at_88%_8%,rgba(1,34,63,.10),rgba(1,34,63,0)_70%)]",
        dark: "bg-[radial-gradient(64%_58%_at_88%_8%,rgba(255,255,255,.13),rgba(1,34,63,0)_70%)]",
    },
    "top-left": {
        light: "bg-[radial-gradient(64%_58%_at_12%_8%,rgba(1,34,63,.10),rgba(1,34,63,0)_70%)]",
        dark: "bg-[radial-gradient(64%_58%_at_12%_8%,rgba(255,255,255,.13),rgba(1,34,63,0)_70%)]",
    },
    "bottom-left": {
        light: "bg-[radial-gradient(64%_58%_at_12%_92%,rgba(1,34,63,.10),rgba(1,34,63,0)_70%)]",
        dark: "bg-[radial-gradient(64%_58%_at_12%_92%,rgba(255,255,255,.13),rgba(1,34,63,0)_70%)]",
    },
};

/**
 * Cahaya radial dekoratif. Parent wajib `relative`, dan konten di atasnya
 * perlu `relative z-10` supaya tidak tertutup.
 */
export default function Glow({ position = "top-right", onDark = false }) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 z-0",
                GLOWS[position][onDark ? "dark" : "light"],
            )}
        />
    );
}
