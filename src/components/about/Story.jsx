import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { story } from "@/data/about";

export default function Story() {
    return (
        <section className="bg-bone py-section text-navy">
            <Container className="grid items-start gap-wide lg:grid-cols-2">
                {/* Stays in view while the story scrolls past */}
                <div className="sticky top-28 flex flex-col gap-8">
                    <Reveal as="p" className="text-label text-navy/74">
                        {story.label}
                    </Reveal>
                    <Reveal as="h2" className="text-h2">
                        <Emphasis text={story.title} />
                    </Reveal>
                    <Reveal className="aspect-4/3 overflow-hidden bg-navy">
                        <img
                            src={story.image}
                            alt=""
                            loading="lazy"
                            className="photo-mono size-full object-cover"
                        />
                    </Reveal>
                </div>

                <div className="flex flex-col gap-8 pt-2">
                    <Reveal
                        as="p"
                        className="text-[clamp(24px,2.4vw,34px)] leading-[1.35] font-light tracking-[-.02em] text-pretty"
                    >
                        <Emphasis text={story.lead} />
                    </Reveal>
                    {story.paragraphs.map((paragraph) => (
                        <Reveal
                            as="p"
                            key={paragraph}
                            className="text-lg leading-relaxed text-pretty text-navy/68"
                        >
                            {paragraph}
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
