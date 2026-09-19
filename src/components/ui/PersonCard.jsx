import { cn } from "@/lib/utils";

/**
 * variant: "portrait" | "row" | "node"
 * Foto portrait 4:5, jaga crop tetap konsisten dalam satu roster.
 * "node" dipakai untuk bagan organisasi: filled = induk, outlined = unit.
 */
export default function PersonCard({
    variant = "portrait",
    name,
    role,
    image,
    placeholder = "Portrait",
    filled = false,
    onDark = false,
    className,
    roleClassName,
}) {
    if (variant === "row") {
        return (
            <div className={cn("flex items-center gap-4", className)}>
                <div className="size-14 shrink-0 overflow-hidden rounded-full bg-primary/7">
                    {image && (
                        <img
                            src={image}
                            alt={name}
                            className="block size-full object-cover"
                        />
                    )}
                </div>
                <div>
                    <p className="mb-1 text-[17px] font-medium">{name}</p>
                    <p className="text-sm text-primary/74">{role}</p>
                </div>
            </div>
        );
    }

    if (variant === "node") {
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

    return (
        <div
            className={cn(
                "transition-[translate] duration-600 ease-out-expo hover:-translate-y-1.5",
                className,
            )}
        >
            <div className="flex aspect-4/5 items-end overflow-hidden rounded-[14px] bg-primary/7">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="block size-full object-cover"
                    />
                ) : (
                    <span className="p-4 text-xs font-medium tracking-[.01em] text-primary/74">
                        {placeholder}
                    </span>
                )}
            </div>
            <p className="mt-4.5 mb-1.5 text-[19px] font-medium">{name}</p>
            <p className="text-[13px] font-medium tracking-[.01em] text-primary/74">
                {role}
            </p>
        </div>
    );
}
