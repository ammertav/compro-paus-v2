import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { inkServices } from "@/data/inkCreative";
import { formatIndex } from "@/lib/utils";

export default function Services() {
    return (
        <section className="bg-bone py-section text-navy">
            <Container>
                <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
                    <Reveal as="h2" className="max-w-[12em] text-h2">
                        <Emphasis text={inkServices.title} />
                    </Reveal>
                    <Reveal as="p" className="text-label text-navy/74">
                        {inkServices.label}
                    </Reveal>
                </div>

                <div className="grid gap-x-6 gap-y-[clamp(40px,4vw,64px)] lg:grid-cols-2">
                    {inkServices.items.map((service, i) => (
                        <Reveal
                            as="article"
                            key={service.title}
                            delay={i * 120}
                            className="flex flex-col gap-6"
                        >
                            <div className="aspect-4/3 overflow-hidden bg-navy">
                                <img
                                    src={service.image}
                                    alt=""
                                    loading="lazy"
                                    className="photo-mono size-full object-cover transition duration-1000 hover:scale-104 hover:grayscale-0"
                                />
                            </div>
                            <div className="flex gap-4 border-t border-navy pt-6">
                                <span className="w-14 shrink-0 pt-2.5 font-mono text-[13px] text-navy/74">
                                    {formatIndex(i)}
                                </span>
                                <div>
                                    <h3 className="mb-4 text-[clamp(28px,3vw,44px)] leading-[1.05] font-medium tracking-[-.03em]">
                                        {service.title}
                                    </h3>
                                    <p className="max-w-[30em] text-[17px] leading-relaxed text-navy/68">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
