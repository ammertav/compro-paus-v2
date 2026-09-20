import { useState } from "react";
import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";
import FieldSelect from "../ui/FieldSelect";
import FieldText from "../ui/FieldText";
import FieldTextarea from "../ui/FieldTextarea";
import { enquiryOptions } from "@/data/contact";

const INITIAL_FORM = {
    name: "",
    company: "",
    email: "",
    phone: "",
    need: "",
    message: "",
};

// TODO: sambungkan ke backend/email service, saat ini form belum mengirim data
export default function ContactForm() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSent(true);
    };

    const handleReset = () => {
        setForm(INITIAL_FORM);
        setIsSent(false);
    };

    if (isSent) {
        return (
            <div>
                <p className="mb-3.5 text-[13px] font-medium tracking-[.01em] text-primary/74">
                    Message sent
                </p>
                <h3 className="mb-3.5 text-[30px] tracking-[-.02em]">
                    Thank you, we&apos;ll be in touch.
                </h3>
                <p className="mb-7 text-base leading-[1.8] text-primary/68">
                    A member of the team replies within one working day. This is
                    a prototype, so nothing was actually transmitted.
                </p>
                <ButtonSecondary size="sm" onClick={handleReset}>
                    Send another
                </ButtonSecondary>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-5.5 sm:grid-cols-2">
                <FieldText
                    label="Name"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <FieldText
                    label="Company"
                    name="company"
                    placeholder="Company name"
                    value={form.company}
                    onChange={handleChange}
                />
                <FieldText
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <FieldText
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="+62"
                    value={form.phone}
                    onChange={handleChange}
                />
            </div>

            <FieldSelect
                label="What do you need?"
                name="need"
                options={enquiryOptions}
                value={form.need}
                onChange={handleChange}
                className="mt-5.5"
            />
            <FieldTextarea
                label="Message"
                name="message"
                rows={5}
                placeholder="Where the business is now, and what you're trying to change."
                value={form.message}
                onChange={handleChange}
                className="mt-5.5"
            />

            <ButtonPrimary
                type="submit"
                className="mt-7 w-full py-4.5 text-[15px]"
            >
                Send message
            </ButtonPrimary>
            <p className="mt-4.5 text-[13px] leading-[1.6] text-primary/74">
                We guarantee the confidentiality of anything you share with us.
            </p>
        </form>
    );
}
