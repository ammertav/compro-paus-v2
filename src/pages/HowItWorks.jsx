import Bepos from "@/components/how-it-works/Bepos";
import Steps from "@/components/how-it-works/Steps";
import ClosingPanelLight from "@/components/ui/ClosingPanelLight";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import useReveal from "@/hooks/useReveal";

export default function HowItWorks() {
    useReveal();

    return (
        <>
            <title>How It Works | PAUS</title>

            <PageHero
                label="How It Works"
                glow="top-left"
                title={
                    <>
                        From first conversation to{" "}
                        <span className="font-medium">
                            a system in production
                        </span>
                        .
                    </>
                }
                description="Four stages, run by one team, so nothing is handed over and lost in translation."
            />

            <Steps />
            <Bepos />

            <section className="pt-24 md:pt-32.5">
                <Container>
                    <ClosingPanelLight
                        title={
                            <>
                                Start with a{" "}
                                <span className="font-medium">
                                    discovery call
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
