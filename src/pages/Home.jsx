import Approach from "@/components/home/Approach";
import BrandMarquee from "@/components/home/BrandMarquee";
import Difference from "@/components/home/Difference";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import OurBrands from "@/components/home/OurBrands";
import Process from "@/components/home/Process";
import Stats from "@/components/home/Stats";
import ClosingPanel from "@/components/ui/ClosingPanel";
import Container from "@/components/ui/Container";
import { company } from "@/data/company";
import useReveal from "@/hooks/useReveal";

export default function Home() {
    useReveal();

    return (
        <>
            <title>PAUS | IT Solutions & Creative Digital Agency</title>

            <Hero />
            <BrandMarquee />
            <Approach />
            <OurBrands />
            <Difference />
            <Process />
            <Stats />
            <Faq />

            <section className="pt-24 md:pt-35">
                <Container>
                    <ClosingPanel
                        title={
                            <>
                                Let&apos;s build{" "}
                                <span className="font-medium">
                                    something that lasts
                                </span>
                                .
                            </>
                        }
                        actions={[
                            { label: "Connect with us", href: "/contact" },
                            {
                                label: company.email,
                                href: `mailto:${company.email}`,
                                variant: "secondary",
                            },
                        ]}
                    >
                        Tell us where the business is now, and we&apos;ll map
                        what it needs next.
                    </ClosingPanel>
                </Container>
            </section>
        </>
    );
}
