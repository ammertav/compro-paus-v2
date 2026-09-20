import AccordionDefault from "../ui/AccordionDefault";
import Container from "../ui/Container";
import Glow from "../ui/Glow";
import Heading from "../ui/Heading";
import SectionLabelPlain from "../ui/SectionLabelPlain";
import { faqs } from "@/data/faqs";

export default function Faq() {
    return (
        <section
            id="faq"
            className="relative mt-24 scroll-mt-28 overflow-hidden bg-primary py-24 text-white md:mt-32.5 md:py-30"
        >
            <Glow position="bottom-left" onDark />

            <Container className="relative z-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="rv lg:sticky lg:top-30">
                    <SectionLabelPlain onDark className="mb-6">
                        FAQ
                    </SectionLabelPlain>
                    <Heading className="mb-5 text-[clamp(28px,3.2vw,48px)] leading-[1.08]">
                        Questions,
                        <br />
                        <span className="font-medium">answered</span>.
                    </Heading>
                    <p className="max-w-[24em] text-base leading-[1.8] text-white/62">
                        If something isn&apos;t covered here, send a message
                        above and we&apos;ll answer directly.
                    </p>
                </div>

                <AccordionDefault items={faqs} onDark className="rv" />
            </Container>
        </section>
    );
}
