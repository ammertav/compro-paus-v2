import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import Pillar from "@/components/ui/Pillar";
import TextLink from "@/components/ui/TextLink";
import { pillars, whoWeAre } from "@/data/home";

export default function WhoWeAre() {
    return (
        <section className="pt-[clamp(104px,14vw,200px)] pb-[clamp(64px,8vw,120px)]">
            <Container>
                <Reveal as="p" className="mb-10 text-label text-white/76">
                    {whoWeAre.label}
                </Reveal>
                <Reveal
                    as="p"
                    className="max-w-[20em] text-statement text-pretty"
                >
                    <Emphasis text={whoWeAre.statement} />
                </Reveal>

                <div className="mt-[clamp(64px,8vw,120px)] grid gap-10 lg:grid-cols-3">
                    {pillars.map((pillar, i) => (
                        <Reveal key={pillar.title} delay={i * 120}>
                            <Pillar index={i} pillar={pillar} />
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-14">
                    <TextLink href={whoWeAre.link.href}>
                        {whoWeAre.link.label}
                    </TextLink>
                </Reveal>
            </Container>
        </section>
    );
}
