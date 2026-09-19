import Button from "../ui/Button";
import Container from "../ui/Container";
import Glow from "../ui/Glow";
import Heading from "../ui/Heading";
import { beposFeatures } from "@/data/process";

export default function Bepos() {
    return (
        <section
            id="bepos"
            className="relative mt-24 scroll-mt-28 overflow-hidden bg-primary py-24 text-white md:mt-30 md:py-30"
        >
            <Glow position="top-right" onDark />

            <Container className="relative z-10">
                <div className="rv-stagger grid items-start gap-16 lg:grid-cols-2">
                    <div>
                        <img
                            src="/images/logo-brand-beil.webp"
                            alt="BePOS"
                            className="mb-8 block h-16 w-auto object-contain"
                        />
                        <Heading className="mb-5.5 text-[clamp(28px,3.2vw,50px)] leading-[1.06]">
                            <span className="font-medium">BePOS</span>: point of
                            sale, fully under control.
                        </Heading>
                        <p className="max-w-[30em] text-[17px] leading-[1.8] text-white/66">
                            For businesses outgrowing manual records, loose
                            cashier control, and messy stock across branches.
                            One integrated system, configured to how you
                            actually operate.
                        </p>
                        <div className="mt-10">
                            <Button href="/contact" onDark>
                                Request a walkthrough
                            </Button>
                        </div>
                    </div>

                    <div>
                        <p className="mb-2.5 text-[13px] font-medium tracking-[.01em] text-white/66">
                            Features
                        </p>
                        {beposFeatures.map((feature, index) => (
                            <div
                                key={feature}
                                className="grid grid-cols-[40px_minmax(0,1fr)] items-baseline gap-5 border-b border-white/16 py-6 md:grid-cols-[52px_minmax(0,1fr)]"
                            >
                                <span className="text-[13px] text-white/66">
                                    {index + 1}
                                </span>
                                <p className="text-[17px] leading-[1.6]">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
