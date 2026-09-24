import BrandSplit from "@/components/home/BrandSplit";
import Bepos from "@/components/home/Bepos";
import CareerTeaser from "@/components/home/CareerTeaser";
import Clients from "@/components/home/Clients";
import ContactRows from "@/components/home/ContactRows";
import HandsMeet from "@/components/home/HandsMeet";
import Hero from "@/components/home/Hero";
import ProcessCarousel from "@/components/home/ProcessCarousel";
import Stats from "@/components/home/Stats";
import WhoWeAre from "@/components/home/WhoWeAre";

export default function Home() {
    return (
        <>
            <Hero />
            <WhoWeAre />
            <HandsMeet />
            <BrandSplit />
            <Bepos />
            <section className="bg-bone py-section text-navy">
                <ProcessCarousel />
                <Stats />
                <Clients />
            </section>
            <CareerTeaser />
            <ContactRows />
        </>
    );
}
