import { whatsappLink } from "./company";

export const ammertavHero = {
    // [ Placeholder photo ]
    image: "https://picsum.photos/seed/paus-ammertav-hero/1920/1200",
    breadcrumb: ["Business", "Ammertav · IT Solutions"],
    title: "Integrated technology that **raises operational effectiveness**.",
    description:
        "From customer-facing pages to the internal systems a company runs on.",
};

export const ammertavServices = {
    label: "Services",
    title: "Four services, **built in-house**.",
    // [ Placeholder photos ]
    items: [
        {
            title: "Landing Page",
            description:
                "Strategically designed pages that hold attention and drive one specific conversion: persuasive, functional, and led by the experience rather than decoration.",
            image: "https://picsum.photos/seed/paus-amm-svc0/1200/750",
        },
        {
            title: "Mobile App",
            description:
                "Android and iOS applications built to be responsive, intuitive, and accessible anywhere, any time.",
            image: "https://picsum.photos/seed/paus-amm-svc1/1200/750",
        },
        {
            title: "Company Profile",
            description:
                "Professional digital platforms representing your identity, values, and portfolio in full, building trust and credibility with clients and partners.",
            image: "https://picsum.photos/seed/paus-amm-svc2/1200/750",
        },
        {
            title: "Internal System Web App",
            description:
                "Web applications for internal business processes: smoother workflows, tighter control, and integrated company data management.",
            image: "https://picsum.photos/seed/paus-amm-svc3/1200/750",
        },
    ],
};

export const ammertavClosing = {
    label: "Start a project",
    title: "Tell us how **the business runs**.",
    links: [
        {
            label: "Chat on WhatsApp →",
            href: whatsappLink(
                "Hi PAUS, I'd like to discuss an Ammertav project.",
            ),
        },
        { label: "See INK.Creative →", href: "/business/ink-creative" },
    ],
};
