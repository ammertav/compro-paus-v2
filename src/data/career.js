import { company, mailtoLink } from "./company";

// [ Placeholder roles: titles, details and requirements to be confirmed ]
const roles = [
    ["Frontend Developer", "Ammertav · Full-time · Semarang"],
    ["Mobile Developer", "Ammertav · Full-time · Semarang"],
    ["UI/UX Designer", "INK.Creative · Full-time · Semarang"],
    ["Content Strategist", "INK.Creative · Contract · Semarang"],
].map(([title, meta]) => ({
    title,
    meta,
    duties: [
        "[ Responsibility 1 ]",
        "[ Responsibility 2 ]",
        "[ Responsibility 3 ]",
    ],
    needs: ["[ Requirement 1 ]", "[ Requirement 2 ]", "[ Requirement 3 ]"],
    apply: mailtoLink(`Application: ${title}`),
}));

export const careerHero = {
    // [ Placeholder photo ]
    image: "https://picsum.photos/seed/paus-career-hero/1920/1200",
    label: "Career",
    description:
        "We're a Semarang team across engineering, design, and delivery.",
    rolesLink: { label: `${roles.length} open roles ↓`, href: "#roles" },
};

export const culture = {
    label: "Culture",
    title: "How we **work**.",
    items: [
        {
            title: "Cross-discipline by default",
            text: "Engineers and designers join a project together from discovery, so decisions about technology and identity are made in the same conversation.",
        },
        {
            title: "Work you can see ship",
            text: "We build in stages that clients review, so your work reaches real users early and often.",
        },
        {
            title: "Accountable after launch",
            text: "The team that builds a system also supports it. You stay close to how your work performs.",
        },
    ],
    // [ Placeholder photos ]
    photos: [0, 1, 2].map(
        (i) => `https://picsum.photos/seed/paus-career-life${i}/1000/1250`,
    ),
};

export const openRoles = {
    title: "Open **roles**.",
    note: "Roles are placeholders",
    dutiesLabel: "You'll be",
    needsLabel: "You'll bring",
    applyLabel: "Apply by email →",
    items: roles,
};

export const careerClosing = {
    label: "No role that fits?",
    title: "Send us **your CV**.",
    links: [
        { label: `${company.email} →`, href: mailtoLink("Open application") },
    ],
};
