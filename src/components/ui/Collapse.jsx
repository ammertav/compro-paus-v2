import { cn } from "@/lib/utils";

// Accordion panel. Animating grid rows 0fr → 1fr opens it to its content
// height; `inert` keeps a closed panel out of the tab order.
export default function Collapse({ open, children }) {
    return (
        <div
            inert={!open}
            className={cn(
                "grid transition-[grid-template-rows] duration-900",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
        >
            <div className="overflow-hidden">{children}</div>
        </div>
    );
}
