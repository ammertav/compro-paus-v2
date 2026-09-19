import { cn } from "@/lib/utils";
import Container from "./Container";
import Glow from "./Glow";
import SectionLabel from "./SectionLabel";

/**
 * Hero untuk halaman interior: label, judul besar, deskripsi opsional.
 * Konten tambahan (mis. gambar) bisa disisipkan lewat children.
 */
export default function PageHero({
    label,
    title,
    description,
    glow = "top-right",
    className,
    titleClassName,
    children,
}) {
    return (
        <section className={cn("relative overflow-hidden", className)}>
            <Glow position={glow} />

            <Container className="relative z-10 pt-20 md:pt-27.5">
                <SectionLabel className="mb-6.5">{label}</SectionLabel>
                <h1
                    className={cn(
                        "max-w-[17em] text-[clamp(38px,5vw,76px)] leading-[1.04] font-light tracking-[-.035em] text-balance",
                        titleClassName,
                    )}
                >
                    {title}
                </h1>
                {description && (
                    <p className="mt-7.5 max-w-[32em] text-lg leading-[1.8] text-primary/68">
                        {description}
                    </p>
                )}
                {children}
            </Container>
        </section>
    );
}
