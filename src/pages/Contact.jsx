import Office from "@/components/contact/Office";
import TopicPicker from "@/components/contact/TopicPicker";
import PageHero from "@/components/layout/PageHero";
import { contactHero } from "@/data/contact";
import { contact } from "@/data/home";

export default function Contact() {
    return (
        <>
            <title>Contact | PAUS</title>
            <PageHero
                image={contactHero.image}
                label={contact.label}
                title={contact.title}
                titleClassName="max-w-[10em] text-cta"
                description={contact.description}
                className="min-h-[max(560px,72vh)]"
            />
            <TopicPicker />
            <Office />
        </>
    );
}
