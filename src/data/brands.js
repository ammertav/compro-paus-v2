export const brands = [
    {
        name: "Ammertav",
        category: "IT Solutions",
        logo: "/images/brand-ammertav.webp",
        // Logo berwarna putih, jadi butuh latar navy
        isDarkLogoBg: true,
        summary:
            "Integrated technology solutions that raise operational effectiveness and business efficiency.",
        description:
            "Integrated technology solutions that raise operational effectiveness and business efficiency, from customer-facing pages to the internal systems a company runs on.",
        offerings: [
            "Landing pages built to convert",
            "Android and iOS applications",
            "Company profile platforms",
            "Internal system web applications",
        ],
        cta: { label: "Ammertav services", href: "/services#ammertav" },
    },
    {
        name: "INK.Creative",
        category: "Creative & Digital",
        logo: "/images/brand-ink-creative.webp",
        // Logo sudah punya plate putih, jadi latarnya putih
        isDarkLogoBg: false,
        summary:
            "Helping brands build an identity that is strong, consistent, and relevant in digital, through creative and strategic work.",
        description:
            "Helping brands build an identity that is strong, consistent, and relevant in digital, through creative and strategic work rather than decoration.",
        offerings: [
            "Company profile and brand platforms",
            "Personal branding programmes",
            "Content and visual strategy",
            "Digital communication direction",
        ],
        cta: { label: "INK.Creative services", href: "/services#ink" },
    },
];

export const products = [
    {
        status: "Live",
        name: "BePOS",
        description:
            "Real-time point of sale with integrated inventory and one dashboard for multi-branch management.",
    },
    {
        status: "Placeholder",
        name: "Product 02",
        description:
            "Send us the details for the second Ammertav product and we'll write this block properly.",
    },
    {
        status: "Placeholder",
        name: "Product 03",
        description:
            "Same for the third: name, problem it solves, and who it's for.",
    },
];

export const marqueeItems = [
    "Ammertav",
    "INK.Creative",
    "BePOS",
    "Point of Sale",
    "Web & Mobile",
    "Branding",
];
