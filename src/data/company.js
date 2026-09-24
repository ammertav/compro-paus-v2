export const company = {
    name: "PT. Pandu Usaha Nusantara",
    tagline: "IT Solutions & Creative Digital Agency",
    summary:
        "PT. Pandu Usaha Nusantara pairs integrated technology with creative digital work, so businesses can adapt and grow on a footing that lasts.",
    email: "pausnusantara@gmail.com",
    address: "Jl. Wanamukti Residance No. 8, Kota Semarang",
    phoneDisplay: "0821 5678 91011",
    whatsappUrl: "https://wa.me/62821567891011",
    location: "Semarang, Indonesia",
    copyrightYear: 2026,
};

// WhatsApp chat with a pre-filled first message
export const whatsappLink = (message) =>
    `${company.whatsappUrl}?text=${encodeURIComponent(message)}`;

// Email to PAUS with a pre-filled subject
export const mailtoLink = (subject) =>
    `mailto:${company.email}?subject=${encodeURIComponent(subject)}`;
