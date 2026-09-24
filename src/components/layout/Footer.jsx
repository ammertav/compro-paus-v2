import { Link } from "react-router";
import { cn } from "@/lib/utils";
import { company } from "@/data/company";
import { footerColumns, footerLabels, socialLinks } from "@/data/navigation";
import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t border-white/12 bg-navy pt-20 pb-10">
            <Container className="grid gap-10 text-label leading-relaxed sm:grid-cols-2 lg:grid-cols-5">
                <div className="flex flex-col gap-6">
                    <img
                        src="/images/logo-paus-black.webp"
                        alt="PAUS"
                        className="h-8 self-start brightness-0 invert"
                    />
                    <p className="text-white/70">
                        {company.name}
                        <br />
                        {company.tagline}
                    </p>
                </div>

                {footerColumns.map((column) => (
                    <FooterColumn key={column.heading} heading={column.heading}>
                        {column.links.map((link) => (
                            <Link key={link.href} to={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </FooterColumn>
                ))}

                <FooterColumn
                    heading={footerLabels.contact}
                    className="text-white/70"
                >
                    <span>{company.address}</span>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                    <a
                        href={company.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {company.phoneDisplay}
                    </a>
                </FooterColumn>

                <FooterColumn heading={footerLabels.follow}>
                    {socialLinks.map((link) => (
                        <a key={link.label} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </FooterColumn>
            </Container>

            <Container className="mt-16 flex flex-wrap justify-between gap-4 border-t border-white/16 pt-6 text-[13px] text-white/76">
                <span>
                    © {company.copyrightYear} {company.name}
                </span>
                <span>{company.location}</span>
            </Container>
        </footer>
    );
}

function FooterColumn({ heading, className, children }) {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            <p className="mb-2 text-[13px] text-white/76">{heading}</p>
            {children}
        </div>
    );
}
