import { cn } from "@/lib/utils";
import ClosingPanelActions from "./ClosingPanelActions";
import Glow from "./Glow";
import { CLOSING_PANEL_TITLE } from "./closingPanelStyles";

/**
 * Panel ajakan (CTA) penutup dengan isian navy, satu per halaman
 * tepat di atas footer. Dipakai halaman utama.
 */
export default function ClosingPanelFilled({
    title,
    actions = [],
    glow = true,
    className,
    titleClassName,
    children,
}) {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-[22px] bg-primary px-6 py-25 text-center text-white md:px-14",
                className,
            )}
        >
            {glow && <Glow position="bottom-left" onDark />}

            <div className="relative z-10">
                <h2
                    className={cn(
                        "mx-auto max-w-[20em] text-[clamp(30px,4vw,62px)] leading-[1.05]",
                        CLOSING_PANEL_TITLE,
                        titleClassName,
                    )}
                >
                    {title}
                </h2>

                {children && (
                    <p className="mx-auto mt-6.5 max-w-[30em] text-[17px] leading-[1.75] text-white/68">
                        {children}
                    </p>
                )}

                <ClosingPanelActions
                    actions={actions}
                    onDark
                    className="mt-10 justify-center"
                />
            </div>
        </div>
    );
}
