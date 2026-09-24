import { Link } from "react-router";
import { cn } from "@/lib/utils";

// Underlined "Label →" link. The underline is the text colour at 40%,
// so it works on navy and bone. Site routes ("/about") use the router;
// anchors, mailto and external links are plain <a>, external ones in a new tab.
export default function TextLink({ href, className, children }) {
    const classes = cn(
        "inline-block border-b border-current/40 pb-1.5 font-medium",
        className,
    );

    if (href.startsWith("/")) {
        return (
            <Link to={href} className={classes}>
                {children}
            </Link>
        );
    }

    const external = href.startsWith("http");
    return (
        <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className={classes}
        >
            {children}
        </a>
    );
}
