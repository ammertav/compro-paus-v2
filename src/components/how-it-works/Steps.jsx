import Container from "../ui/Container";
import ListRow from "../ui/ListRow";
import Parallax from "../ui/Parallax";
import { processSteps } from "@/data/process";

export default function Steps() {
    return (
        <section className="pt-20 md:pt-25">
            <Container>
                <div className="border-b border-primary/18">
                    {processSteps.map((step, index) => (
                        <div
                            key={step.title}
                            className="rv grid items-center gap-10 border-t border-primary/18 py-14 md:grid-cols-2 md:gap-14"
                        >
                            <div>
                                <p className="mb-5.5 text-[34px] text-primary/74">
                                    {index + 1}
                                </p>
                                <h2 className="mb-4 text-[clamp(26px,2.8vw,40px)] font-medium tracking-[-.025em]">
                                    {step.title}
                                </h2>
                                <p className="mb-6.5 max-w-[32em] text-[17px] leading-[1.8] text-primary/68">
                                    {step.description}
                                </p>

                                <div className="border-t border-primary/14">
                                    {step.points.map((point) => (
                                        <ListRow
                                            key={point}
                                            title={point}
                                            className="py-3.5"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Placeholder gambar tiap tahap */}
                            <Parallax factor={step.parallax}>
                                <div className="flex aspect-4/3 items-end rounded-2xl bg-primary/7 p-5">
                                    <span className="text-xs font-medium tracking-[.01em] text-primary/74">
                                        {step.caption}
                                    </span>
                                </div>
                            </Parallax>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
