import { company } from "./company";

export const aboutHero = {
    image: "/images/image-about.webp",
    label: "About PAUS",
    title: "A group built to carry **technology and brand** together.",
};

export const story = {
    label: "Our story",
    title: "Why we **started**.",
    // [ Placeholder photo ]
    image: "https://picsum.photos/seed/paus-about-story/1200/900",
    lead: "PT. Pandu Usaha Nusantara was founded in Semarang in [ year ] on a simple observation: businesses were buying technology from one vendor and their identity from another, and **the two rarely met**.",
    paragraphs: [
        "We started with Ammertav, building landing pages, mobile apps, company profile platforms, and the internal web applications companies run on. As clients asked us to carry their brand as well as their systems, INK.Creative followed, bringing identity, content, and personal branding under the same roof.",
        "Today the group works with businesses of every size, with a particular focus on the digital transformation of small and medium enterprises across Indonesia. BePOS, our point-of-sale product, grew out of that work: a system for businesses that run more than one branch and need one clear view of all of them.",
        "[ Add a closing paragraph about where PAUS is heading next. ]",
    ],
};

export const vision = {
    label: "Vision",
    statement: "[ Vision statement to be supplied ]",
};

export const mission = {
    label: "Mission",
    title: "Four commitments **we hold to**.",
    items: [
        "Build IT products and solutions that are innovative, reliable, and accessible to businesses of every size.",
        "Deliver high-quality IT services backed by professional, accountable technical support.",
        "Support the digital transformation of small and medium enterprises across Indonesia.",
        "Guarantee the security, confidentiality, and integrity of client data in every project we complete.",
    ],
};

// The values themselves are the Home pillars
export const valuesLabel = "Values";

// [ Placeholder names and photos ]
const people = (group, roles) =>
    roles.map((role, i) => ({
        name: "[ Name ]",
        role,
        image: `https://picsum.photos/seed/paus-${group}-${i}/600/800`,
    }));

export const leadership = {
    label: "Leadership",
    title: "The people **accountable for it**.",
    groups: [
        {
            name: "Board of Commissioners",
            people: people("com", [
                "President Commissioner",
                "Commissioner",
                "Independent Commissioner",
            ]),
        },
        {
            name: "Board of Directors",
            people: people("dir", [
                "Chief Executive Officer",
                "Chief Operating Officer",
                "Chief Technology Officer",
                "Chief Financial Officer",
                "Chief Marketing Officer",
                "Chief Creative Officer",
            ]),
        },
    ],
};

export const companyDetails = {
    label: "Company details",
    title: "One legal entity, **four working units**.",
    units: [
        { name: "Ammertav", note: "IT solutions & product engineering" },
        { name: "INK.Creative", note: "Branding & digital creative" },
        { name: "Operations", note: "Delivery, QA and client support" },
        { name: "Corporate", note: "Finance, legal and people" },
    ],
    legal: [
        { key: "Legal name", value: company.name },
        { key: "Field", value: company.tagline },
        { key: "Established", value: "[ Year ]" },
        { key: "Deed of establishment", value: "[ Deed no. / notary ]" },
        { key: "NIB", value: "[ Business ID number ]" },
        { key: "NPWP", value: "[ Tax ID number ]" },
        { key: "Registered address", value: company.address },
    ],
};

export const aboutClosing = {
    title: "Let's build **something that lasts**.",
    links: [
        { label: "Chat on WhatsApp →", href: company.whatsappUrl },
        { label: "Contact page →", href: "/contact" },
    ],
};
