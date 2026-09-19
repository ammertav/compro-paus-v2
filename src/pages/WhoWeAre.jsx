import ClosingPanel from "@/components/ui/ClosingPanel";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Parallax from "@/components/ui/Parallax";
import Company from "@/components/who-we-are/Company";
import FounderNote from "@/components/who-we-are/FounderNote";
import Mission from "@/components/who-we-are/Mission";
import Vision from "@/components/who-we-are/Vision";
import useReveal from "@/hooks/useReveal";

export default function WhoWeAre() {
    useReveal();

    return (
        <>
            <title>Who We Are | PAUS</title>

            <PageHero
                label="About Us / Who We Are"
                title={
                    <>
                        Integrated technology and sharp creative strategy decide{" "}
                        <span className="font-medium">who grows next</span>.
                    </>
                }
                className="pb-22.5"
                titleClassName="max-w-[19em]"
            >
                <Parallax className="mt-14">
                    <figure className="aspect-4/3 overflow-hidden rounded-[18px] md:aspect-21/9">
                        <img
                            src="/images/image-about.webp"
                            alt="The PAUS team"
                            className="block size-full object-cover"
                        />
                    </figure>
                </Parallax>
            </PageHero>

            <Company />
            <Vision />
            <Mission />
            <FounderNote />

            <section className="pt-24 md:pt-32.5">
                <Container>
                    <ClosingPanel
                        glow={false}
                        title={
                            <>
                                Meet the people{" "}
                                <span className="font-medium">
                                    behind the group
                                </span>
                                .
                            </>
                        }
                        actions={[{ label: "Our team", href: "/our-team" }]}
                        className="py-22.5"
                        titleClassName="text-[clamp(28px,3.4vw,50px)] leading-[1.08]"
                    />
                </Container>
            </section>
        </>
    );
}
