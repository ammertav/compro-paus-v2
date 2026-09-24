import Reveal from "@/components/motion/Reveal";
import Emphasis from "@/components/ui/Emphasis";
import TextLink from "@/components/ui/TextLink";
import { office } from "@/data/contact";
import { socialLinks } from "@/data/navigation";

export default function Office() {
    return (
        <section className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-between gap-14 px-gutter py-[clamp(64px,8vw,120px)]">
                <div>
                    <Reveal as="p" className="mb-6 text-label text-white/76">
                        {office.label}
                    </Reveal>
                    <Reveal
                        as="h2"
                        className="max-w-[14em] text-[clamp(28px,3.4vw,52px)] leading-[1.1] font-light tracking-[-.03em]"
                    >
                        <Emphasis text={office.title} />
                    </Reveal>
                    <Reveal className="mt-8">
                        <TextLink href={office.mapLink.href}>
                            {office.mapLink.label}
                        </TextLink>
                    </Reveal>
                </div>

                <Reveal>
                    <p className="mb-4 text-label text-white/76">
                        {office.followLabel}
                    </p>
                    <div className="border-t border-white/16">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="flex justify-between gap-4 border-b border-white/16 py-4.5 text-lg transition-[padding] duration-700 hover:pl-4 hover:opacity-100"
                            >
                                <span>{link.label}</span>
                                <span className="text-white/70">
                                    {link.handle} →
                                </span>
                            </a>
                        ))}
                    </div>
                </Reveal>
            </div>

            <div className="relative min-h-130 bg-navy-deep">
                <iframe
                    title={office.mapTitle}
                    src={office.mapEmbed}
                    loading="lazy"
                    className="photo-mono absolute inset-0 size-full border-0"
                />
            </div>
        </section>
    );
}
