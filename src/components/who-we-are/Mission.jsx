import Container from "../ui/Container";
import Heading from "../ui/Heading";
import SectionLabelPlain from "../ui/SectionLabelPlain";
import { mission } from "@/data/about";

export default function Mission() {
    return (
        <section className="pt-24 md:pt-32.5">
            <Container>
                <SectionLabelPlain className="rv mb-6">
                    Our mission
                </SectionLabelPlain>
                <Heading className="rv mb-16 max-w-[18em] text-[clamp(28px,3.2vw,48px)]">
                    Four commitments we{" "}
                    <span className="font-medium">hold ourselves to</span>.
                </Heading>

                <div className="rv-stagger grid gap-x-12 md:grid-cols-2">
                    {mission.map((item, index) => (
                        <div
                            key={item}
                            className="rv border-t border-primary/18 py-8"
                        >
                            <p className="mb-3.5 text-xs text-primary/74">
                                {index + 1}
                            </p>
                            <p className="text-[clamp(17px,1.6vw,19px)] leading-[1.65]">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
