import BrandShowcase from "@/components/our-brands/BrandShowcase";
import Products from "@/components/our-brands/Products";
import PageHero from "@/components/ui/PageHero";
import useReveal from "@/hooks/useReveal";

export default function OurBrands() {
    useReveal();

    return (
        <>
            <title>Our Brands | PAUS</title>

            <PageHero
                label="Our Brands"
                title={
                    <>
                        Two houses under one group, held to{" "}
                        <span className="font-medium">one standard</span>.
                    </>
                }
                description="Ammertav builds the systems a business runs on. INK.Creative builds the identity around them. Most clients engage both."
            />

            <BrandShowcase />
            <Products />
        </>
    );
}
