import Board from "@/components/our-team/Board";
import Structure from "@/components/our-team/Structure";
import ClosingPanel from "@/components/ui/ClosingPanel";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import useReveal from "@/hooks/useReveal";

export default function OurTeam() {
    useReveal();

    return (
        <>
            <title>Our Team | PAUS</title>

            <PageHero
                label="About Us / Our Team"
                glow="top-left"
                title={
                    <>
                        The board, and how{" "}
                        <span className="font-medium">
                            the group is structured
                        </span>
                        .
                    </>
                }
                description="Every project is run by the same people who scoped it. Names and portraits below are placeholders. Send us the real roster and we'll set it."
            />

            <Board />
            <Structure />

            <section className="pt-24 md:pt-32.5">
                <Container>
                    <ClosingPanel
                        variant="light"
                        title={
                            <>
                                Want to work{" "}
                                <span className="font-medium">
                                    with this team
                                </span>
                                ?
                            </>
                        }
                        actions={[
                            { label: "Connect with us", href: "/contact" },
                            {
                                label: "Who we are",
                                href: "/who-we-are",
                                variant: "secondary",
                            },
                        ]}
                    />
                </Container>
            </section>
        </>
    );
}
