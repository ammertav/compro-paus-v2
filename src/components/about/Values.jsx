import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Pillar from "@/components/ui/Pillar";
import { valuesLabel } from "@/data/about";
import { pillars } from "@/data/home";

export default function Values() {
    return (
        <section className="pb-section">
            <Container>
                <Reveal as="p" className="mb-10 text-label text-white/76">
                    {valuesLabel}
                </Reveal>
                <div className="grid gap-10 lg:grid-cols-3">
                    {pillars.map((pillar, i) => (
                        <Reveal
                            key={pillar.title}
                            delay={i * 120}
                            className="flex flex-col gap-6"
                        >
                            <div className="aspect-4/3 overflow-hidden bg-navy-deep">
                                <img
                                    src={pillar.image}
                                    alt=""
                                    loading="lazy"
                                    className="photo-mono size-full object-cover opacity-85 transition duration-1400 hover:scale-105"
                                />
                            </div>
                            <Pillar index={i} pillar={pillar} />
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
