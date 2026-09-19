import Container from "../ui/Container";
import Parallax from "../ui/Parallax";
import ContactForm from "./ContactForm";
import { company } from "@/data/company";

const details = [
    { label: "Phone", value: company.phone, href: `tel:${company.phone}` },
    { label: "Email", value: company.email, href: `mailto:${company.email}` },
    { label: "Office", value: company.address },
];

export default function Enquiry() {
    return (
        <section className="pt-20 md:pt-22.5">
            <Container className="rv-stagger grid items-start gap-14 lg:grid-cols-2">
                <div className="rv rounded-[22px] bg-white px-6 py-10 md:px-11 md:py-12">
                    <ContactForm />
                </div>

                <div className="rv">
                    {details.map((detail) => (
                        <div
                            key={detail.label}
                            className="border-t border-primary/18 py-7.5"
                        >
                            <p className="mb-3 text-[13px] font-medium tracking-[.01em] text-primary/74">
                                {detail.label}
                            </p>
                            <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.6] wrap-anywhere">
                                {detail.href ? (
                                    <a href={detail.href}>{detail.value}</a>
                                ) : (
                                    detail.value
                                )}
                            </p>
                        </div>
                    ))}

                    <div className="border-t border-primary/18 pt-7.5">
                        <Parallax factor={0.08}>
                            <figure className="aspect-4/3 overflow-hidden rounded-2xl">
                                <img
                                    src="/images/image-about.webp"
                                    alt="The PAUS team"
                                    className="block size-full object-cover"
                                />
                            </figure>
                        </Parallax>
                    </div>
                </div>
            </Container>
        </section>
    );
}
