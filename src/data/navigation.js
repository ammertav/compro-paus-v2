export const businessLinks = [
    {
        label: "Ammertav",
        description: "IT Solutions",
        href: "/business/ammertav",
    },
    {
        label: "INK.Creative",
        description: "Creative & Digital",
        href: "/business/ink-creative",
    },
];

// An item with `children` renders as the Business dropdown
export const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Business", children: businessLinks },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" },
];

export const navLabels = {
    whatsapp: "Chat on WhatsApp",
    menu: "Menu",
    close: "Close",
};

export const footerColumns = [
    {
        heading: "Company",
        links: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Career", href: "/career" },
            { label: "Contact", href: "/contact" },
        ],
    },
    { heading: "Business", links: businessLinks },
];

export const footerLabels = {
    contact: "Contact",
    follow: "Follow",
};

// [ Placeholder URLs and handles: replace with the real profiles ]
export const socialLinks = [
    { label: "Instagram", handle: "[ @handle ]", href: "#" },
    { label: "LinkedIn", handle: "[ company page ]", href: "#" },
    { label: "TikTok", handle: "[ @handle ]", href: "#" },
];
