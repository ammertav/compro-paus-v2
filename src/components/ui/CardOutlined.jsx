import { cn } from "@/lib/utils";
import CardBody from "./CardBody";

/**
 * Kartu teks bergaris tepi.
 * onDark: true jika diletakkan di atas latar navy.
 */
export default function CardOutlined({
    eyebrow,
    title,
    onDark = false,
    className,
    children,
}) {
    return (
        <div
            className={cn(
                "block rounded-2xl border px-8 py-9",
                onDark
                    ? "border-white/20 text-white"
                    : "border-primary/20 text-primary",
                className,
            )}
        >
            <CardBody
                eyebrow={eyebrow}
                title={title}
                isDark={onDark}
                eyebrowClassName="mb-5.5"
                titleClassName="mb-3 text-[26px]"
            >
                {children}
            </CardBody>
        </div>
    );
}
