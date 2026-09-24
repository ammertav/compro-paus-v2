import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import TextLink from "@/components/ui/TextLink";
import Container from "./Container";

// Bone band before the footer: a big line and a couple of links
export default function ClosingCta({ label, title, links }) {
    return (
        <section className="bg-bone py-section text-navy">
            <Container className="flex flex-wrap items-end justify-between gap-10">
                <div>
                    {label && (
                        <Reveal as="p" className="mb-6 text-label text-navy/74">
                            {label}
                        </Reveal>
                    )}
                    <Reveal as="h2" className="max-w-[10em] text-title">
                        <Emphasis text={title} />
                    </Reveal>
                </div>
                <Reveal className="flex flex-wrap gap-8">
                    {links.map((link) => (
                        <TextLink key={link.href} href={link.href}>
                            {link.label}
                        </TextLink>
                    ))}
                </Reveal>
            </Container>
        </section>
    );
}
