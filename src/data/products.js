import { whatsappLink } from "./company";

const demo = (name) => ({
    label: `Ask for a ${name} demo →`,
    href: whatsappLink(`Hi PAUS, I'd like a demo of ${name}.`),
});

export const products = {
    label: "Products",
    title: "Two products, **built and run by us**.",
    // [ Placeholder photos ]
    items: [
        {
            name: "BePOS",
            kind: "Point of sale",
            status: "Live",
            tagline: "point of sale for every branch.",
            description:
                "Real-time point of sale with integrated inventory and one dashboard for multi-branch management.",
            image: "https://picsum.photos/seed/paus-amm-product0/2000/860",
            features: [
                "Real-time POS for accurate, centralised transaction records",
                "Integrated inventory management for tighter stock control",
                "One dashboard for efficient multi-branch management",
                "A flexible system, configurable to how the business runs",
                "Barcode-based ordering to speed up service and cut operational load",
            ],
            demo: demo("BePOS"),
        },
        {
            name: "HRIES",
            kind: "HR information system",
            status: "Live",
            tagline: "people operations in one system.",
            description:
                "[ One-line description of HRIES to be supplied. ] Employee records, attendance, leave, and payroll in one place, so HR spends less time on admin.",
            image: "https://picsum.photos/seed/paus-amm-product1/2000/860",
            features: [
                "[ Employee database and digital records ]",
                "[ Attendance and shift management ]",
                "[ Leave requests and approvals ]",
                "[ Payroll processing ]",
                "[ HR reporting dashboard ]",
            ],
            demo: demo("HRIES"),
        },
    ],
};
