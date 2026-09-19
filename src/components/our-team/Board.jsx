import Container from "../ui/Container";
import PersonCard from "../ui/PersonCard";
import SectionLabel from "../ui/SectionLabel";
import { board } from "@/data/about";

export default function Board() {
    return (
        <section className="pt-20 md:pt-22.5">
            <Container>
                <SectionLabel className="rv mb-10">
                    Board of directors
                </SectionLabel>

                <div className="rv-stagger grid grid-cols-2 gap-6.5 md:grid-cols-3 lg:grid-cols-5">
                    {board.map((person) => (
                        <PersonCard
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
