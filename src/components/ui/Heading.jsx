import { cn } from "@/lib/utils";

/**
 * Judul section. Bagian yang ditekankan dibungkus
 * <span className="font-medium">.
 */
export default function Heading({ as: Tag = "h2", className, children }) {
    return (
        <Tag
            className={cn(
                "text-[clamp(28px,3.4vw,54px)] leading-[1.1] font-light tracking-[-.03em] text-pretty",
                className,
            )}
        >
            {children}
        </Tag>
    );
}
