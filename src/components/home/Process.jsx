import ButtonPrimary from "../ui/ButtonPrimary";
import Container from "../ui/Container";
import Glow from "../ui/Glow";
import Heading from "../ui/Heading";
import SectionLabelPlain from "../ui/SectionLabelPlain";
import { processSteps } from "@/data/process";

export default function Process() {
    return (
        <section className="relative mt-24 overflow-hidden bg-primary py-24 text-white md:mt-35 md:py-32.5">
            <Glow position="top-right" onDark />

            <Container className="relative z-10">
                <SectionLabelPlain onDark className="rv mb-6">
                    How it works
                </SectionLabelPlain>
                <Heading className="rv mb-5 max-w-[20em]">
                    From first conversation to{" "}
                    <span className="font-medium">a system in production</span>.
                </Heading>
                <p className="rv mb-19 max-w-[32em] text-[17px] leading-[1.75] text-white/62">
                    Four stages, run by one team, so nothing is handed over and
                    lost in translation.
                </p>

                <div className="flex flex-col gap-px border-y border-white/16 bg-white/16">
                    {processSteps.map((step, index) => (
                        <div
                            key={step.title}
                            className="rv grid grid-cols-[48px_minmax(0,1fr)] items-baseline gap-x-8 gap-y-3 bg-primary py-10 md:grid-cols-[90px_minmax(0,1fr)_minmax(0,1.1fr)]"
                        >
                            <p className="text-[32px] text-white/66">
                                {index + 1}
                            </p>
                            <h3 className="text-[clamp(22px,2vw,30px)] font-medium tracking-[-.015em]">
                                {step.title}
                            </h3>
                            <p className="col-start-2 text-[17px] leading-[1.75] text-white/66 md:col-start-auto">
                                {step.summary}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-14">
                    <ButtonPrimary href="/how-it-works" onDark>
                        See the full process
                    </ButtonPrimary>
                </div>
            </Container>
        </section>
    );
}
