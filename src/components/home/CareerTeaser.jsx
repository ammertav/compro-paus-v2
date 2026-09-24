import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import TextLink from "@/components/ui/TextLink";
import { careerTeaser } from "@/data/home";

export default function CareerTeaser() {
    return (
        <section>
            <Container className="grid items-end gap-10 py-section lg:grid-cols-2">
                <Reveal as="h2" className="text-h2">
                    <Emphasis text={careerTeaser.title} />
                </Reveal>
                <Reveal className="flex flex-col items-start gap-6">
                    <p className="text-label text-white/76">
                        {careerTeaser.label}
                    </p>
                    <p className="max-w-[26em] text-lg leading-relaxed text-white/70">
                        {careerTeaser.description}
                    </p>
                    <TextLink href={careerTeaser.link.href}>
                        {careerTeaser.link.label}
                    </TextLink>
                </Reveal>
            </Container>
        </section>
    );
}
