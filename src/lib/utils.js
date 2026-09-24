import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Register the custom font sizes from index.css, otherwise tailwind-merge
// reads text-h2 as a colour and drops it next to text-white/70
const twMerge = extendTailwindMerge({
    extend: {
        theme: {
            text: [
                "label",
                "lead",
                "display",
                "title",
                "cta",
                "h2",
                "h2-sm",
                "statement",
                "stat",
            ],
        },
    },
});

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// 0 → "01"
export function formatIndex(index) {
    return String(index + 1).padStart(2, "0");
}
