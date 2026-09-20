import { cn } from "@/lib/utils";
import ClosingPanelActions from "./ClosingPanelActions";
import { CLOSING_PANEL_TITLE } from "./closingPanelStyles";

/**
 * Panel ajakan (CTA) penutup dua kolom: judul di kiri, tombol di kanan.
 */
export default function ClosingPanelSplit({
    title,
    actions = [],
    className,
    titleClassName,
}) {
    return (
        <div
            className={cn(
                "grid items-center gap-7 rounded-[18px] bg-background px-9 py-11 md:grid-cols-2",
                className,
            )}
        >
            <h2
                className={cn(
                    "text-[clamp(22px,2.4vw,30px)] leading-[1.14]",
                    CLOSING_PANEL_TITLE,
                    titleClassName,
                )}
            >
                {title}
            </h2>

            <ClosingPanelActions actions={actions} size="md" />
        </div>
    );
}
