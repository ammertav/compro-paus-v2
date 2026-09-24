import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Collapse from "@/components/ui/Collapse";
import Emphasis from "@/components/ui/Emphasis";
import { openRoles } from "@/data/career";
import { cn } from "@/lib/utils";

// Accordion: all roles start closed, one open at a time
export default function OpenRoles() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="roles" className="py-section">
            <Container>
                <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
                    <Reveal as="h2" className="text-h2">
                        <Emphasis text={openRoles.title} />
                    </Reveal>
                    <Reveal as="p" className="font-mono text-xs text-white/76">
                        {openRoles.note}
                    </Reveal>
                </div>

                <div className="border-t border-white/16">
                    {openRoles.items.map((role, i) => {
                        const open = openIndex === i;
                        return (
                            <Reveal
                                key={role.title}
                                className="border-b border-white/16"
                            >
                                <button
                                    type="button"
                                    aria-expanded={open}
                                    onClick={() =>
                                        setOpenIndex(open ? null : i)
                                    }
                                    className="grid w-full grid-cols-[minmax(0,2fr)_minmax(0,1fr)_auto] items-baseline gap-6 py-8 text-left transition-[padding] duration-700 hover:pl-4"
                                >
                                    <span className="text-[clamp(24px,3vw,44px)] leading-[1.1] font-light tracking-[-.03em]">
                                        {role.title}
                                    </span>
                                    <span className="text-label text-white/70">
                                        {role.meta}
                                    </span>
                                    <span
                                        className={cn(
                                            "text-[32px] leading-none font-light transition-transform duration-800",
                                            open && "rotate-45",
                                        )}
                                    >
                                        +
                                    </span>
                                </button>

                                <Collapse open={open}>
                                    <div className="grid gap-8 pb-12 md:grid-cols-2 lg:grid-cols-3">
                                        <RoleList
                                            label={openRoles.dutiesLabel}
                                            items={role.duties}
                                        />
                                        <RoleList
                                            label={openRoles.needsLabel}
                                            items={role.needs}
                                        />
                                        <div className="flex items-end">
                                            <a
                                                href={role.apply}
                                                className="bg-bone px-6 py-4 font-medium text-navy"
                                            >
                                                {openRoles.applyLabel}
                                            </a>
                                        </div>
                                    </div>
                                </Collapse>
                            </Reveal>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

function RoleList({ label, items }) {
    return (
        <div>
            <p className="mb-4 text-[13px] text-white/76">{label}</p>
            <ul>
                {items.map((item) => (
                    <li
                        key={item}
                        className="border-t border-white/16 py-3 text-white/70"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
