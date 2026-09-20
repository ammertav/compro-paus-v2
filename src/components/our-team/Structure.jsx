import Container from "../ui/Container";
import Glow from "../ui/Glow";
import Heading from "../ui/Heading";
import PersonCardNode from "../ui/PersonCardNode";
import SectionLabelPlain from "../ui/SectionLabelPlain";
import { company } from "@/data/company";
import { units } from "@/data/about";

// Garis penghubung vertikal antar node
function Connector() {
    return <span className="block h-11 w-px bg-white/30" />;
}

export default function Structure() {
    return (
        <section className="relative mt-24 overflow-hidden bg-primary py-24 text-white md:mt-32.5 md:py-30">
            <Glow position="top-right" onDark />

            <Container className="relative z-10">
                <SectionLabelPlain onDark className="rv mb-6">
                    Organisation structure
                </SectionLabelPlain>
                <Heading className="rv mb-19 max-w-[18em] text-[clamp(28px,3.2vw,50px)]">
                    How the group{" "}
                    <span className="font-medium">is organised</span>.
                </Heading>

                {/* Bagan organisasi */}
                <div className="rv flex flex-col items-center">
                    <PersonCardNode
                        onDark
                        name="Board of Commissioners"
                        role="Oversight"
                        className="w-full sm:w-auto sm:min-w-75"
                    />
                    <Connector />
                    <PersonCardNode
                        onDark
                        filled
                        name="Board of Directors"
                        role={company.name}
                        className="w-full sm:w-auto sm:min-w-75"
                    />
                    <Connector />
                    <span className="hidden h-px w-full bg-white/30 sm:block" />

                    <div className="rv-stagger grid w-full gap-6.5 sm:grid-cols-2 lg:grid-cols-4">
                        {units.map((unit, index) => (
                            <div
                                key={unit.name}
                                className="flex flex-col items-center"
                            >
                                {/* Di mobile, garis unit pertama sudah diwakili Connector di atas */}
                                <span
                                    className={
                                        index === 0
                                            ? "hidden h-11 w-px bg-white/30 sm:block"
                                            : "block h-11 w-px bg-white/30"
                                    }
                                />
                                <PersonCardNode
                                    onDark
                                    name={unit.name}
                                    role={unit.note}
                                    className="w-full border-white/22 px-5.5 py-6.5"
                                    roleClassName="text-[15px] leading-[1.6] font-normal tracking-normal text-white/62"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
