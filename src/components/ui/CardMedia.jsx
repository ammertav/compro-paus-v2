import { Link } from "react-router";
import { cn } from "@/lib/utils";
import CardBody from "./CardBody";

/**
 * Kartu dengan area logo di atas teks.
 * isDarkMediaBg: latar di belakang logo, tentukan PER ASSET. Logo putih
 *                butuh navy, logo dengan plate putih butuh putih.
 */
export default function CardMedia({
    eyebrow,
    title,
    image,
    imageAlt = "",
    isDarkMediaBg = true,
    href,
    className,
    children,
}) {
    const classes = cn(
        "block overflow-hidden rounded-[18px] bg-white text-primary",
        href &&
            "transition-[translate,box-shadow] duration-600 ease-out-expo hover:-translate-y-1.5 hover:opacity-100 hover:shadow-[0_30px_60px_-30px_rgba(1,34,63,.35)]",
        className,
    );

    const content = (
        <>
            <figure
                className={cn(
                    "flex aspect-video w-full items-center justify-center border-b border-primary/10 p-7",
                    isDarkMediaBg ? "bg-primary" : "bg-white",
                )}
            >
                <img
                    src={image}
                    alt={imageAlt}
                    className="block h-auto max-h-full w-auto max-w-full object-contain"
                />
            </figure>
            <div className="px-8 pt-8.5 pb-9.5">
                <CardBody
                    eyebrow={eyebrow}
                    title={title}
                    eyebrowClassName="mb-3"
                    titleClassName="mb-3.5 text-[28px] tracking-[-.02em]"
                >
                    {children}
                </CardBody>
            </div>
        </>
    );

    if (href) {
        return (
            <Link to={href} className={classes}>
                {content}
            </Link>
        );
    }

    return <div className={classes}>{content}</div>;
}
