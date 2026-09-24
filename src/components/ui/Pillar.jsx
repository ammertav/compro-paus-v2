import { formatIndex } from "@/lib/utils";

// Numbered value block on navy, used on Home (Who we are) and About (Values)
export default function Pillar({ index, pillar }) {
    return (
        <div className="border-t border-white/16 pt-6">
            <p className="mb-4 font-mono text-[13px] text-white/76">
                {formatIndex(index)}
            </p>
            <h3 className="mb-4 text-[22px] font-medium tracking-[-.01em]">
                {pillar.title}
            </h3>
            <p className="max-w-[26em] leading-relaxed text-white/70">
                {pillar.description}
            </p>
        </div>
    );
}
