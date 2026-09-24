import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import { stats } from "@/data/home";

export default function Stats() {
    return (
        <Container className="mt-section">
            <div className="grid border-t border-navy/16 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <Reveal
                        key={stat.label}
                        delay={i * 110}
                        className="pt-8 pr-6"
                    >
                        <p className="text-stat">{stat.value}</p>
                        <p className="mt-4 text-navy/68">{stat.label}</p>
                    </Reveal>
                ))}
            </div>
        </Container>
    );
}
