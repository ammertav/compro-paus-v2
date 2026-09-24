import { useState } from "react";
import { cn } from "@/lib/utils";
import useParallax from "./useParallax";

/**
 * Photo behind a navy page hero: scroll parallax, and a slow zoom from
 * 114% to 100% once loaded. Place inside a `relative overflow-hidden` header.
 */
export default function HeroImage({ src, parallax = 0.3, className }) {
    const ref = useParallax(parallax, { hero: true });
    const [loaded, setLoaded] = useState(false);

    return (
        <div ref={ref} className="absolute inset-x-0 top-[-8%] bottom-0">
            <img
                src={src}
                alt=""
                fetchPriority="high"
                onLoad={() => setLoaded(true)}
                className={cn(
                    "photo-mono size-full object-cover transition-transform duration-2800",
                    !loaded && "motion-safe:scale-114",
                    className,
                )}
            />
        </div>
    );
}
