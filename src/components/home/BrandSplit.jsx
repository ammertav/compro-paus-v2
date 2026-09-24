import Container from "@/components/layout/Container";
import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import TextLink from "@/components/ui/TextLink";
import { brands } from "@/data/brands";
import { business } from "@/data/home";
import { cn, formatIndex } from "@/lib/utils";

export default function BrandSplit() {
    return (
        <section>
            <Container className="flex flex-wrap items-end justify-between gap-6 pt-section-sm pb-10">
                <Reveal as="h2" className="max-w-[12em] text-h2">
                    <Emphasis text={business.title} />
                </Reveal>
                <Reveal as="p" className="text-label text-white/76">
                    {business.label}
                </Reveal>
            </Container>

            {brands.map((brand, i) => (
                <BrandRow key={brand.name} brand={brand} index={i} />
            ))}
        </section>
    );
}

// Ammertav: navy, photo left, white logo on a tile.
// INK.Creative: bone, photo right, dark logo as the heading.
function BrandRow({ brand, index }) {
    const light = index % 2 === 1;

    return (
        <div
            className={cn(
                "grid min-h-[88vh] lg:grid-cols-2",
                light && "bg-bone text-navy",
            )}
        >
            <div
                className={cn(
                    "relative min-h-105 overflow-hidden",
                    light ? "bg-navy lg:order-last" : "bg-navy-deep",
                )}
            >
                <ParallaxImage
                    src={brand.image}
                    className={light ? "grayscale-35" : "photo-mono opacity-70"}
                />
                {!light && (
                    <div className="absolute bottom-gutter left-gutter bg-navy px-7 py-5">
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="h-10"
                        />
                    </div>
                )}
            </div>

            <div className="flex flex-col justify-between gap-16 px-gutter py-wide">
                <Reveal>
                    <p
                        className={cn(
                            "mb-6 text-label",
                            light ? "text-navy/74" : "text-white/76",
                        )}
                    >
                        {formatIndex(index)} · {brand.category}
                    </p>
                    {light ? (
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="mb-8 h-14"
                        />
                    ) : (
                        <h3 className="mb-6 text-[clamp(36px,4vw,64px)] leading-none font-medium tracking-[-.035em]">
                            {brand.name}
                        </h3>
                    )}
                    <p
                        className={cn(
                            "max-w-[26em] text-lead",
                            // The bold phrase keeps the full ink colour
                            light
                                ? "text-navy/68 *:text-navy"
                                : "text-white/70",
                        )}
                    >
                        <Emphasis text={brand.description} />
                    </p>
                </Reveal>

                <Reveal>
                    <ul
                        className={cn(
                            "border-t",
                            light ? "border-navy/16" : "border-white/16",
                        )}
                    >
                        {brand.offerings.map((offering, i) => (
                            <li
                                key={offering}
                                className={cn(
                                    "flex justify-between gap-4 border-b py-4",
                                    light
                                        ? "border-navy/16"
                                        : "border-white/16",
                                )}
                            >
                                {offering}
                                <span
                                    className={cn(
                                        "font-mono text-xs",
                                        light
                                            ? "text-navy/74"
                                            : "text-white/76",
                                    )}
                                >
                                    {formatIndex(i)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <TextLink href={brand.cta.href} className="mt-8">
                        {brand.cta.label}
                    </TextLink>
                </Reveal>
            </div>
        </div>
    );
}
