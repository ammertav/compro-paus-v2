import { cn } from "@/lib/utils";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

/**
 * Deretan tombol pada ClosingPanel, dipakai internal oleh varian panel.
 * actions: [{ label, href, variant }], variant "secondary" untuk tombol
 * pendamping, selain itu tombol primary.
 */
export default function ClosingPanelActions({
    actions = [],
    size = "lg",
    onDark = false,
    className,
}) {
    return (
        <div className={cn("flex flex-wrap gap-3.5", className)}>
            {actions.map((action) => {
                const Button =
                    action.variant === "secondary"
                        ? ButtonSecondary
                        : ButtonPrimary;

                return (
                    <Button
                        key={action.label}
                        href={action.href}
                        size={size}
                        onDark={onDark}
                    >
                        {action.label}
                    </Button>
                );
            })}
        </div>
    );
}
