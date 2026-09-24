import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import TextLink from "@/components/ui/TextLink";
import { products } from "@/data/products";
import { cn, formatIndex } from "@/lib/utils";

// Tabs switch the product; both photos stay stacked so they crossfade
export default function Products() {
    const [activeIndex, setActiveIndex] = useState(0);
    const product = products.items[activeIndex];

    return (
        <section id="products" className="pt-section pb-section-sm">
            <Container>
                <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
                    <Reveal as="h2" className="max-w-[12em] text-h2">
                        <Emphasis text={products.title} />
                    </Reveal>
                    <Reveal as="p" className="text-label text-white/76">
                        {products.label}
                    </Reveal>
                </div>

                <Reveal className="grid grid-cols-2 border-t border-white/16">
                    {products.items.map((item, i) => {
                        const active = i === activeIndex;
                        return (
                            <button
                                key={item.name}
                                type="button"
                                aria-pressed={active}
                                onClick={() => setActiveIndex(i)}
                                className={cn(
                                    "relative flex flex-col gap-1.5 py-6 pr-6 text-left transition-opacity duration-600",
                                    !active && "opacity-50",
                                )}
                            >
                                <span
                                    className={cn(
                                        "absolute -top-px right-6 left-0 h-0.75 origin-left bg-white transition-transform duration-800",
                                        !active && "scale-x-0",
                                    )}
                                />
                                <span className="text-[clamp(24px,2.6vw,40px)] leading-none font-medium tracking-[-.03em]">
                                    {item.name}
                                </span>
                                <span className="text-label text-white/70">
                                    {item.kind}
                                </span>
                            </button>
                        );
                    })}
                </Reveal>
            </Container>

            {/* w-full stops aspect-ratio + min-height from widening phone layouts */}
            <div className="relative mt-6 aspect-21/9 min-h-90 w-full overflow-hidden bg-navy-deep">
                {products.items.map((item, i) => (
                    <img
                        key={item.name}
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className={cn(
                            "photo-mono absolute inset-0 size-full object-cover transition-[opacity,scale] duration-[1s,2s]",
                            i === activeIndex
                                ? "opacity-80"
                                : "scale-106 opacity-0",
                        )}
                    />
                ))}
                <span className="absolute bottom-5 left-gutter bg-navy px-3 py-1.5 font-mono text-xs">
                    {product.status}
                </span>
            </div>

            <Container>
                <div className="grid gap-x-wide gap-y-6 pt-12 pb-6 lg:grid-cols-2">
                    <h3 className="text-[clamp(26px,2.8vw,42px)] leading-[1.12] font-light tracking-[-.025em]">
                        <strong>{product.name}</strong>, {product.tagline}
                    </h3>
                    <p className="text-lead text-white/70">
                        {product.description}
                    </p>
                </div>

                <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {product.features.map((feature, i) => (
                        <div
                            key={feature}
                            className="border-b border-white/16 py-6"
                        >
                            <p className="mb-3 font-mono text-xs text-white/76">
                                {formatIndex(i)}
                            </p>
                            <p className="leading-relaxed text-white/70">
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>

                <TextLink href={product.demo.href} className="mt-10">
                    {product.demo.label}
                </TextLink>
            </Container>
        </section>
    );
}
