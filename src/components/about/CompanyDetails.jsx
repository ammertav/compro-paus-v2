import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { companyDetails } from "@/data/about";

export default function CompanyDetails() {
    return (
        <section className="py-section">
            <Container className="grid items-start gap-wide lg:grid-cols-2">
                <div>
                    <Reveal as="p" className="mb-6 text-label text-white/76">
                        {companyDetails.label}
                    </Reveal>
                    <Reveal as="h2" className="text-h2-sm">
                        <Emphasis text={companyDetails.title} />
                    </Reveal>
                    <Reveal className="mt-12 border-t border-white/16">
                        {companyDetails.units.map((unit) => (
                            <p
                                key={unit.name}
                                className="flex flex-wrap justify-between gap-4 border-b border-white/16 py-4"
                            >
                                <span className="font-medium">{unit.name}</span>
                                <span className="text-white/70">
                                    {unit.note}
                                </span>
                            </p>
                        ))}
                    </Reveal>
                </div>

                <Reveal as="dl" className="border-t border-white/16">
                    {companyDetails.legal.map((row) => (
                        <div
                            key={row.key}
                            className="grid grid-cols-[minmax(120px,200px)_1fr] gap-6 border-b border-white/16 py-4.5 leading-normal"
                        >
                            <dt className="pt-0.75 font-mono text-xs text-white/76">
                                {row.key}
                            </dt>
                            <dd>{row.value}</dd>
                        </div>
                    ))}
                </Reveal>
            </Container>
        </section>
    );
}
