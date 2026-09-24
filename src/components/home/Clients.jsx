import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { clients } from "@/data/home";

export default function Clients() {
    return (
        <Container className="mt-section">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                <Reveal as="h2" className="max-w-[13em] text-h2">
                    <Emphasis text={clients.title} />
                </Reveal>
                <Reveal as="p" className="text-label text-navy/74">
                    {clients.label}
                </Reveal>
            </div>

            {/* Outer top/left border + cell right/bottom borders = one hairline everywhere */}
            <Reveal className="grid grid-cols-2 border-t border-l border-navy/16 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {clients.items.map((client) => (
                    <div
                        key={client.name}
                        className="flex aspect-3/2 flex-col items-center justify-center gap-1.5 border-r border-b border-navy/16 transition-colors duration-600 hover:bg-navy hover:text-white"
                    >
                        <span className="text-lg font-medium tracking-[-.01em]">
                            {client.name}
                        </span>
                        <span className="font-mono text-[11px] opacity-74">
                            {client.sector}
                        </span>
                    </div>
                ))}
            </Reveal>

            <Reveal as="p" className="mt-4 font-mono text-xs text-navy/74">
                {clients.note}
            </Reveal>
        </Container>
    );
}
