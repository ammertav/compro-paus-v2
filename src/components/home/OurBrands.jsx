import CardMedia from "../ui/CardMedia";
import Container from "../ui/Container";
import Glow from "../ui/Glow";
import Heading from "../ui/Heading";
import SectionLabelPlain from "../ui/SectionLabelPlain";
import { brands } from "@/data/brands";

export default function OurBrands() {
    return (
        <section>
            <Container className="relative pt-24 md:pt-35">
                <Glow position="top-left" />

                <div className="relative z-10">
                    <SectionLabelPlain className="rv mb-6">
                        Our brands
                    </SectionLabelPlain>
                    <Heading className="rv mb-16 max-w-[20em]">
                        One group.{" "}
                        <span className="font-medium">
                            Digitally integrated
                        </span>
                        .
                    </Heading>

                    <div className="rv-stagger grid gap-8 md:grid-cols-2">
                        {brands.map((brand) => (
                            <CardMedia
                                key={brand.name}
                                href="/our-brands"
                                image={brand.logo}
                                imageAlt={brand.name}
                                isDarkMediaBg={brand.isDarkLogoBg}
                                eyebrow={brand.category}
                                title={brand.name}
                                className="rv"
                            >
                                {brand.summary}
                            </CardMedia>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
