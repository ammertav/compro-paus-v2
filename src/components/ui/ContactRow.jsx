// Big "Label · value →" link row on bone (Home and Contact). Slides right on
// hover. On phones the label sits above the value so long emails fit.
export default function ContactRow({ label, value, href }) {
    const external = href.startsWith("http");

    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-2 border-b border-navy/16 py-8 transition-[padding] duration-700 hover:pl-6 hover:opacity-100 sm:grid-cols-[minmax(120px,220px)_1fr_auto]"
        >
            <span className="col-span-2 text-label text-navy/74 sm:col-span-1">
                {label}
            </span>
            <span className="text-[clamp(26px,3.6vw,56px)] leading-[1.1] font-light tracking-[-.03em] wrap-anywhere">
                {value}
            </span>
            <span className="text-[clamp(22px,2.4vw,36px)] font-light">→</span>
        </a>
    );
}
