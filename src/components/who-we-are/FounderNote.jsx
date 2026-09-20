import Container from "../ui/Container";
import PersonCardPortrait from "../ui/PersonCardPortrait";
import SectionLabelPlain from "../ui/SectionLabelPlain";

// Nama, foto, dan isi catatan founder masih placeholder
export default function FounderNote() {
    return (
        <section id="founder" className="scroll-mt-28 pt-24 md:pt-32.5">
            <Container>
                <SectionLabelPlain className="rv mb-11">
                    A note from our founder
                </SectionLabelPlain>

                <div className="rv grid items-start gap-12 md:grid-cols-[minmax(0,.6fr)_minmax(0,1fr)] md:gap-16">
                    <PersonCardPortrait
                        name="[ Name ]"
                        role="Founder"
                        placeholder="Portrait placeholder"
                        className="max-w-sm md:max-w-none"
                    />

                    <div>
                        <p className="text-[clamp(20px,2vw,28px)] leading-[1.55] font-light tracking-[-.01em]">
                            Placeholder: send us the founder&apos;s note and
                            we&apos;ll set it here. This block holds roughly two
                            short paragraphs, pulled large so it reads as a
                            statement rather than body copy.
                        </p>
                        <p className="mt-7 text-[17px] leading-[1.85] text-primary/68">
                            A second, smaller paragraph can carry the practical
                            part: why the group was formed, what it sets out to
                            change for businesses in Indonesia, and what clients
                            should expect from working with the team.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
