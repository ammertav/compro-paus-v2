import { useEffect, useRef } from "react";

/**
 * Moves the element on scroll. Off with prefers-reduced-motion.
 * - default: (parent centre - viewport centre) * -factor, for photos
 * - hero: scrollY * factor, for the image behind a page hero
 */
export default function useParallax(factor, { hero = false } = {}) {
    const ref = useRef(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;
        const el = ref.current;

        const update = () => {
            let y = window.scrollY * factor;
            if (!hero) {
                const box = el.parentElement.getBoundingClientRect();
                y =
                    (box.top + box.height / 2 - window.innerHeight / 2) *
                    -factor;
            }
            el.style.transform = `translateY(${y}px)`;
        };

        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, [factor, hero]);

    return ref;
}
