import { cn } from "@/lib/utils";

/**
 * Wrapper parallax. Gerakannya dijalankan oleh hook useReveal,
 * factor x 110px = jarak tempuh maksimal.
 */
export default function Parallax({ factor = 0.1, className, children }) {
    return (
        <div
            data-px={factor}
            className={cn("will-change-transform", className)}
        >
            {children}
        </div>
    );
}
