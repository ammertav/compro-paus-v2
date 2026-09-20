import { cn } from "@/lib/utils";
import CardBody from "./CardBody";

/**
 * Kartu penekanan dengan isian navy.
 * Maksimal satu kartu filled dalam satu grid.
 */
export default function CardFilled({ eyebrow, title, className, children }) {
    return (
        <div
            className={cn(
                "block rounded-2xl bg-primary px-8 py-9 text-white",
                className,
            )}
        >
            <CardBody
                eyebrow={eyebrow}
                title={title}
                isDark
                eyebrowClassName="mb-5.5"
                titleClassName="mb-3 text-[26px]"
            >
                {children}
            </CardBody>
        </div>
    );
}
