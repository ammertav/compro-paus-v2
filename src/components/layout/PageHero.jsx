import HeroImage from "@/components/motion/HeroImage";
import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import { cn } from "@/lib/utils";
import Container from "./Container";

/**
 * Navy hero for the inner pages. Pass the height via className when it
 * differs from the default.
 * - `breadcrumb` (["Business", "Ammertav · IT Solutions"]) replaces `label`
 * - `logo` is an <img> shown above the title
 * - `children` sits next to the description (e.g. a link)
 * - `titleClassName` overrides the title size (Contact uses text-cta)
 */
export default function PageHero({
    image,
    label,
    breadcrumb,
    logo,
    title,
    titleClassName,
    description,
    className,
    children,
}) {
    return (
        <header
            className={cn(
                "relative flex min-h-[max(600px,82vh)] flex-col justify-end overflow-hidden",
                className,
            )}
        >
            {image && <HeroImage src={image} className="opacity-38" />}
            <Container className="relative pt-35 pb-14">
                {breadcrumb ? (
                    <Reveal className="mb-10 flex flex-wrap items-center gap-4 text-label text-white/76">
                        {breadcrumb.map((item, i) => (
                            <span
                                key={item}
                                className="flex gap-4 last:text-white"
                            >
                                {i > 0 && (
                                    <span className="text-white/76">/</span>
                                )}
                                {item}
                            </span>
                        ))}
                    </Reveal>
                ) : (
                    <Reveal as="p" className="mb-7 text-label text-white/76">
                        {label}
                    </Reveal>
                )}
                {logo && (
                    <Reveal delay={60} className="mb-10">
                        {logo}
                    </Reveal>
                )}
                <Reveal
                    as="h1"
                    delay={120}
                    className={cn("max-w-[13em] text-title", titleClassName)}
                >
                    <Emphasis text={title} />
                </Reveal>
                {description && (
                    <Reveal
                        delay={240}
                        className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-6"
                    >
                        <p className="max-w-[32em] text-lead text-white/70">
                            {description}
                        </p>
                        {children}
                    </Reveal>
                )}
            </Container>
        </header>
    );
}
