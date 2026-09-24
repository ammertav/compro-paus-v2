import { formatIndex } from "@/lib/utils";
import { whatsappLink } from "./company";

export const inkHero = {
    // [ Placeholder photo ]
    image: "https://picsum.photos/seed/paus-ink-hero/1920/1200",
    breadcrumb: ["Business", "INK.Creative · Creative & Digital"],
    title: "An identity that is **strong, consistent, and relevant**.",
    description:
        "Helping brands build their place in digital, through creative and strategic work rather than decoration.",
};

export const inkServices = {
    label: "Services",
    title: "What we **shape**.",
    // [ Placeholder photos ]
    items: [
        {
            title: "Company Profile",
            description:
                "Digital platforms that represent identity, values, and portfolio in full, to build credibility with clients and partners.",
            image: "https://picsum.photos/seed/paus-ink-svc0/1200/900",
        },
        {
            title: "Personal Branding",
            description:
                "A strong, consistent professional image through content, visual, and communication strategy, raising credibility and reach in digital.",
            image: "https://picsum.photos/seed/paus-ink-svc1/1200/900",
        },
    ],
};

// The offering lines themselves are INK.Creative's `offerings` in brands.js
export const inkOfferings = {
    label: "Offerings",
    title: "Identity, content, and interface **as one problem**.",
};

export const selectedWork = {
    title: "Selected **work**.",
    note: "Portfolio images are placeholders",
    // [ Placeholder projects and photos ]
    items: [0, 1, 2, 3].map((i) => ({
        title: `[ Project ${formatIndex(i)} ]`,
        kind: i % 2 ? "Personal branding" : "Company profile",
        image: `https://picsum.photos/seed/paus-ink-work${i}/1200/${i % 3 ? 1600 : 900}`,
    })),
};

export const inkClosing = {
    label: "Start a project",
    title: "Let's shape **how you're seen**.",
    links: [
        {
            label: "Chat on WhatsApp →",
            href: whatsappLink(
                "Hi PAUS, I'd like to discuss an INK.Creative project.",
            ),
        },
        { label: "See Ammertav →", href: "/business/ammertav" },
    ],
};
