import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import ContactRow from "@/components/ui/ContactRow";
import Emphasis from "@/components/ui/Emphasis";
import TextLink from "@/components/ui/TextLink";
import { contact } from "@/data/home";

export default function ContactRows() {
    return (
        <section className="bg-bone pt-section pb-section-sm text-navy">
            <Container>
                <Reveal as="p" className="mb-10 text-label text-navy/74">
                    {contact.label}
                </Reveal>
                <Reveal as="h2" className="max-w-[10em] text-cta">
                    <Emphasis text={contact.title} />
                </Reveal>
                <Reveal
                    as="p"
                    className="mt-10 max-w-[26em] text-lead text-navy/68"
                >
                    {contact.description}
                </Reveal>

                <Reveal className="mt-section-sm border-t border-navy/16">
                    {contact.rows.map((row) => (
                        <ContactRow key={row.label} {...row} />
                    ))}
                </Reveal>

                <Reveal className="mt-10">
                    <TextLink href={contact.link.href}>
                        {contact.link.label}
                    </TextLink>
                </Reveal>
            </Container>
        </section>
    );
}
