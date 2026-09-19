import Container from "../ui/Container";
import Figure from "../ui/Figure";
import { stats } from "@/data/home";

export default function Stats() {
    return (
        <section className="pt-24 md:pt-35">
            <Container>
                <Figure items={stats} className="rv" />
                <p className="rv mt-5 text-[13px] font-medium tracking-[.01em] text-primary/74">
                    Figures are placeholders
                </p>
            </Container>
        </section>
    );
}
