import { cn } from "@/lib/utils";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Glow from "../ui/Glow";
import ListRow from "../ui/ListRow";

/**
 * Satu kelompok layanan per brand: intro sticky di kiri,
 * daftar layanan di kanan. onDark untuk versi latar navy.
 */
export default function ServiceGroup({
    id,
    label,
    title,
    description,
    services,
    startNumber = 1,
    onDark = false,
    className,
}) {
    return (
        <section
            id={id}
            className={cn(
                "relative scroll-mt-28",
                onDark && "overflow-hidden bg-primary text-white",
                className,
            )}
        >
            {onDark && <Glow position="bottom-left" onDark />}

            <Container className="relative z-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="rv lg:sticky lg:top-30">
                    <p
                        className={cn(
                            "mb-5.5 text-[13px] font-medium tracking-[.01em]",
                            onDark ? "text-white/66" : "text-primary/74",
                        )}
                    >
                        {label}
                    </p>
                    <h2 className="mb-5 text-[clamp(26px,2.8vw,42px)] leading-[1.08] font-light tracking-[-.025em]">
                        {title}
                    </h2>
                    <p
                        className={cn(
                            "mb-7.5 max-w-[26em] text-base leading-[1.8]",
                            onDark ? "text-white/62" : "text-primary/74",
                        )}
                    >
                        {description}
                    </p>
                    <Button
                        href="/our-brands"
                        variant="secondary"
                        size="sm"
                        onDark={onDark}
                    >
                        About the brand
                    </Button>
                </div>

                <div
                    className={cn(
                        "rv border-b",
                        onDark ? "border-white/18" : "border-primary/18",
                    )}
                >
                    {services.map((service, index) => (
                        <ListRow
                            key={service.title}
                            // Hover row dengan panah hanya ada di latar terang
                            variant={onDark ? "numbered" : "linked"}
                            number={startNumber + index}
                            title={service.title}
                            onDark={onDark}
                        >
                            {service.description}
                        </ListRow>
                    ))}
                </div>
            </Container>
        </section>
    );
}
