import { formatIndex } from "@/lib/utils";

const work = [
    ["Company Profile", "Company profile platform for a property developer."],
    [
        "Web App",
        "Internal web app for inventory and purchasing across three warehouses.",
    ],
    ["Landing Page", "Campaign landing page for a product launch."],
    ["Mobile App", "Android and iOS app for customer orders and loyalty."],
    ["Company Profile", "Bilingual company profile for a manufacturing group."],
    ["Web App", "Booking and scheduling system for a clinic network."],
    [
        "Company Profile",
        "Company profile and portfolio site for a construction firm.",
    ],
    ["Landing Page", "Lead-capture page for an education provider."],
    ["Web App", "Dashboard for field-team reporting and approvals."],
];

export const projects = {
    label: "Projects",
    title: "Work we've **shipped**.",
    allLabel: "All",
    types: ["Company Profile", "Web App", "Landing Page", "Mobile App"],
    note: "Client names, years and images are placeholders.",
    // [ Placeholder clients, years and photos ]
    items: work.map(([type, summary], i) => ({
        type,
        client: `[ Client ${formatIndex(i)} ]`,
        year: "[ 20XX ]",
        summary,
        image: `https://picsum.photos/seed/paus-amm-proj${i}/1000/625`,
    })),
};
