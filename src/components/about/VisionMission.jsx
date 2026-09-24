import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { mission, vision } from "@/data/about";
import { formatIndex } from "@/lib/utils";

export default function VisionMission() {
    return (
        <section className="py-section">
            <Container>
                <Reveal as="p" className="mb-10 text-label text-white/76">
                    {vision.label}
                </Reveal>
                <Reveal
                    as="p"
                    className="max-w-[20em] text-statement text-pretty"
                >
                    {vision.statement}
                </Reveal>

                <div className="mt-stack grid items-start gap-10 lg:grid-cols-3">
                    <div>
                        <Reveal
                            as="p"
                            className="mb-6 text-label text-white/76"
                        >
                            {mission.label}
                        </Reveal>
                        <Reveal as="h2" className="text-h2-sm">
                            <Emphasis text={mission.title} />
                        </Reveal>
                    </div>

                    <ol className="border-t border-white/16 lg:col-span-2">
                        {mission.items.map((item, i) => (
                            <Reveal
                                as="li"
                                key={item}
                                delay={i * 90}
                                className="flex gap-4 border-b border-white/16 py-7"
                            >
                                <span className="w-16 shrink-0 pt-1.5 font-mono text-[13px] text-white/76">
                                    {formatIndex(i)}
                                </span>
                                <p className="text-[clamp(18px,1.6vw,24px)] leading-[1.45] tracking-[-.01em]">
                                    {item}
                                </p>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </Container>
        </section>
    );
}
