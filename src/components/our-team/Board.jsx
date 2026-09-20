import Container from "../ui/Container";
import PersonCardPortrait from "../ui/PersonCardPortrait";
import SectionLabelPlain from "../ui/SectionLabelPlain";
import { board } from "@/data/about";

export default function Board() {
    return (
        <section className="pt-20 md:pt-22.5">
            <Container>
                <SectionLabelPlain className="rv mb-10">
                    Board of directors
                </SectionLabelPlain>

                <div className="rv-stagger grid grid-cols-2 gap-6.5 md:grid-cols-3 lg:grid-cols-5">
                    {board.map((person) => (
                        <PersonCardPortrait
                            key={person.role}
                            name={person.name}
                            role={person.role}
                            className="rv"
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
