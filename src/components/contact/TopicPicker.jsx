import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/motion/Reveal";
import ContactRow from "@/components/ui/ContactRow";
import { company, mailtoLink, whatsappLink } from "@/data/company";
import { channels, enquiry } from "@/data/contact";
import { cn } from "@/lib/utils";

// Picking a topic pre-fills the WhatsApp message and the email subject.
// Clicking the chosen topic again clears it.
export default function TopicPicker() {
    const [topic, setTopic] = useState(null);

    return (
        <section className="bg-bone py-section text-navy">
            <Container>
                <Reveal as="p" className="mb-6 text-label text-navy/74">
                    {enquiry.topicLabel}
                </Reveal>
                <Reveal className="flex flex-wrap gap-3">
                    {enquiry.topics.map((item) => (
                        <button
                            key={item}
                            type="button"
                            aria-pressed={topic === item}
                            onClick={() =>
                                setTopic(topic === item ? null : item)
                            }
                            className={cn(
                                "border border-navy px-5.5 py-3.5 transition-colors duration-500",
                                topic === item && "bg-navy text-white",
                            )}
                        >
                            {item}
                        </button>
                    ))}
                </Reveal>

                <Reveal
                    as="p"
                    className="mt-section-sm text-label text-navy/74"
                >
                    {enquiry.reachLabel}
                </Reveal>
                <Reveal className="mt-6 border-t border-navy/16">
                    <ContactRow
                        label={channels.whatsapp}
                        value={company.phoneDisplay}
                        href={whatsappLink(enquiry.message(topic))}
                    />
                    <ContactRow
                        label={channels.email}
                        value={company.email}
                        href={mailtoLink(enquiry.subject(topic))}
                    />
                </Reveal>
                <Reveal as="p" className="mt-4 text-sm text-navy/68">
                    {enquiry.hint(topic)}
                </Reveal>
            </Container>
        </section>
    );
}
