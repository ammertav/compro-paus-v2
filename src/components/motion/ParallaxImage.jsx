import { cn } from "@/lib/utils";
import useParallax from "./useParallax";

/**
 * Photo that drifts inside its frame on scroll. The frame needs
 * `relative overflow-hidden` and a size. The photo overshoots the frame by
 * `factor` on each side (0.1 → top -10%, height 120%), as in the design.
 */
export default function ParallaxImage({ src, factor = 0.1, className }) {
    const ref = useParallax(factor);

    return (
        <img
            ref={ref}
            src={src}
            alt=""
            loading="lazy"
            className={cn("absolute left-0 w-full object-cover", className)}
            style={{
                top: `${-factor * 100}%`,
                height: `${100 + factor * 200}%`,
            }}
        />
    );
}
