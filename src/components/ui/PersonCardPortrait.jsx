import { cn } from "@/lib/utils";

/**
 * Kartu orang dengan foto 4:5.
 * Jaga crop tetap konsisten dalam satu roster agar grid tidak terlihat ragged.
 */
export default function PersonCardPortrait({
    name,
    role,
    image,
    placeholder = "Portrait",
    className,
}) {
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
