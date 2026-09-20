import { cn } from "@/lib/utils";

/** Kartu orang ringkas: foto bulat kecil di samping nama. */
export default function PersonCardRow({ name, role, image, className }) {
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
