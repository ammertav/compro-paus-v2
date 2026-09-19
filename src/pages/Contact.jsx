import Enquiry from "@/components/contact/Enquiry";
import Faq from "@/components/contact/Faq";
import PageHero from "@/components/ui/PageHero";
import useReveal from "@/hooks/useReveal";

export default function Contact() {
    useReveal();

    return (
        <>
            <title>Contact Us | PAUS</title>

            <PageHero
                label="Contact Us"
                title={
                    <>
                        Let&apos;s build{" "}
                        <span className="font-medium">
                            something that lasts
                        </span>
                        .
                    </>
                }
                description="Tell us where the business is now and we'll map what it needs next. We reply to every enquiry directly."
                titleClassName="max-w-[15em]"
            />

            <Enquiry />
            <Faq />
        </>
    );
}
