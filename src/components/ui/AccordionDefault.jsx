import AccordionBase from "./AccordionBase";

/**
 * Accordion ukuran penuh untuk blok FAQ.
 * items: [{ question, answer }]
 */
export default function AccordionDefault(props) {
    return (
        <AccordionBase
            headerClassName="py-7.5 pr-4"
            questionClassName="text-[clamp(17px,1.6vw,19px)] font-medium"
            iconClassName="text-[22px]"
            answerClassName="pr-12 pb-8"
            {...props}
        />
    );
}
