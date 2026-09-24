import Container from "@/components/layout/Container";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { bepos } from "@/data/brands";
import { formatIndex } from "@/lib/utils";

export default function Bepos() {
    return (
        <section className="pt-section pb-section-sm">
            <Container className="mb-10 flex flex-wrap items-end justify-between gap-6">
                <Reveal as="h2" className="max-w-[13em] text-h2">
                    <Emphasis text={bepos.title} />
                </Reveal>
                <Reveal as="p" className="text-label text-white/76">
                    {bepos.label}
                </Reveal>
            </Container>

            {/* w-full stops aspect-ratio + min-height from widening phone layouts */}
            <div className="relative aspect-21/9 min-h-90 w-full overflow-hidden bg-navy-deep">
                <ParallaxImage
                    src={bepos.image}
                    factor={0.12}
                    className="photo-mono opacity-80"
                />
            </div>

            <Container className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {bepos.features.map((feature, i) => (
                    <Reveal
                        key={feature}
                        delay={i * 90}
                        className="border-b border-white/16 py-6"
                    >
                        <p className="mb-3 font-mono text-xs text-white/76">
                            {formatIndex(i)}
                        </p>
                        <p className="leading-relaxed text-white/70">
                            {feature}
                        </p>
                    </Reveal>
                ))}
            </Container>
        </section>
    );
}
