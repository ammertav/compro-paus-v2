import { useEffect, useRef } from "react";
import Emphasis from "@/components/ui/Emphasis";
import { hands } from "@/data/home";

const clamp01 = (value) => Math.min(1, Math.max(0, value));
// 0 → 1 as `value` goes from `start` to `end`
const between = (value, start, end) => clamp01((value - start) / (end - start));
const easeOutCubic = (t) => 1 - (1 - t) ** 3;

/**
 * The section is 260vh tall with a sticky 100vh frame inside. Scrolling
 * through it brings the two hands in from the corners until the fingertips
 * touch, then the glow and captions appear.
 */
export default function HandsMeet() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const humanRef = useRef(null);
    const robotRef = useRef(null);
    const glowRef = useRef(null);
    const captionRef = useRef(null);

    useEffect(() => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        const update = () => {
            // 0 when the section top hits the viewport top, 1 when its bottom does
            const rect = sectionRef.current.getBoundingClientRect();
            const raw = reduced
                ? 1
                : clamp01(-rect.top / (rect.height - window.innerHeight));

            const away = 1 - easeOutCubic(between(raw, 0, 0.72));
            humanRef.current.style.transform = `translate(${-62 * away}vw, ${48 * away}vh) rotate(${-10 * away}deg)`;
            robotRef.current.style.transform = `translate(${62 * away}vw, ${-48 * away}vh) rotate(${10 * away}deg)`;

            const touch = between(raw, 0.66, 0.82);
            glowRef.current.style.opacity =
                touch * (0.85 + 0.15 * Math.sin(raw * 40));
            glowRef.current.style.scale = 0.4 + 0.6 * touch;

            const caption = between(raw, 0.74, 0.9);
            captionRef.current.style.opacity = caption;
            captionRef.current.style.transform = `translateY(${24 * (1 - caption)}px)`;

            titleRef.current.style.opacity =
                0.25 + 0.75 * between(raw, 0, 0.25);
        };

        update();
        if (reduced) return;
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <section ref={sectionRef} className="h-[260vh] bg-bone text-navy">
            <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
                <div className="relative z-10 mx-auto flex w-full max-w-page flex-wrap items-start justify-between gap-6 bg-bone px-gutter pt-[clamp(96px,13vh,140px)]">
                    <h2 ref={titleRef} className="max-w-[11em] text-h2">
                        <Emphasis text={hands.title} />
                    </h2>
                    <p className="text-label text-navy/74">{hands.label}</p>
                </div>

                {/* u = min(1vw, 1.25vh) keeps both hands in proportion on any screen.
                    The fingertips meet in the centre of this stage. */}
                <div className="relative min-h-0 flex-1 overflow-hidden [--u:min(1vw,1.25vh)]">
                    <img
                        ref={humanRef}
                        src={hands.humanImage}
                        alt=""
                        className="pointer-events-none absolute top-[calc(50%-16.4*var(--u))] left-[calc(50%-47*var(--u))] w-[calc(52*var(--u))] mask-l-from-76% will-change-transform"
                    />
                    <img
                        ref={robotRef}
                        src={hands.robotImage}
                        alt=""
                        className="pointer-events-none absolute top-[calc(50%-37.7*var(--u))] left-[calc(50%-12*var(--u))] w-[calc(65*var(--u))] mask-r-from-78% will-change-transform"
                    />
                    <div
                        ref={glowRef}
                        className="pointer-events-none absolute top-1/2 left-1/2 size-[calc(18*var(--u))] -translate-1/2 bg-[radial-gradient(circle,rgba(170,205,255,.75)_0%,transparent_62%)] opacity-0 mix-blend-screen"
                    />
                </div>

                <div
                    ref={captionRef}
                    className="relative z-10 mx-auto grid w-full max-w-page gap-x-10 gap-y-4 border-t border-navy/16 bg-bone px-gutter pt-6 pb-[clamp(28px,5vh,56px)] md:grid-cols-3"
                >
                    {hands.captions.map((caption) => (
                        <p
                            key={caption}
                            className="leading-relaxed text-navy/68 *:text-navy"
                        >
                            <Emphasis text={caption} />
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
