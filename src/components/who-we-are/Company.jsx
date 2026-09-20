import Container from "../ui/Container";
import SectionLabelPlain from "../ui/SectionLabelPlain";
import { company } from "@/data/company";

export default function Company() {
    return (
        <section className="pt-10">
            <Container className="rv grid items-start gap-10 lg:grid-cols-[200px_minmax(0,1fr)]">
                <SectionLabelPlain>The company</SectionLabelPlain>

                <div className="grid gap-8 text-[17px] leading-[1.85] text-primary/68 md:grid-cols-2 md:gap-12">
                    <p>
                        In a digital era that keeps moving, businesses need both
                        integrated technology and a clear creative strategy.{" "}
                        <span className="font-medium text-primary">
                            {company.name}
                        </span>{" "}
                        works across IT solutions and creative digital, helping
                        businesses adapt and grow on a footing that lasts.
                    </p>
                    <p>
                        We combine{" "}
                        <span className="font-medium text-primary">
                            technical expertise
                        </span>{" "}
                        with{" "}
                        <span className="font-medium text-primary">
                            creative craft
                        </span>
                        : solutions that work, look considered, and make a
                        strategic difference for every client we take on.
                    </p>
                </div>
            </Container>
        </section>
    );
}
