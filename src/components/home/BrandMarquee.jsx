import { Fragment } from "react";
import Container from "../ui/Container";
import { marqueeItems } from "@/data/brands";

export default function BrandMarquee() {
    return (
        <section className="bg-primary py-22.5 text-white">
            <Container className="text-center">
                <h2 className="rv mx-auto max-w-[20em] text-[clamp(24px,2.6vw,38px)] leading-[1.25] font-light tracking-[-.02em]">
                    Two brands, one standard, serving businesses across{" "}
                    <span className="font-medium">Indonesia</span>.
                </h2>
            </Container>

            {/* Isi marquee digandakan agar animasi -50% berulang tanpa jeda */}
            <div className="mt-14.5 overflow-hidden">
                <div className="flex w-max animate-marquee text-sm tracking-[.04em] text-white/60 motion-reduce:animate-none">
                    <MarqueeGroup />
                    <MarqueeGroup aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}

function MarqueeGroup(props) {
    return (
        <div className="flex" {...props}>
            {marqueeItems.map((item) => (
                <Fragment key={item}>
                    <span className="pr-11">{item}</span>
                    <span aria-hidden="true" className="pr-11 opacity-45">
                        ·
                    </span>
                </Fragment>
            ))}
        </div>
    );
}
