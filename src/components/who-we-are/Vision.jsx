import Container from "../ui/Container";
import Glow from "../ui/Glow";
import Heading from "../ui/Heading";
import SectionLabelPlain from "../ui/SectionLabelPlain";

export default function Vision() {
    return (
        <section className="relative mt-24 overflow-hidden bg-primary py-24 text-white md:mt-32.5 md:py-32.5">
            <Glow position="bottom-left" onDark />

            <Container className="relative z-10">
                <SectionLabelPlain onDark className="rv mb-7.5">
                    Our vision
                </SectionLabelPlain>
                <Heading className="rv max-w-[26em] text-[clamp(28px,3.5vw,56px)] leading-[1.12]">
                    To become Indonesia&apos;s{" "}
                    <span className="font-medium">leading conglomerate</span>,
                    growing sustainably across many sectors, contributing to the
                    economy and the wellbeing of{" "}
                    <span className="font-medium">Nusantara</span>.
                </Heading>
            </Container>
        </section>
    );
}
