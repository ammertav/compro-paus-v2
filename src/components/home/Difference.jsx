import { cn } from "@/lib/utils";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import SectionLabelPlain from "../ui/SectionLabelPlain";
import { comparison } from "@/data/home";

// Mobile: label satu baris penuh, dua kolom perbandingan di bawahnya
const ROW_CLASSES =
    "grid grid-cols-2 gap-x-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]";

export default function Difference() {
    return (
        <section className="pt-24 md:pt-35">
            <Container>
                <SectionLabelPlain className="rv mb-6">
                    The difference
                </SectionLabelPlain>
                <Heading className="rv mb-14 max-w-[20em]">
                    What working with us{" "}
                    <span className="font-medium">actually changes</span>.
                </Heading>

                <div className="rv border-t border-primary/20">
                    <div
                        className={cn(
                            ROW_CLASSES,
                            "border-b border-primary/20 py-5.5 text-[13px] font-medium tracking-[.01em]",
                        )}
                    >
                        <span className="hidden md:block" />
                        <span>With PAUS</span>
                        <span className="text-primary/74">Typical vendor</span>
                    </div>

                    {comparison.map((row) => (
                        <div
                            key={row.label}
                            className={cn(
                                ROW_CLASSES,
                                "items-baseline gap-y-2 border-b border-primary/14 py-6.5",
                            )}
                        >
                            <p className="col-span-2 text-[17px] font-medium md:col-span-1">
                                {row.label}
                            </p>
                            <p className="text-base leading-[1.6]">
                                {row.ours}
                            </p>
                            <p className="text-base leading-[1.6] text-primary/74">
                                {row.theirs}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
