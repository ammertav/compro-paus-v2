import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { leadership } from "@/data/about";

export default function Leadership() {
    return (
        <section className="bg-bone py-section text-navy">
            <Container>
                <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
                    <Reveal as="h2" className="max-w-[12em] text-h2">
                        <Emphasis text={leadership.title} />
                    </Reveal>
                    <Reveal as="p" className="text-label text-navy/74">
                        {leadership.label}
                    </Reveal>
                </div>

                {leadership.groups.map((group) => (
                    <div key={group.name} className="not-first:mt-section-sm">
                        <Reveal
                            as="p"
                            className="mb-6 border-b border-navy/16 pb-4 text-label text-navy/74"
                        >
                            {group.name}
                        </Reveal>
                        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {group.people.map((person, i) => (
                                <Reveal
                                    as="article"
                                    key={person.role}
                                    delay={(i % 3) * 110}
                                >
                                    {/* Grayscale until hovered */}
                                    <div className="aspect-3/4 overflow-hidden bg-bone-dim">
                                        <img
                                            src={person.image}
                                            alt=""
                                            loading="lazy"
                                            className="size-full object-cover grayscale transition duration-1000 hover:scale-104 hover:grayscale-0"
                                        />
                                    </div>
                                    <h3 className="mt-5 mb-1 text-xl font-medium">
                                        {person.name}
                                    </h3>
                                    <p className="text-label text-navy/68">
                                        {person.role}
                                    </p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    );
}
