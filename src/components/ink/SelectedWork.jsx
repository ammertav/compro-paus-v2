import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { selectedWork } from "@/data/inkCreative";
import { cn } from "@/lib/utils";

// From md up, a 12-column grid: wide 4:3 (7 cols) and tall 3:4 (5 cols),
// alternating so the rows read 7|5 then 5|7. Below md every card is full width at 4:3.
export default function SelectedWork() {
    return (
        <section className="pb-section">
            <Container>
                <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                    <Reveal as="h2" className="text-h2">
                        <Emphasis text={selectedWork.title} />
                    </Reveal>
                    <Reveal as="p" className="font-mono text-xs text-white/76">
                        {selectedWork.note}
                    </Reveal>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    {selectedWork.items.map((item, i) => {
                        const wide = i % 3 === 0;
                        return (
                            <Reveal
                                as="figure"
                                key={item.title}
                                delay={(i % 2) * 120}
                                className={cn(
                                    "col-span-12 min-w-0",
                                    wide ? "md:col-span-7" : "md:col-span-5",
                                )}
                            >
                                <div
                                    className={cn(
                                        "aspect-4/3 overflow-hidden bg-navy-deep",
                                        !wide && "md:aspect-3/4",
                                    )}
                                >
                                    <img
                                        src={item.image}
                                        alt=""
                                        loading="lazy"
                                        className="photo-mono size-full object-cover transition duration-1000 hover:scale-104 hover:grayscale-0"
                                    />
                                </div>
                                <figcaption className="mt-3 flex justify-between gap-4 text-label">
                                    <span>{item.title}</span>
                                    <span className="text-white/70">
                                        {item.kind}
                                    </span>
                                </figcaption>
                            </Reveal>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
