import Container from "../ui/Container";
import Heading from "../ui/Heading";
import SectionLabelPlain from "../ui/SectionLabelPlain";
import { pillars } from "@/data/home";

export default function Approach() {
    return (
        <section className="pt-24 md:pt-35">
            <Container>
                <SectionLabelPlain className="rv mb-6">
                    Our approach
                </SectionLabelPlain>
                <Heading className="rv max-w-[22em]">
                    Meeting the business{" "}
                    <span className="font-medium">where it already is</span>.
                </Heading>

                <div className="rv-stagger mt-14 grid gap-px border-y border-primary/16 bg-primary/16 md:mt-20 md:grid-cols-3">
                    {pillars.map((pillar, index) => (
                        <div
                            key={pillar.title}
                            className="rv bg-background pt-11 pr-8 pb-12"
                        >
                            <p className="mb-6.5 text-xs text-primary/74">
                                {index + 1}
                            </p>
                            <h3 className="mb-3.5 text-2xl font-medium tracking-[-.01em]">
                                {pillar.title}
                            </h3>
                            <p className="text-base leading-[1.75] text-primary/68">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
