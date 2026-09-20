import { cn } from "@/lib/utils";
import ButtonLink from "./ButtonLink";
import { CLOSING_PANEL_TITLE } from "./closingPanelStyles";

/**
 * Panel ajakan (CTA) penutup paling ringan: hanya garis atas,
 * judul, dan tautan teks.
 */
export default function ClosingPanelMinimal({
    title,
    actions = [],
    className,
    titleClassName,
}) {
    return (
        <div
            className={cn("border-t border-primary/20 pt-9.5 pb-2", className)}
        >
            <h2
                className={cn(
                    "mb-5 text-[clamp(22px,2.4vw,30px)] leading-[1.14]",
                    CLOSING_PANEL_TITLE,
                    titleClassName,
                )}
            >
                {title}
            </h2>

            {actions.map((action) => (
                <ButtonLink key={action.label} href={action.href}>
                    {action.label}
                </ButtonLink>
            ))}
        </div>
    );
}
