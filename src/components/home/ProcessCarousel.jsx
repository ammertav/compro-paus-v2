import { useEffect, useRef, useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { howItWorks } from "@/data/process";
import { cn, formatIndex } from "@/lib/utils";

const arrowClass =
    "flex size-13 items-center justify-center border border-navy text-xl transition duration-500 enabled:hover:bg-navy enabled:hover:text-white disabled:opacity-30";

export default function ProcessCarousel() {
    const trackRef = useRef(null);
    // How much of each card is inside the track, 0–1
    const [visible, setVisible] = useState([1, 1, 0, 0]);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    useEffect(() => {
        const track = trackRef.current;
        const measure = () => {
            const box = track.getBoundingClientRect();
            setVisible(
                [...track.children].map((card) => {
                    const r = card.getBoundingClientRect();
                    const inside =
                        Math.min(r.right, box.right) -
                        Math.max(r.left, box.left);
                    return Math.max(0, inside / r.width);
                }),
            );
            setAtStart(track.scrollLeft <= 1);
            setAtEnd(
                track.scrollLeft >= track.scrollWidth - track.clientWidth - 1,
            );
        };

        // Fires once on observe, then on every resize
        const observer = new ResizeObserver(measure);
        observer.observe(track);
        track.addEventListener("scroll", measure, { passive: true });
        return () => {
            observer.disconnect();
            track.removeEventListener("scroll", measure);
        };
    }, []);

    // Scrolling is smooth through `motion-safe:scroll-smooth` on the track
    const scrollByCard = (direction) => {
        const track = trackRef.current;
        track.scrollBy({
            left: direction * track.firstElementChild.offsetWidth,
        });
    };
    const scrollToCard = (index) => {
        const track = trackRef.current;
        track.scrollTo({
            left:
                track.children[index].offsetLeft -
                track.firstElementChild.offsetLeft,
        });
    };

    return (
        <>
            <Container className="flex flex-wrap items-end justify-between gap-6">
                <Reveal as="h2" className="max-w-[13em] text-h2">
                    <Emphasis text={howItWorks.title} />
                </Reveal>
                <Reveal className="flex items-center gap-6">
                    <p className="text-label text-navy/74">
                        {howItWorks.label}
                    </p>
                    <div className="flex gap-2">
                        <button
                            type="button"
                            aria-label={howItWorks.previousLabel}
                            disabled={atStart}
                            onClick={() => scrollByCard(-1)}
                            className={arrowClass}
                        >
                            ←
                        </button>
                        <button
                            type="button"
                            aria-label={howItWorks.nextLabel}
                            disabled={atEnd}
                            onClick={() => scrollByCard(1)}
                            className={arrowClass}
                        >
                            →
                        </button>
                    </div>
                </Reveal>
            </Container>

            <div
                ref={trackRef}
                className="relative mt-16 flex snap-x snap-mandatory scroll-pl-gutter gap-[clamp(16px,2vw,32px)] overflow-x-auto px-gutter [scrollbar-width:none] motion-safe:scroll-smooth"
            >
                {howItWorks.steps.map((step, i) => (
                    <Reveal
                        as="article"
                        key={step.title}
                        delay={i * 110}
                        className="w-[min(80vw,440px)] shrink-0 snap-start"
                    >
                        <div className="relative aspect-4/5 overflow-hidden bg-navy">
                            <img
                                src={step.image}
                                alt=""
                                loading="lazy"
                                className="photo-mono size-full object-cover opacity-85 transition duration-1400 hover:scale-105 hover:opacity-100"
                            />
                            <span className="absolute top-4 left-5 text-[56px] leading-none font-light tracking-[-.04em] text-white">
                                {formatIndex(i)}
                            </span>
                        </div>
                        <h3 className="mt-6 mb-3 text-2xl font-medium tracking-[-.015em]">
                            {step.title}
                        </h3>
                        <p className="max-w-[24em] leading-relaxed text-navy/68">
                            {step.summary}
                        </p>
                    </Reveal>
                ))}
            </div>

            <Container className="mt-10 grid grid-cols-4 gap-2">
                {howItWorks.steps.map((step, i) => (
                    <button
                        key={step.title}
                        type="button"
                        onClick={() => scrollToCard(i)}
                        className="flex flex-col gap-3 pb-2 text-left"
                    >
                        <span className="relative h-0.5 overflow-hidden bg-navy/16">
                            <span
                                className="absolute inset-0 origin-left bg-navy transition-transform duration-700"
                                style={{ transform: `scaleX(${visible[i]})` }}
                            />
                        </span>
                        <span
                            className={cn(
                                "flex items-baseline gap-2.5 text-sm transition-opacity duration-600",
                                visible[i] <= 0.5 && "opacity-50",
                            )}
                        >
                            <span className="font-mono text-[11px]">
                                {formatIndex(i)}
                            </span>
                            {step.title}
                        </span>
                    </button>
                ))}
            </Container>
        </>
    );
}
