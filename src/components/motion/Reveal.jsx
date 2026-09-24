import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Fades in and rises 44px once its top passes 92% of the viewport.
 * Wrap links rather than passing as={Link}: the slow transition would
 * also apply to their hover fade. For the same reason, don't give a Reveal
 * its own transition/duration classes; put hover effects on a child.
 */
export default function Reveal({
    as: Tag = "div",
    delay = 0,
    className,
    children,
}) {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "0px 0px -8% 0px" },
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn(
                "transition-[opacity,translate] duration-[1.1s,1.3s]",
                !shown && "motion-safe:translate-y-11 motion-safe:opacity-0",
                className,
            )}
        >
            {children}
        </Tag>
    );
}
