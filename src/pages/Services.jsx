import ServiceGroup from "@/components/services/ServiceGroup";
import ClosingPanel from "@/components/ui/ClosingPanel";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { ammertavServices, inkCreativeServices } from "@/data/services";
import useReveal from "@/hooks/useReveal";

export default function Services() {
    useReveal();

    return (
        <>
            <title>Services | PAUS</title>

            <PageHero
                label="Services"
                title={
                    <>
                        Ammertav builds the systems. INK.Creative builds{" "}
                        <span className="font-medium">
                            the identity around them
                        </span>
                        .
                    </>
                }
                description="Six services across two brands. Engage one, or run both together and decide technology and identity at the same time."
            />

            {/* Ammertav Services */}
            <ServiceGroup
                id="ammertav"
                label="01 / Ammertav"
                title={
                    <>
                        IT solutions and{" "}
                        <span className="font-medium">product engineering</span>
                        .
                    </>
                }
                description="Integrated technology that raises operational effectiveness and business efficiency."
                services={ammertavServices}
                className="pt-20 md:pt-25"
            />

            {/* INK.Creative Services, penomoran melanjutkan Ammertav */}
            <ServiceGroup
                id="ink"
                label="02 / INK.Creative"
                title={
                    <>
                        Branding and{" "}
                        <span className="font-medium">digital creative</span>.
                    </>
                }
                description="Identity that stays strong, consistent, and relevant in digital. Built strategically, not decorated."
                services={inkCreativeServices}
                startNumber={ammertavServices.length + 1}
                onDark
                className="mt-24 py-24 md:mt-32.5 md:py-30"
            />

            <section className="pt-24 md:pt-32.5">
                <Container>
                    <ClosingPanel
                        variant="light"
                        title={
                            <>
                                Not sure which you need?{" "}
                                <span className="font-medium">
                                    Start with a conversation
                                </span>
                                .
                            </>
                        }
                        actions={[
                            { label: "Connect with us", href: "/contact" },
                        ]}
                    />
                </Container>
            </section>
        </>
    );
}
