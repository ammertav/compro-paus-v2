import { cn } from "@/lib/utils";
import ButtonPrimary from "../ui/ButtonPrimary";
import Container from "../ui/Container";
import ListRowPlain from "../ui/ListRowPlain";
import { brands } from "@/data/brands";

export default function BrandShowcase() {
    return (
        <section className="pt-20 md:pt-22.5">
            <Container className="flex flex-col gap-6.5">
                {brands.map((brand) => (
                    <article
                        key={brand.name}
                        className="rv grid overflow-hidden rounded-[22px] bg-white md:grid-cols-2"
                    >
                        <figure
                            className={cn(
                                "flex min-h-75 items-center justify-center self-stretch border-b border-primary/8 p-10 md:p-14",
                                brand.isDarkLogoBg ? "bg-primary" : "bg-white",
                            )}
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="block h-auto max-h-60 w-auto max-w-full object-contain"
                            />
                        </figure>

                        <div className="px-6 py-10 md:px-12 md:py-14">
                            <p className="mb-3.5 text-[13px] font-medium tracking-[.01em] text-primary/74">
                                {brand.category}
                            </p>
                            <h2 className="mb-4.5 text-[clamp(28px,3vw,42px)] font-medium tracking-[-.025em]">
                                {brand.name}
                            </h2>
                            <p className="mb-7.5 max-w-[34em] text-[17px] leading-[1.8] text-primary/68">
                                {brand.description}
                            </p>

                            <div className="border-t border-primary/14">
                                {brand.offerings.map((offering) => (
                                    <ListRowPlain
                                        key={offering}
                                        title={offering}
                                    />
                                ))}
                            </div>

                            <div className="mt-8">
                                <ButtonPrimary href={brand.cta.href} size="md">
                                    {brand.cta.label}
                                </ButtonPrimary>
                            </div>
                        </div>
                    </article>
                ))}
            </Container>
        </section>
    );
}
