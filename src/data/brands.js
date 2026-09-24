import { products } from "./products";

export const brands = [
    {
        name: "Ammertav",
        category: "IT Solutions",
        // White logo, shown on a navy tile over the photo
        logo: "/images/brand-ammertav.webp",
        // [ Placeholder photo ]
        image: "https://picsum.photos/seed/paus-b-ammertav/1400/1600",
        description:
            "Integrated technology solutions that raise operational effectiveness and business efficiency, from customer-facing pages to the internal systems a company runs on.",
        offerings: [
            "Landing pages built to convert",
            "Android and iOS applications",
            "Company profile platforms",
            "Internal system web applications",
        ],
        cta: { label: "Explore Ammertav →", href: "/business/ammertav" },
    },
    {
        name: "INK.Creative",
        category: "Creative & Digital",
        // Dark logo, shown on bone
        logo: "/images/brand-ink-creative.webp",
        image: "/images/image-about.webp",
        description:
            "Helping brands build an identity that is strong, consistent, and relevant in digital, through **creative and strategic work** rather than decoration.",
        offerings: [
            "Company profile and brand platforms",
            "Personal branding programmes",
            "Content and visual strategy",
            "Digital communication direction",
        ],
        cta: {
            label: "Explore INK.Creative →",
            href: "/business/ink-creative",
        },
    },
];

// Home's BePOS block. Name, tagline and features come from products.js
const [beposProduct] = products.items;

export const bepos = {
    label: `Product · ${beposProduct.status}`,
    title: `**${beposProduct.name}**, ${beposProduct.tagline}`,
    // [ Placeholder photo ]
    image: "https://picsum.photos/seed/paus-b-bepos/2000/1000",
    features: beposProduct.features,
};
