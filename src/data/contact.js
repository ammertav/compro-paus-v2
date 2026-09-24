import { company } from "./company";

export const contactHero = {
    image: "/images/image-hero.webp",
};

// Labels for the two direct channels, shared with the Home contact rows
export const channels = {
    whatsapp: "WhatsApp",
    email: "Email",
};

export const enquiry = {
    topicLabel: "1 · What's it about?",
    reachLabel: "2 · Reach us directly",
    topics: [
        "IT solutions (Ammertav)",
        "Branding & digital creative (INK.Creative)",
        "BePOS point of sale",
        "Both technology and brand",
        "Not sure yet",
    ],
    // `topic` is null until one is picked
    message: (topic) =>
        topic
            ? `Hi PAUS, I'd like to discuss: ${topic}.`
            : "Hi PAUS, I'd like to discuss a project.",
    subject: (topic) => (topic ? `Enquiry: ${topic}` : "Project enquiry"),
    hint: (topic) =>
        topic
            ? `Your message will open with “${topic}” filled in.`
            : "Pick a topic and your message will open pre-filled.",
};

export const office = {
    label: "Office",
    title: "Jl. Wanamukti Residance No. 8, **Kota Semarang**",
    mapLink: {
        label: "Open in Google Maps →",
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address)}`,
    },
    mapEmbed: `https://www.google.com/maps?q=${encodeURIComponent(company.address)}&output=embed`,
    mapTitle: "PAUS office map",
    followLabel: "Follow",
};
