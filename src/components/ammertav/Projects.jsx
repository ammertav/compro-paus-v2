import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function Projects() {
    // null shows every project
    const [type, setType] = useState(null);
    const shown = type
        ? projects.items.filter((item) => item.type === type)
        : projects.items;

    const chips = [
        { label: projects.allLabel, value: null, count: projects.items.length },
        ...projects.types.map((label) => ({
            label,
            value: label,
            count: projects.items.filter((item) => item.type === label).length,
        })),
    ];

    return (
        <section id="projects" className="bg-bone py-section text-navy">
            <Container>
                <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                    <Reveal as="h2" className="max-w-[12em] text-h2">
                        <Emphasis text={projects.title} />
                    </Reveal>
                    <Reveal as="p" className="text-label text-navy/74">
                        {projects.label}
                    </Reveal>
                </div>

                <Reveal className="mb-10 flex flex-wrap gap-2">
                    {chips.map((chip) => (
                        <button
                            key={chip.label}
                            type="button"
                            aria-pressed={type === chip.value}
                            onClick={() => setType(chip.value)}
                            className={cn(
                                "flex items-baseline gap-2 border border-navy px-4.5 py-3 text-label transition-colors duration-500",
                                type === chip.value && "bg-navy text-white",
                            )}
                        >
                            {chip.label}
                            <span className="font-mono text-[11px] opacity-74">
                                {chip.count}
                            </span>
                        </button>
                    ))}
                </Reveal>

                {/* The key remounts the cards on every filter change, replaying their enter animation */}
                <div
                    key={type}
                    className="grid gap-x-6 gap-y-12 lg:grid-cols-2 xl:grid-cols-3"
                >
                    {shown.map((project, i) => (
                        <article
                            key={project.client}
                            style={{ animationDelay: `${i * 70}ms` }}
                            className="flex flex-col gap-5 motion-safe:animate-enter"
                        >
                            <div className="relative aspect-16/10 overflow-hidden bg-navy">
                                <img
                                    src={project.image}
                                    alt=""
                                    loading="lazy"
                                    className="photo-mono size-full object-cover transition duration-1000 hover:scale-104 hover:grayscale-0"
                                />
                                <span className="absolute top-4 left-4 bg-bone px-3 py-1.5 font-mono text-xs">
                                    {project.type}
                                </span>
                            </div>
                            <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-2 border-t border-navy pt-5">
                                <h3 className="text-[22px] font-medium tracking-[-.015em]">
                                    {project.client}
                                </h3>
                                <span className="font-mono text-xs text-navy/74">
                                    {project.year}
                                </span>
                                <p className="col-span-full leading-relaxed text-navy/68">
                                    {project.summary}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <p className="mt-10 font-mono text-xs text-navy/74">
                    {projects.note}
                </p>
            </Container>
        </section>
    );
}
