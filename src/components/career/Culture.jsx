import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { culture } from "@/data/career";
import { cn, formatIndex } from "@/lib/utils";

export default function Culture() {
    return (
        <section className="bg-bone py-section text-navy">
            <Container>
                <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
                    <Reveal as="h2" className="max-w-[12em] text-h2">
                        <Emphasis text={culture.title} />
                    </Reveal>
                    <Reveal as="p" className="text-label text-navy/74">
                        {culture.label}
                    </Reveal>
                </div>

                <div className="grid gap-10 lg:grid-cols-3">
                    {culture.items.map((item, i) => (
                        <Reveal
                            key={item.title}
                            delay={i * 110}
                            className="flex flex-col gap-4 border-t border-navy pt-6"
                        >
                            <p className="font-mono text-xs text-navy/74">
                                {formatIndex(i)}
                            </p>
                            <h3 className="text-2xl font-medium tracking-[-.015em]">
                                {item.title}
                            </h3>
                            <p className="leading-relaxed text-navy/68">
                                {item.text}
                            </p>
                        </Reveal>
                    ))}
                </div>
            </Container>

            {/* Wider than the page container; the middle photo is square,
                the outer two 4:5, all sitting on the same bottom line */}
            <div className="mx-auto mt-stack grid max-w-[1552px] items-end gap-4 px-gutter md:grid-cols-3">
                {culture.photos.map((photo, i) => (
                    <Reveal
                        key={photo}
                        delay={i * 110}
                        className={cn(
                            "overflow-hidden bg-navy",
                            i === 1 ? "aspect-square" : "aspect-4/5",
                        )}
                    >
                        <img
                            src={photo}
                            alt=""
                            loading="lazy"
                            className="photo-mono size-full object-cover transition duration-1400 hover:scale-104"
                        />
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
