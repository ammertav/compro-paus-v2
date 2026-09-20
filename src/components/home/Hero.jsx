import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";
import Container from "../ui/Container";
import Glow from "../ui/Glow";
import Parallax from "../ui/Parallax";
import SectionLabelPlain from "../ui/SectionLabelPlain";
import { company } from "@/data/company";

export default function Hero() {
    return (
        <section className="relative overflow-hidden pb-27.5">
            <Glow position="top-right" />
            <Glow position="bottom-left" />

            <Container className="relative z-20 pt-20 text-center md:pt-27.5">
                <SectionLabelPlain className="mb-7">
                    {company.tagline}
                </SectionLabelPlain>
                <h1 className="mx-auto max-w-[17em] text-[clamp(40px,5.4vw,82px)] leading-[1.03] font-light tracking-[-.035em] text-balance">
                    We build what business runs on, and the{" "}
                    <span className="font-medium">story it runs with</span>.
                </h1>
                <p className="mx-auto mt-8.5 max-w-[34em] text-lg leading-[1.75] text-primary/68">
                    {company.name} pairs integrated technology with creative
                    digital work, so businesses can adapt and grow on a footing
                    that lasts.
                </p>
                <div className="mt-10.5 flex flex-wrap justify-center gap-3.5">
                    <ButtonPrimary href="/contact">
                        Start a project
                    </ButtonPrimary>
                    <ButtonSecondary href="/how-it-works">
                        How it works
                    </ButtonSecondary>
                </div>
            </Container>

            {/* Gambar hero dengan efek parallax */}
            <Parallax className="relative z-10 mt-16">
                <Container>
                    <figure className="aspect-4/3 overflow-hidden rounded-[18px] md:aspect-21/9">
                        <img
                            src="/images/image-hero.webp"
                            alt=""
                            className="block size-full object-cover object-[center_72%]"
                        />
                    </figure>
                </Container>
            </Parallax>
        </section>
    );
}
