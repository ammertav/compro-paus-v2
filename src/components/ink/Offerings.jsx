import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { brands } from "@/data/brands";
import { inkOfferings } from "@/data/inkCreative";
import { formatIndex } from "@/lib/utils";

const { offerings } = brands[1];

export default function Offerings() {
    return (
        <section className="py-section">
            <Container className="grid items-start gap-wide lg:grid-cols-2">
                <div>
                    <Reveal as="p" className="mb-6 text-label text-white/76">
                        {inkOfferings.label}
                    </Reveal>
                    <Reveal as="h2" className="text-h2-sm">
                        <Emphasis text={inkOfferings.title} />
                    </Reveal>
                </div>

                <ul className="border-t border-white/16">
                    {offerings.map((offering, i) => (
                        <Reveal
                            as="li"
                            key={offering}
                            delay={i * 90}
                            className="border-b border-white/16"
                        >
                            {/* Hover transition lives here so it doesn't replace Reveal's */}
                            <div className="flex gap-4 py-7 transition-[padding] duration-700 hover:pl-4">
                                <span className="w-16 shrink-0 pt-2 font-mono text-[13px] text-white/76">
                                    {formatIndex(i)}
                                </span>
                                <span className="text-[clamp(22px,2.2vw,32px)] font-light tracking-[-.02em]">
                                    {offering}
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
