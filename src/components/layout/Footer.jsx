import { Link } from "react-router";
import Container from "../ui/Container";
import { company } from "@/data/company";
import { footerColumns } from "@/data/navigation";

const LABEL_CLASSES =
    "mb-4 text-[13px] font-medium tracking-[.01em] text-white/66";

export default function Footer() {
    return (
        <footer className="overflow-hidden bg-primary text-white">
            <Container className="pt-20 md:pt-25">
                <div className="grid grid-cols-1 gap-x-8 gap-y-12 wrap-anywhere sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <img
                            src="/images/logo-paus-black.webp"
                            alt="PAUS"
                            className="mb-4.5 block h-7.5 w-auto object-contain brightness-0 invert"
                        />
                        <p className="text-[15px] leading-[1.7] text-white/66">
                            {company.name}
                            <br />
                            {company.tagline}
                        </p>
                    </div>

                    {footerColumns.map((column) => (
                        <div key={column.heading}>
                            <p className={LABEL_CLASSES}>{column.heading}</p>
                            <div className="flex flex-col gap-2.5 text-[15px]">
                                {column.links.map((link) => (
                                    <Link key={link.href} to={link.href}>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div>
                        <p className={LABEL_CLASSES}>Contact</p>
                        <div className="flex flex-col gap-2.5 text-[15px]">
                            <a href={`tel:${company.phone}`}>{company.phone}</a>
                            <a href={`mailto:${company.email}`}>
                                {company.email}
                            </a>
                            <span className="leading-[1.7] text-white/66">
                                {company.address}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-18 flex flex-wrap items-center justify-between gap-6 border-t border-white/14 py-6.5 text-[13px] font-medium tracking-[.01em] text-white/66">
                    <span>&copy; PAUS 2026. All rights reserved.</span>
                    <span className="flex gap-6">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/terms">Terms &amp; Conditions</Link>
                    </span>
                </div>
            </Container>

            {/* Wordmark dekoratif */}
            <div aria-hidden="true" className="px-6 leading-0 md:px-10">
                <p className="text-center text-[clamp(70px,17vw,260px)] leading-[.8] font-semibold tracking-[-.05em] text-white/7 select-none">
                    PAUS
                </p>
            </div>
        </footer>
    );
}
