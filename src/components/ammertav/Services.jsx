import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Collapse from "@/components/ui/Collapse";
import Emphasis from "@/components/ui/Emphasis";
import { ammertavServices } from "@/data/ammertav";
import { cn, formatIndex } from "@/lib/utils";

// Accordion: one service open at a time, the first open by default
export default function Services() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-bone py-section text-navy">
            <Container>
                <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
                    <Reveal as="h2" className="max-w-[12em] text-h2">
                        <Emphasis text={ammertavServices.title} />
                    </Reveal>
                    <Reveal as="p" className="text-label text-navy/74">
                        {ammertavServices.label}
                    </Reveal>
                </div>

                <div className="border-t border-navy/16">
                    {ammertavServices.items.map((service, i) => {
                        const open = openIndex === i;
                        return (
                            <Reveal
                                key={service.title}
                                className="border-b border-navy/16"
                            >
                                <button
                                    type="button"
                                    aria-expanded={open}
                                    onClick={() =>
                                        setOpenIndex(open ? null : i)
                                    }
                                    className="grid w-full grid-cols-[56px_1fr_auto] items-baseline gap-4 py-8 text-left"
                                >
                                    <span className="font-mono text-[13px] text-navy/74">
                                        {formatIndex(i)}
                                    </span>
                                    <span
                                        className={cn(
                                            "text-[clamp(28px,3.6vw,56px)] leading-[1.05] tracking-[-.03em]",
                                            open ? "font-medium" : "font-light",
                                        )}
                                    >
                                        {service.title}
                                    </span>
                                    <span
                                        className={cn(
                                            "text-[clamp(28px,3vw,44px)] leading-none font-light transition-transform duration-800",
                                            open && "rotate-45",
                                        )}
                                    >
                                        +
                                    </span>
                                </button>

                                <Collapse open={open}>
                                    <div className="grid items-start gap-8 pb-12 md:grid-cols-2 md:pl-[clamp(0px,5vw,72px)]">
                                        <p className="max-w-[28em] text-lead text-navy/68">
                                            {service.description}
                                        </p>
                                        <div className="aspect-16/10 overflow-hidden bg-navy">
                                            <img
                                                src={service.image}
                                                alt=""
                                                loading="lazy"
                                                className="photo-mono size-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </Collapse>
                            </Reveal>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
