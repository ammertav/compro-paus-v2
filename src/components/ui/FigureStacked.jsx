/**
 * Satu angka besar dengan keterangan di bawahnya.
 * Pakai angka biasa, 2 bukan 002.
 */
export default function FigureStacked({ value, label, className }) {
    return (
        <div className={className}>
            <p className="text-[clamp(44px,5vw,64px)] leading-[.95] font-light tracking-[-.03em]">
                {value}
            </p>
            <p className="mt-3.5 text-base leading-[1.6] text-primary/74">
                {label}
            </p>
        </div>
    );
}
