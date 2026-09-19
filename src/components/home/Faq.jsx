import { Link } from "react-router";
import Accordion from "../ui/Accordion";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import SectionLabel from "../ui/SectionLabel";
import { faqs } from "@/data/faqs";

export default function Faq() {
    return (
        <section id="faq" className="scroll-mt-28 pt-24 md:pt-35">
            <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,.55fr)_minmax(0,1fr)] lg:gap-16">
                <div className="lg:sticky lg:top-30">
                    <SectionLabel className="rv mb-6">FAQ</SectionLabel>
                    <Heading className="rv mb-5.5 text-[clamp(28px,3.2vw,48px)]">
                        Questions,
                        <br />
                        <span className="font-medium">answered</span>.
                    </Heading>
                    <p className="rv max-w-[24em] text-base leading-[1.75] text-primary/74">
                        Still unclear on something?{" "}
                        <Link to="/contact" className="underline">
                            Send us a message
                        </Link>{" "}
                        and we&apos;ll reply directly.
                    </p>
                </div>

                <Accordion items={faqs} className="rv" />
            </Container>
        </section>
    );
}
