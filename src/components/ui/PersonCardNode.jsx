import { cn } from "@/lib/utils";

/**
 * Node untuk bagan organisasi.
 * filled = unit induk, tanpa filled = unit di bawahnya.
 * onDark: true jika bagan diletakkan di atas latar navy.
 */
export default function PersonCardNode({
    name,
    role,
    filled = false,
    onDark = false,
    className,
    roleClassName,
}) {
    // Di latar navy, node induk dibalik menjadi putih
    const isNavyNode = filled !== onDark;
    const nodeColor = filled
        ? onDark
            ? "bg-white text-primary"
            : "bg-primary text-white"
        : onDark
          ? "border border-white/30"
          : "border border-primary/22";

    return (
        <div
            className={cn(
                "rounded-[10px] px-11 py-5.5 text-center",
                nodeColor,
                className,
            )}
        >
            <p className="mb-1.5 text-lg font-medium">{name}</p>
            <p
                className={cn(
                    "text-xs font-medium tracking-[.01em]",
                    isNavyNode ? "text-white/66" : "text-primary/74",
                    roleClassName,
                )}
            >
                {role}
            </p>
        </div>
    );
}
