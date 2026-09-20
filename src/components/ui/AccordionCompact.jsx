import AccordionBase from "./AccordionBase";

/**
 * Accordion rapat untuk daftar panjang atau kolom sempit.
 * items: [{ question, answer }]
 */
export default function AccordionCompact(props) {
    return (
        <AccordionBase
            headerClassName="py-3.25"
            questionClassName="text-[15px]"
            iconClassName="text-[17px]"
            answerClassName="pr-7.5 pb-5.5"
            {...props}
        />
    );
}
