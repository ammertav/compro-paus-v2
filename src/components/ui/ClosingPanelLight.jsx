import { cn } from "@/lib/utils";
import ClosingPanelActions from "./ClosingPanelActions";
import { CLOSING_PANEL_TITLE } from "./closingPanelStyles";

/**
 * Panel ajakan (CTA) penutup berlatar putih, satu per halaman
 * tepat di atas footer. Dipakai halaman interior.
 */
export default function ClosingPanelLight({
    title,
    actions = [],
    className,
    titleClassName,
    children,
}) {
    return (
        <div
            className={cn(
                "rounded-[22px] bg-white px-6 py-20 text-center md:px-14",
                className,
            )}
        >
            <h2
                className={cn(
                    "mx-auto max-w-[20em] text-[clamp(26px,3.2vw,46px)] leading-[1.1]",
                    CLOSING_PANEL_TITLE,
                    titleClassName,
                )}
            >
                {title}
            </h2>

            {children && (
                <p className="mx-auto mt-6.5 max-w-[30em] text-[17px] leading-[1.75] text-primary/68">
                    {children}
                </p>
            )}

            <ClosingPanelActions
                actions={actions}
                className="mt-8.5 justify-center"
            />
        </div>
    );
}
