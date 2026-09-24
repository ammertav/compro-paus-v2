import { formatIndex } from "@/lib/utils";
import { company } from "./company";
import { channels } from "./contact";

// Wrap the one bold phrase of a line in **…**; <Emphasis> renders it

export const hero = {
    image: "/images/image-hero.webp",
    title: "We build what business runs on, and the **story it runs with**.",
};

export const whoWeAre = {
    label: "Who we are",
    statement:
        "Strategy, build, and brand sit under one roof. **Nothing gets handed between vendors** and lost on the way.",
    link: { label: "About PAUS →", href: "/about" },
};

// Also the About page values; `image` is only shown there
export const pillars = [
    {
        title: "Technology that fits the work",
        description:
            "We start from how the business actually operates, not from a template. The system adapts to the workflow rather than the reverse.",
        // [ Placeholder photo ]
        image: "https://picsum.photos/seed/paus-about-value0/900/675",
    },
    {
        title: "Creative that carries weight",
        description:
            "Identity, content, and interface treated as one problem, so what you launch looks considered and reads clearly.",
        image: "https://picsum.photos/seed/paus-about-value1/900/675",
    },
    {
        title: "One team, end to end",
        description:
            "Strategy, build, and brand sit under one roof. Nothing gets handed between vendors and lost on the way.",
        image: "https://picsum.photos/seed/paus-about-value2/900/675",
    },
];

export const hands = {
    label: "What we do",
    title: "Where people **meet technology**.",
    humanImage: "/images/hand-human.webp",
    robotImage: "/images/hand-robot.webp",
    captions: [
        "**INK.Creative** brings the human side: identity, content, and how a brand is seen.",
        "**Ammertav** brings the systems: apps, platforms, and the tools a business runs on.",
        "**PAUS** is where the two meet, under one accountable team.",
    ],
};

export const business = {
    label: "Our business",
    title: "Two brands, **one accountable team**.",
};

// Angka masih placeholder
export const stats = [
    { value: "200", label: "Clients served" },
    { value: "100", label: "Projects delivered" },
    { value: "2", label: "Brands in group" },
    { value: "6", label: "Core services" },
];

const sectors = [
    "Retail",
    "F&B",
    "Hospitality",
    "Education",
    "Property",
    "Logistics",
    "Healthcare",
    "Professional services",
    "Manufacturing",
    "Automotive",
    "Beauty",
    "Finance",
];

export const clients = {
    label: "Clients",
    title: "Businesses that **run on our work**.",
    note: "Client names and logos are placeholders.",
    items: sectors.map((sector, i) => ({
        name: `[ Client ${formatIndex(i)} ]`,
        sector,
    })),
};

export const careerTeaser = {
    label: "Career",
    title: "Work on technology and brand **in the same room**.",
    description:
        "We're a Semarang team across engineering, design, and delivery. See open roles, or send us your CV.",
    link: { label: "Open roles →", href: "/career" },
};

export const contact = {
    label: "Contact",
    title: "Let's build **something that lasts**.",
    description:
        "Tell us where the business is now, and we'll map what it needs next.",
    rows: [
        {
            label: channels.whatsapp,
            value: company.phoneDisplay,
            href: company.whatsappUrl,
        },
        {
            label: channels.email,
            value: company.email,
            href: `mailto:${company.email}`,
        },
    ],
    link: { label: "All contact details →", href: "/contact" },
};
