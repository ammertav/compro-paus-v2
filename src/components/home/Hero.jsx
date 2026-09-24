import Container from "@/components/layout/Container";
import HeroImage from "@/components/motion/HeroImage";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { brands } from "@/data/brands";
import { company } from "@/data/company";
import { hero } from "@/data/home";

export default function Hero() {
    return (
        <header className="relative flex min-h-[max(680px,100vh)] flex-col justify-end overflow-hidden">
            <HeroImage
                src={hero.image}
                parallax={0.35}
                className="origin-[70%_40%] object-[center_60%] opacity-40"
            />
            <Container className="relative pb-10">
                <Reveal
                    as="p"
                    delay={100}
                    className="mb-7 text-label text-white/76"
                >
                    {company.tagline}
                </Reveal>
                <Reveal
                    as="h1"
                    delay={220}
                    className="max-w-[13em] text-display"
                >
                    <Emphasis text={hero.title} />
                </Reveal>
                <Reveal
                    delay={380}
                    className="mt-14 grid gap-x-10 gap-y-6 border-t border-white/16 pt-6 text-label leading-relaxed sm:grid-cols-2 lg:grid-cols-4"
                >
                    <p className="max-w-[30em] text-white/70 sm:col-span-2">
                        {company.summary}
                    </p>
                    {brands.map((brand) => (
                        <p key={brand.name} className="flex flex-col gap-1">
                            <span className="font-medium">{brand.name}</span>
                            <span className="text-white/70">
                                {brand.category}
                            </span>
                        </p>
                    ))}
                </Reveal>
            </Container>
        </header>
    );
}
